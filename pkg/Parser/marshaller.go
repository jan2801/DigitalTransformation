package apartments

import (
	"encoding/json"
)

type ApartmentJSON struct {
	Address   string  `json:"Address"`
	UserID    uint32  `json:"UserID"`
	Rooms     string  `json:"Rooms"`
	Type      string  `json:"Type"`
	Height    int16   `json:"Height"`
	Material  string  `json:"Material"`
	Floor     int16   `json:"Floor"`
	Area      float64 `json:"Area"`
	Kitchen   float64 `json:"Kitchen"`
	Balcony   string  `json:"Balcony"`
	Metro     int     `json:"Metro"`
	Condition string  `json:"Condition"`
	Latitude  float64 `json:"Latitude"`
	Longitude float64 `json:"Longitude"`
}

func MarshalApartments(apartments []*UserApartment) []byte {
	type respBody struct {
		Apartments []ApartmentJSON `json:"apartments"`
	}
	var jsonApartments []ApartmentJSON
	for _, el := range apartments {
		jsonApartments = append(jsonApartments, ApartmentJSON{
			UserID:  el.UserID,
			Address: el.Address,
			Rooms:   el.Rooms,
			//Type: apartmentTypes.Type.GetJSON(el.Type),
			Type:   el.Type,
			Height: el.Height,
			//Material:    apartmentTypes.Material.GetJSON(el.Material),
			Material: el.Material,
			Floor:    el.Floor,
			Area:     el.Area,
			Kitchen:  el.Kitchen,
			//Balcony:         apartmentTypes.Balcony.GetJSON(el.Balcony),
			Balcony: el.Balcony,
			Metro:   el.Metro,
			//Condition:       apartmentTypes.Condition.GetJSON(el.Condition),
			Condition: el.Condition,
			Latitude:  el.Latitude,
			Longitude: el.Longitude,
		})
	}
	data, _ := json.Marshal(respBody{Apartments: jsonApartments})
	//MORE READABLE FORMAT:
	//data, _ := json.MarshalIndent(respBody{Apartments: jsonApartments}, "", "\t")
	return data
}
