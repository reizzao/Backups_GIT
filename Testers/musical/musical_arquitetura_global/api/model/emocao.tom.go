package model

type Sentimento_Central_Emocao_Tom struct {
	Def Emocoes_Def_Options
	Tom Tons_Options
}

type Emocoes_Def_Options = string

const (
	Alegria  Emocoes_Def_Options = "Alegria"
	Animacao Emocoes_Def_Options = "Animacao"
	Poder    Emocoes_Def_Options = "Poder"
	Vitoria  Emocoes_Def_Options = "Vitoria"
	Medo     Emocoes_Def_Options = "Alegria"
	Tristeza Emocoes_Def_Options = "Tristeza"
	Reflexao Emocoes_Def_Options = "Reflexao"
)

type Tons_Options = string

const (
	// Alegria
	C_Alegria Tons_Options = "C_Alegria"
	F_Alegria Tons_Options = "F_Alegria"
	G_Alegria Tons_Options = "G_Alegria"

	C_Vitoria  Tons_Options = "C_Vitoria"
	F_Vitoria  Tons_Options = "F_Vitoria"
	G_Vitoria  Tons_Options = "G_Vitoria"
	Am_Vitoria Tons_Options = "Am_Vitoria"

	F_Animacao  Tons_Options = "F_Animacao"
	Am_Animacao Tons_Options = "Am_Animacao"
	G_Animacao  Tons_Options = "G_Animacao"
	C_Animacao  Tons_Options = "C_Animacao"

	F_Poder  Tons_Options = "F_Poder"
	G_Poder  Tons_Options = "G_Poder"
	Am_Poder Tons_Options = "Am_Poder"

	// Nao_Alegria
	G_Reflexao  Tons_Options = "G_Reflexao"
	C_Reflexao  Tons_Options = "C_Reflexao"
	Am_Reflexao Tons_Options = "Am_Reflexao"

	Dm_Tristeza Tons_Options = "Dm_Tristeza"
	Am_Tristeza Tons_Options = "Am_Tristeza"
	F_Tristeza  Tons_Options = "F_Tristeza"
	G_Tristeza  Tons_Options = "Tristeza_Emocao_G"

	Am_Medo Tons_Options = "Am_Medo"
	Em_Medo Tons_Options = "Em_Medo"
	C_Medo  Tons_Options = "C_Medo"
	F_Medo  Tons_Options = "F_Medo"
)
