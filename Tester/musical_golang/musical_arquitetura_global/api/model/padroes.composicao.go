package model

type Padroes_Musica struct {
	NomeMusica                    string
	EntraNoToque                  EntraNoToque_Options
	Rima_Vogal                    Rima_Options
	Sentimento_Central_Emocao_Tom Sentimento_Central_Emocao_Tom
}

type Motivacoes struct {
	Sentimento_Central_Tonal                                Sentimento_Central_Tonal_Options
	A_FRASE_INICIAL_motivo_verbo_ele_ou_person_faz_algo     string
	REFRAO_INICIO_entao_Esse_personagem_quer                string
	REFRAO_DESENROLAR_essa_e_historia_de_algo_ou_alguem_que string
	REFRAO_ULTIMA_FRASE_resolucao                           string
}

type EntraNoToque_Options = string

const (
	Toque_1 EntraNoToque_Options = "Toque_1"
	Toque_2 EntraNoToque_Options = "Toque_2"
	Toque_3 EntraNoToque_Options = "Toque_3"
)

type Rima_Options struct {
	Rima_Vogal_Final_Mestra Rima_Vogal_Final_Mestra
}

type Rima_Vogal_Final_Mestra = string

const (
	I Rima_Vogal_Final_Mestra = "I"
)

type Sentimento_Central_Tonal_Options = string

const (
	Tonal_Alegre     Sentimento_Central_Tonal_Options = "Tonal_Alegre"
	Tonal_NAO_Alegre Sentimento_Central_Tonal_Options = "Tonal_NAO_Alegre"
)
