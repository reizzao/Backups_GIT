package main

import "fmt"

type FormatoEntidade struct {
	nome        string
	idade       uint
	programador bool
}

var request = FormatoEntidade{"Rei", 46, true}

func createEntidade(f FormatoEntidade) FormatoEntidade {
	return f
}

func main() {
	reinaldo := createEntidade(request)
	fmt.Println(reinaldo)
}
