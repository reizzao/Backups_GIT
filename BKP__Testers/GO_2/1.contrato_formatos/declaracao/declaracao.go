package main

import "fmt"

func main() {
	var explicita_mutavel string = "valor1"
	explicita_mutavel = "mudei o valor"
	implicita_inferida_imutavel := "valor da implicita inferida"

	fmt.Println("tipo T%", explicita_mutavel)
	fmt.Println(implicita_inferida_imutavel)
}
