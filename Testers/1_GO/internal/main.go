package main

import (
	"fmt"
	// "log"

	"github.com/rzjprogramador/base_golang/internal/entity"
	"github.com/rzjprogramador/base_golang/internal/example"
)

func main() {
	// executando funcao com erro Soma
	// res, err := entity.Soma(8, 2)

	// if err != nil {
	// 	log.Fatal(err.Error())
	// }
	// fmt.Println(res)
	// ---

	fmt.Println(example.TesterSoma())

	fmt.Println(entity.SeedEntityEmpresa())

}
