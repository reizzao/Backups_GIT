package tester

import (
	"fmt"

	l "github.com/rzjprogramador/Pgm/Pgm/linguagem"
	"github.com/rzjprogramador/Pgm/Pgm/linguagem/literals/seed_ts"
)

func AllLinguagemRepositoryMemory_Tester() {
	// usar : instanciar o obj estrutura
	repo := l.LinguagemRepositoryMemory()

	// usar : seus metodos

	fmt.Println(repo.Createlinguagem(seed_ts.TypescriptSEED))

	fmt.Println(repo.GetAll())
	// fmt.Println(reflect.TypeOf(repo.GetAll()))
	fmt.Printf("Tipo: %T", repo.GetAll())

}
