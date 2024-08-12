package main

import "fmt"

func main() {
	nomes := [3]string{"Rei", "Guga", "Leo"}

	for _, valor := range nomes {
		valor += " :: concatenando em todos"
		fmt.Println(valor)
		// fmt.Println(indice, valor)
	}
	// fmt.Println("--------")
}
