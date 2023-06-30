package linguagem

import (
	"github.com/rzjprogramador/PgmBaseGo/utils"
)

func NewLinguagem(l Linguagem) *Linguagem{
	return &l
}

func ExecuteLinguagem(l Linguagem) {
	utils.ShowObject(l)
}

func MainLinguagem() {
	
	ExecuteLinguagem(Linguagem_Basica_Universal)
	ExecuteLinguagem(Linguagem_Golang)
	ExecuteLinguagem(LinguagemDart)
}

