package main

import "fmt"

func main() {
	var texto string = "meu texto - aspas duplas obrigatoria" // valor_default: "" // string vazia
	var numeroInteiroPositivo uint = 100                      // valor default 0
	numeroDecimal := 100_000_000.5                            // valor_default: 0
	var boleano bool = true                                   // valor_default false
	var anyQualquerTipo any = true                            // pode ser usado o legado interface{} // interfaceVazia

	fmt.Println(texto)
	fmt.Println(numeroInteiroPositivo)
	fmt.Println(numeroDecimal)
	fmt.Println(boleano)
	fmt.Println(anyQualquerTipo)
}
