package entity

import "github.com/reizzao/musical/api/seed/seeds_components"

type Composicao struct {
	Tema   Tema
	Frases []Frase
	// PartesMomentos PartesMomentos
}

type Tema struct {
	Tema_Alegre              bool
	Resumo_Objetivo_Historia string
	Finais_Regentes          seeds_components.Final_Regente
}
type Frase struct {
	Metrica           int
	Clima             Clima
	Numero            int
	Pergunta_Resposta PerguntaResposta
}

type Clima struct {
	SensacaoClima string
}
type PerguntaResposta struct {
	Fato                    FatoProps
	Fato_ExplicaoFato_O_Que FatoProps
}

type Bloco_A struct {
	Titulo string
	Frases []Frase
}

type FatoProps struct {
	Palavras      string
	DoTipoPalavra DoTipoPalavra_Props
	Final         seeds_components.Vogal
	NotaGrau      SensacaoGrau
}
type DoTipoPalavra_Props = int

const (
	verbo DoTipoPalavra_Props = iota
	substantivo
)

/*


*/

type SensacaoGrau struct {
	Grau     int
	Sensacao SensacaoOptions
}

type SensacaoOptions = int

const (
	repouso SensacaoOptions = iota
	dominate
)

/*
bloco : A, clima: misterio

frase: numero: 1, fato+resolve, verbo+verbo, final : meio: U, fim:A,  grau: 1

frase: numero: 2, fato_Sacada, verbo+substantivo, final : meio:U, fim: A,  grau: 6 /mod.Maior

frase: numero: 3, fato_Sacada_FechaBloco, verbo+substantivo, final meio:U, fim: A,  grau: 1

*/

// type PartesMomentos struct {
// 	Comeco string
// 	Meio   string
// 	Fim    string
// }
