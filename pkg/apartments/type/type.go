package apartmentTypes

import "strings"

type enumType struct {
	numberOfStates int        //-1 -- Error, 0..N-1 -- States
	possibleInput  [][]string //possibleInput[i] --набор допустимых инпутов, дающих состояние i
	jsonOutput     []string   //jsonOutput[i] --JSON для i-го состояния
	jsonError      string     //JSON для ошибки чтения
}

func (e *enumType) GetState(input string) int {
	for res, inputSet := range e.possibleInput {
		for _, s := range inputSet {
			if strings.Compare(s, input) == 0 {
				return res
			}
		}
	}
	return -1
}
func (e *enumType) GetJSON(state int) string {
	if state == -1 {
		return e.jsonError
	}
	return e.jsonOutput[state]
}
