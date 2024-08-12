package composicao

import (
	"fmt"

	"github.com/rzj/helpers"
)

type User struct {
	ID    string
	Name  string
	Idade int
	// Idade Idade
}

// metodos prototype >> acoes com os campos da entidade
func (u *User) DigaOi() string {
	return fmt.Sprintf("O usuario %s disse Oi!", u.Name)
}

// acoes com a entidade ao todo.
func CreateUser(u User) *User {
	var validUser = User{
		ID:    u.ID,
		Name:  helpers.MinString(u.Name, 2),
		Idade: helpers.MinAge(u.Idade, 18),
		// Idade: helpers.MinAge(u.Idade.IdadeAtual, 18),
	}
	return &validUser
}
