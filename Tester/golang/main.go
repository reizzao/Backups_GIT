package main

import (
	"fmt"

	composicao "github.com/rzj/composicao"
)

func main() {
	var requestUser1 = composicao.User{
		ID:    "1",
		Name:  "Reinaldo",
		Idade: 46,
	}

	var requestUser2 = composicao.User{
		ID:    "2",
		Name:  "Leonardo",
		Idade: 7,
	}
	user1 := composicao.CreateUser(requestUser1)
	user2 := composicao.CreateUser(requestUser2)

	// fmt.Println(user1)
	fmt.Println(user1.DigaOi())
	fmt.Println(user2.DigaOi())
}
