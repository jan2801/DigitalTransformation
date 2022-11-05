package main

import (
	"html/template"

	// "mime/multipart"
	// "moshack_2022/pkg/apartments/excelParser"
	"moshack_2022/pkg/apartments"
	"moshack_2022/pkg/handlers"

	//	"os"

	"moshack_2022/pkg/middleware"
	"moshack_2022/pkg/session"
	"moshack_2022/pkg/user"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/ybbus/jsonrpc"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"go.uber.org/zap"
)

func main() {

	templates := template.Must(template.ParseGlob("./templates/*.html"))
	//templates := template.Must(template.ParseGlob("../../templates/*.html")) // for testing

	// TODO - нормальная конфигурация
	dsn := "host=localhost user=postgres password=3546"
	dsn += " dbname=moshack port=5432 sslmode=disable"

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err) // TODO
	}
	sqlDB, err := db.DB()
	if err != nil {
		panic(err) // TODO
	}
	err = sqlDB.Ping()
	if err != nil {
		panic(err) // TODO
	}

	// if len(os.Args) > 1 {
	// 	excelParser.MakeXLSX(db.Table("db_apartments"), false, "MyNewXLSX.XLSX")
	// 	//return
	// 	file, err := os.Open("test.xlsx")
	// 	if err != nil {
	// 		panic(err)
	// 	}
	// 	aparts, err := excelParser.ParseXLSX(multipart.File(file), 15)
	// 	if err != nil {
	// 		panic(err)
	// 	}

	// 	for _, apart := range aparts {
	// 		db.Table("db_apartments").Create(apart)
	// 	}

	// 	println(string(apartments.MarshalApartments(aparts)))
	// 	return
	// }

	sm := session.NewSessionsManager()
	zapLogger, _ := zap.NewProduction()
	defer zapLogger.Sync() // flushes buffer, if any
	logger := zapLogger.Sugar()

	userRepo := user.NewMemoryRepo(db)
	userHandler := &handlers.UserHandler{
		Tmpl:     templates,
		UserRepo: userRepo,
		Logger:   logger,
		Sessions: sm,
	}

	apartmentRepo := apartments.NewApartmentRepo(db)

	rpcClient := jsonrpc.NewClient("http://localhost:5000")
	if err != nil {
		logger.Error("No connection to python -", err)
		//panic(err) // TODO
	}
	apartmentHandler := &handlers.ApartmentHandler{
		Tmpl:          templates,
		Logger:        logger,
		ApartmentRepo: apartmentRepo,
		Sessions:      sm,
		JSONrpcClient: rpcClient,
	}

	r := mux.NewRouter()

	fileServer := http.StripPrefix("/static/", http.FileServer(http.Dir("./static/")))
	//fileServer := http.StripPrefix("/static/", http.FileServer(http.Dir("../../static/"))) // for testing
	r.PathPrefix("/static/").Handler(fileServer)

	r.HandleFunc("/", userHandler.Index).Methods("GET")
	r.HandleFunc("/login", userHandler.LoginGET).Methods("GET")
	r.HandleFunc("/login", userHandler.LoginPOST).Methods("POST")

	r.HandleFunc("/logout", userHandler.Logout).Methods("POST")
	r.HandleFunc("/registration", userHandler.Registration).Methods("GET")
	r.HandleFunc("/registration", userHandler.Register).Methods("POST")

	r.HandleFunc("/loadxls", apartmentHandler.Load).Methods("GET")
	r.HandleFunc("/loadxls", apartmentHandler.ParseFile).Methods("POST")

	r.HandleFunc("/estimation", apartmentHandler.Table).Methods("GET")
	r.HandleFunc("/estimation", apartmentHandler.Estimate).Methods("POST")
	r.HandleFunc("/reestimation", apartmentHandler.Reestimate).Methods("POST")
	r.HandleFunc("/finalestimation", apartmentHandler.EstimateAll).Methods("POST")

	r.HandleFunc("/downloadxls", apartmentHandler.Download).Methods("GET")

	mux := middleware.Auth(sm, r)
	mux = middleware.AccessLog(logger, mux)
	mux = middleware.Panic(mux)

	addr := ":8080"
	logger.Infow("starting server",
		"type", "START",
		"addr", addr,
	)
	http.ListenAndServe(addr, mux)
}
