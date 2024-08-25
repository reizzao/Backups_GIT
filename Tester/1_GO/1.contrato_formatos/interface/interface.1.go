package main

import "fmt"

type User struct {
	ID   string
	nome string
}

var request1 = User{ID: "1", nome: "um"}
var request2 = User{ID: "2", nome: "dois"}

var arrayUser = []User{request1, request2}

type UserAcoes interface {
	BuscarPorID(id string)
	InsertUser(nome string)
}

func (u *User) BuscarPorID(id string) User {
	var procurado = User{}
	for _, item := range arrayUser {
		if item.ID == id {
			procurado = item
		}
	}
	return procurado
}

func main() {
	u := User{}
	resultadoBuscarPorID := u.BuscarPorID("2")
	fmt.Println(resultadoBuscarPorID)
}

/*
interface: é um contrato um formato assinatura de tipos de COMO VAI SER FEITO TAL ACAO.
implementar_interface: em outras linguagem dizemos que classe <VAI> implements ela, em kotin dizemos que classe : 2 pontos interfaceAlvo, em golang:

usar_interface_em_go : para usar a interfaceALVO crio uma funcao com o mesmo nome de alguma da interfaceALVO e antes do identificador isolo entreParenteses ( param TIPO ) que vai ligar este tipo há interface dando acesso a estrutura do tipo e o que tem na interfaceALVO


*/
