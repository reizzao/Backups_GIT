package tester

import (
	"fmt"

	"github.com/reizzao/musical/api/usecases/create"
	"github.com/reizzao/musical/test/protest"
)

func Main_Tester() {
	// tester.Main_Tester() // removido tester para usar somente o test oficialtester

	// Tester Create Composicao Exemplo Reinventar
	fmt.Println(
		create.Create_Composicao(protest.Composicao_Reinventar_InputPROTEST),
	)

}
