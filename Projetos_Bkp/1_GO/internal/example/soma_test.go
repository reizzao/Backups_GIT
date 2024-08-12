package example_test

import (
	"fmt"
	"testing"

	"github.com/rzjprogramador/base_golang/internal/example"
)

func TestSoma(t *testing.T) {

	action, _ := example.Soma(2, 1)
	testerOK := 3
	// testerError := errors.New("Ops.. resultado maior que a regra que é 10")
	// TODO: Testar a mensagem de erro em arquivo diferente

	if action != testerOK {
		t.Error("ops..Quebrou...")
	}
	// t.Log(action)
	fmt.Println("o Resultado OK é: ", action)

}
