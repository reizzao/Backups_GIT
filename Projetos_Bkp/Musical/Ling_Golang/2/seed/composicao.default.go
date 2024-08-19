package seed

import (
	"github.com/reizzao/musical/api/entity"
	"github.com/reizzao/musical/api/seed/seeds_components"
)

var ComposicaoDefaultSeed = entity.Composicao{
	Tema: entity.Tema{
		Tema_Alegre:              true,
		Resumo_Objetivo_Historia: "Resumo_da_Musica_Default",
		Finais_Regentes:          seeds_components.Finais_A_I_U,
	},

	Frases: []entity.Frase{

		entity.Frase{
			Metrica: 5,
			Clima:   entity.Clima{SensacaoClima: "misterio"},
			Numero:  1,
			Pergunta_Resposta: entity.PerguntaResposta{
				Fato: entity.FatoProps{
					Palavras:      "Eu aposto um beijo",
					DoTipoPalavra: 1,
					Final:         seeds_components.Vogal_U,
				},
				Fato_ExplicaoFato_O_Que: entity.FatoProps{
					Palavras:      "Que você vai gostar",
					DoTipoPalavra: 1,
					Final:         seeds_components.Vogal_A,
				},
			},
		},//


				entity.Frase{
					Metrica: 5,
					Clima:   entity.Clima{SensacaoClima: "misterio"},
					Numero:  1,
					Pergunta_Resposta: entity.PerguntaResposta{
						Fato: entity.FatoProps{
							Palavras:      "do gosto do meu beijo",
							DoTipoPalavra: 1,
							Final:         seeds_components.Vogal_U,
						},
						Fato_ExplicaoFato_O_Que: entity.FatoProps{
							Palavras:      "Já 'to vendo eu aí na proteção de tela do seu celular",
							DoTipoPalavra: 1,
							Final:         seeds_components.Vogal_A,
						},
					},
				},//

				entity.Frase{
					Metrica: 5,
					Clima:   entity.Clima{SensacaoClima: "misterio"},
					Numero:  1,
					Pergunta_Resposta: entity.PerguntaResposta{
						Fato: entity.FatoProps{
							Palavras:      "E você usando a letra G no seu colar",
							DoTipoPalavra: 1,
							Final:         seeds_components.Vogal_U,
						},//

	},

	// PartesMomentos: entity.PartesMomentos{
	// 	Comeco: "Comecou",
	// 	Meio:   "meiou",
	// 	Fim:    "Finalizou",
	// },

}
