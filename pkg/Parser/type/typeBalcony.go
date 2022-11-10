package apartmentTypes

var Balcony enumType = enumType{
	numberOfStates: 2,
	possibleInput: [][]string{
		{"Нет"},
		{"Есть"},
	},
	jsonOutput: []string{
		"None",
		"Yes",
	},
	jsonError: "Error",
}
