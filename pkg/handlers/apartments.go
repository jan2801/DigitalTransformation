package handlers

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io"
	"moshack_2022/pkg/apartments"
	"moshack_2022/pkg/apartments/excelParser"
	"moshack_2022/pkg/session"
	"net/http"

	"github.com/ybbus/jsonrpc"
	"go.uber.org/zap"
)

type ApartmentHandler struct {
	Tmpl          *template.Template
	ApartmentRepo apartments.ApartmentRepo
	Logger        *zap.SugaredLogger
	Sessions      *session.SessionsManager
	JSONrpcClient jsonrpc.RPCClient
}

func (h *ApartmentHandler) Load(w http.ResponseWriter, r *http.Request) {
	err := h.Tmpl.ExecuteTemplate(w, "loadxls.html", nil)
	if err != nil {
		http.Error(w, "Template errror", http.StatusInternalServerError)
		return
	}
}

func (h *ApartmentHandler) Download(w http.ResponseWriter, r *http.Request) {
	userSession, err := h.Sessions.Check(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	aparts, err := h.ApartmentRepo.GetAllUserApartmentsByUserID(userSession.UserID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	file, err := excelParser.UnparseXLSX(aparts)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	err = file.Write(w)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func (h *ApartmentHandler) ParseFile(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(128 * 1024 * 1024) // 128 MBytes
	if err != nil {
		http.Error(w, "File errror: file is too much", http.StatusInternalServerError)
		return
	}
	file, header, err := r.FormFile("xls_file")
	if err != nil {
		http.Error(w, "File errror", http.StatusInternalServerError)
		return
	}
	defer file.Close()

	h.Logger.Infof("header.Filename %v\n", header.Filename)
	h.Logger.Infof("header.Header %#v\n", header.Header)

	userSession, err := h.Sessions.Check(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	aparts, err := excelParser.ParseXLSX(file, userSession.UserID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	for _, apart := range aparts {
		_, err := h.ApartmentRepo.AddUserApartment(apart)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}

	go h.JSONrpcClient.Call("update_pull", &userSession.UserID)

	//w.Write(apartments.MarshalApartments(aparts))
	data, err := json.Marshal(&aparts)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Write(data)
}

func (h *ApartmentHandler) Table(w http.ResponseWriter, r *http.Request) {
	userSession, err := h.Sessions.Check(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	aparts, err := h.ApartmentRepo.GetAllUserApartmentsByUserID(userSession.UserID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	data, err := json.Marshal(&aparts)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	w.Write(data)
}

func (h *ApartmentHandler) Estimate(w http.ResponseWriter, r *http.Request) {
	type ApartmentID struct {
		Id uint32
	}
	var apartmentID ApartmentID
	rData, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer r.Body.Close()

	err = json.Unmarshal(rData, &apartmentID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	type AnalogsPrices struct {
		Analogs    []uint32 `json:"Analogs"`
		PriceM2    float64  `json:"PriceM2"`
		TotalPrice float64  `json:"TotalPrice"`
	}
	var analogs AnalogsPrices
	analogs.Analogs = make([]uint32, 0)
	response, err := h.JSONrpcClient.Call("get_analogs", &apartmentID.Id)
	if err != nil {
		fmt.Println(err) //
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	data, ok := response.Result.(string)
	if !ok {
		fmt.Println("not string - ", response.Result) //
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	err = json.Unmarshal([]byte(data), &analogs)
	if err != nil {
		fmt.Println(err)             //
		fmt.Println(response.Result) //
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Println("Result from get_analogs:\n", analogs) //

	aparts := make([]*apartments.DBApartment, 0)
	for _, id := range analogs.Analogs {
		apart, err := h.ApartmentRepo.GetDBApartmentByID(id)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		aparts = append(aparts, apart)
	}

	type Result struct {
		Analogs    []*apartments.DBApartment
		PriceM2    float64
		TotalPrice float64
	}
	res := Result{
		Analogs:    aparts,
		PriceM2:    analogs.PriceM2,
		TotalPrice: analogs.TotalPrice,
	}

	wData, err := json.Marshal(res)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Write(wData)
}

func (h *ApartmentHandler) Reestimate(w http.ResponseWriter, r *http.Request) {
	type AnalogsAdjastments struct {
		Id        uint32        `json:"id"`
		Analogs   []uint32      `json:"analogs"`
		Tender    [1]float64    `json:"tender"`
		Floor     [3][3]float64 `json:"floor"`
		Area      [6][6]float64 `json:"area"`
		Kitchen   [3][3]float64 `json:"kitchen"`
		Balcony   [2][2]float64 `json:"balcony"`
		Metro     [6][6]float64 `json:"metro"`
		Condition [3][3]float64 `json:"condition"`
	}
	var rParams AnalogsAdjastments
	rData, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer r.Body.Close()

	err = json.Unmarshal(rData, &rParams)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	response, err := h.JSONrpcClient.Call("recalculate_price_expert_flat", &rParams)
	if err != nil {
		fmt.Println(err) //
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	data, ok := response.Result.(string)
	if !ok {
		fmt.Println("not string - ", response.Result) //
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	type ReculculatedPrice struct {
		PriceM2    float64 `json:"Price"`
		TotalPrice float64 `json:"TotalPrice"`
	}
	var prices ReculculatedPrice
	err = json.Unmarshal([]byte(data), &prices)
	if err != nil {
		fmt.Println(err)             //
		fmt.Println(response.Result) //
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Println("Result from get_analogs:\n", prices) //

	wData, ok := response.Result.([]byte)
	if !ok {
		fmt.Println("not []byte - ", response.Result) //
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Write(wData)
}

func (h *ApartmentHandler) EstimateAll(w http.ResponseWriter, r *http.Request) {
	// рассчитываем весь пулл
	// мб сразу формируем ексель и предлагаем скачать бесплатно без смс и регистрации?
	type UserIDAdjastments struct {
		UserID    uint32        `json:"user_id"`
		Tender    [1]float64    `json:"tender"`
		Floor     [3][3]float64 `json:"floor"`
		Area      [6][6]float64 `json:"area"`
		Kitchen   [3][3]float64 `json:"kitchen"`
		Balcony   [2][2]float64 `json:"balcony"`
		Metro     [6][6]float64 `json:"metro"`
		Condition [3][3]float64 `json:"condition"`
	}

	var rParams UserIDAdjastments
	rData, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer r.Body.Close()

	err = json.Unmarshal(rData, &rParams)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	response, err := h.JSONrpcClient.Call("calculate_pull", &rParams)
	if err != nil {
		fmt.Println(err) //
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	data, ok := response.Result.(string)
	if !ok {
		fmt.Println("not string - ", response.Result) //
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// TODO:
	type ReculculatedPrice struct {
		PricesM2    []float64 `json:"AllPrices"`
		TotalPrices []float64 `json:"FinalPrice"`
	}
	var prices ReculculatedPrice
	err = json.Unmarshal([]byte(data), &prices)
	if err != nil {
		fmt.Println(err)             //
		fmt.Println(response.Result) //
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Println("Result from get_analogs:\n", prices) //

	wData, ok := response.Result.([]byte)
	if !ok {
		fmt.Println("not []byte - ", response.Result) //
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Write(wData)
}
