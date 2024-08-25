package model

import "github.com/reizzao/musical/api/entitys/harmoniafuncional"

type Estrofe_A_A2 struct {
	Denominanda Denominanda_Estrofe_Options
	Conceitos   Conceitos_Estrofe_Options
	Andamento   Andamento_Melodico_Options
	Frases      Frases_3F
}

type Frases_3F struct {
	Frase_Fato            PerguntaResposta
	Frase_Consequencia    PerguntaResposta
	Frase_Resultado_Fecha Frase_Resultado_Fecha
}

type PerguntaResposta struct {
	Pergunta string
	Resposta string
	Cadencia harmoniafuncional.CadenciaPerguntaResposta
}

type Frase_Resultado_Fecha struct {
	Frase         string
	CadenciaFecha harmoniafuncional.SensacaoCadenciaFecha_RequestOptions
}

// type MusicalSilabas struct {
// 	Silabas string
// }

type Denominanda_Estrofe_Options = string

const (
	Parte_A           Denominanda_Estrofe_Options = "Parte_A"
	Parte_A2          Denominanda_Estrofe_Options = "Parte_A2"
	Parte_B           Denominanda_Estrofe_Options = "Parte_B"
	Parte_PonteRefrao Denominanda_Estrofe_Options = "Parte_PonteRefrao"
	Parte_Refrao      Denominanda_Estrofe_Options = "Parte_Refrao"
	Parte_Coro        Denominanda_Estrofe_Options = "Parte_Coro"
)

type Conceitos_Estrofe_Options = string

const (
	ConceitosParte_A           Conceitos_Estrofe_Options = "TODO"
	ConceitosParte_A2          Conceitos_Estrofe_Options = "TODO"
	ConceitosParte_B           Conceitos_Estrofe_Options = "TODO"
	ConceitosParte_PonteRefrao Conceitos_Estrofe_Options = "TODO"
	ConceitosParte_Refrao      Conceitos_Estrofe_Options = "TODO"
	ConceitosParte_Coro        Conceitos_Estrofe_Options = "TODO"
)

// todo : usar esses
type Andamento_Melodico_Options = string

const (
	Andamento_A           Andamento_Melodico_Options = "Lento_Pausado"
	Andamento_A2          Andamento_Melodico_Options = "MedioLento_Pausado"
	Andamento_B           Andamento_Melodico_Options = "Baladinha_Crescente"
	Andamento_PonteRefrao Andamento_Melodico_Options = "Forte"
	Andamento_Refrao      Andamento_Melodico_Options = "SuperForte && Baladinha Lenta"
	Andamento_Coro        Andamento_Melodico_Options = "Medio"
)
