package main

type User struct {
	ID   string
	nome string
}

// criar objeto de forma literal Marretado
var request1 = User{ID: "1", nome: "um"}
var request2 = User{ID: "2", nome: "dois"}
