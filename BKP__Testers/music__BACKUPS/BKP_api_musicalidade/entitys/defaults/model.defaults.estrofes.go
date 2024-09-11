package defaults

type Estrofes_ConceitosDefaults struct {
	All_Estrofes            []string
	Evitar                  []string
	Def_Tempo_Verbal_Master Def_Tempo_Verbal_Options
	Estrofe_A               Estrofes_Default_Props
	Estrofe_A2            Estrofes_Default_Props
	Estrofe_B               Estrofes_Default_Props
	Estrofe_Ponte           Estrofes_Default_Props
	Estrofe_Refrao          Estrofes_Default_Props
	Estrofe_Coro            Estrofes_Default_Props
}
type Estrofes_Default_Props struct {
	Conceito string
	Gatilhos []string
	Opcoes   OpcoesEstrofes
}

type OpcoesEstrofes struct {
	Reinicio     []string
	Fechar_Bloco []string
}
