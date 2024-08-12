package main

import "fmt"

type User struct {
	ID   string
	nome string
}

var request1 = User{ID: "1", nome: "um"}
var request2 = User{ID: "2", nome: "dois"}

var arrayUser = []User{request1, request2}

func buscarPorID(id string) User {
	var procurado = User{}
	for _, item := range arrayUser {
		if item.ID == id {
			procurado = item
		}
	}
	return procurado
}

func main() {
	resultadoBuscarPorID := buscarPorID("1")
	fmt.Println(resultadoBuscarPorID)
}
