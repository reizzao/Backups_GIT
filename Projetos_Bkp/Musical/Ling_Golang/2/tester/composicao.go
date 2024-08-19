package tester

import (
	"fmt"

	"github.com/reizzao/musical/api/seed"
	"github.com/reizzao/musical/api/usecase"
)

func TesterComposicao() {
	fmt.Println(usecase.CreateComposicao(seed.ComposicaoDefaultSeed))
}
