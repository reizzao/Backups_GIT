package linguagem

import (
	"github.com/emirpasic/gods/lists/arraylist"
)

// Instanciar Obj da estrutura
func LinguagemRepositoryMemory() LinguagemRepository {
	repo := LinguagemRepository{
		Items: arraylist.New(),
	}
	return repo
}

// Implementar metodos
func (r LinguagemRepository) Createlinguagem(p Linguagem) string {
	r.Items.Add(p)
	return "Criado com sucesso!"
}

func (r LinguagemRepository) GetAll() *arraylist.List {
	return r.Items
}
