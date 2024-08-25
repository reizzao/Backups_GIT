package model

type Defaults struct {
	All_Estrofes            []string
	Evitar                  []string
	Def_Tempo_Verbal_Master Def_Tempo_Verbal_Options
	Estrofe_A               Default_Estrofes_Props
	Estrofe_B               Default_Estrofes_Props
	Estrofe_C               Default_Estrofes_Props
	Estrofe_Refrao          Default_Estrofes_Props
	Estrofe_RefraoExtra     Default_Estrofes_Props
}

type Default_Estrofes_Props struct {
	Conceito string
	Gatilhos []string
	Opcoes   OpcoesEstrofes
}

type OpcoesEstrofes struct {
	Reinicio     []string
	Fechar_Bloco []string
}

type Def_Tempo_Verbal_Options = string

const (
	Presente Def_Tempo_Verbal_Options = "Presente"
	Passado  Def_Tempo_Verbal_Options = "Passado"
	Futuro   Def_Tempo_Verbal_Options = "Futuro"
)

// type Opcoes_Reinicio_Options = string
// const()
