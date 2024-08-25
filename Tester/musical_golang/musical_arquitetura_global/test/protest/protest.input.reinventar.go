package protest

import "github.com/reizzao/musical/api/model"

var Composicao_Reinventar_InputPROTEST = model.Composicao_Main{
	DadosMusica: model.Padroes_Musica{
		NomeMusica:   "Reinventar",
		EntraNoToque: model.Toque_3,
		Rima_Vogal: model.Rima_Options{
			Rima_Vogal_Final_Mestra: model.I,
		},
		Sentimento_Central_Emocao_Tom: model.Sentimento_Central_Emocao_Tom{
			Def: model.Reflexao,
			Tom: model.G_Reflexao,
		},
	},
	Motivacoes: model.Motivacoes{
		Sentimento_Central_Tonal:                                model.Tonal_NAO_Alegre,
		A_FRASE_INICIAL_motivo_verbo_ele_ou_person_faz_algo:     "(Disse) diz que já é tarde e não tem mais jeito",
		REFRAO_INICIO_entao_Esse_personagem_quer:                "recomeçar",
		REFRAO_DESENROLAR_essa_e_historia_de_algo_ou_alguem_que: "quer recomeçar, reconciliar, não aceita a separação",
		REFRAO_ULTIMA_FRASE_resolucao:                           "Eu sei que o sonho ainda pode acontecer Pode acontecer",
	},

	Parte_A: model.Estrofe_A_A2{

		Denominanda: model.Parte_A,
		Conceitos:   model.ConceitosParte_A,
		Andamento:   model.Andamento_A,

		Frase_Fato: model.PerguntaResposta{
			Pergunta: model.MusicalSilabas{
				Silabas: "",
				Grau:    []model.GrauTypeSilabas{},
			}, Resposta: model.MusicalSilabas{
				Silabas:         "",
				Grau:            []model.GrauTypeSilabas{},
				FuncaoHarmonica: model.Funcao_Tonica_Forte_1,
			},
		}, //

		Frase_Consequencia: model.PerguntaResposta{
			Pergunta: model.MusicalSilabas{
				Silabas: "",
				Grau:    []model.GrauTypeSilabas{},
			}, Resposta: model.MusicalSilabas{
				Silabas:         "",
				Grau:            []model.GrauTypeSilabas{},
				FuncaoHarmonica: model.Funcao_Tonica_Fraca_6,
			},
		}, //

		Frase_Resultado_Fecha: model.Frase_Resultado_Fecha{
			Frase:          "",
			Cadencia_Fecha: model.Fecha_31,
		}, //
	}, //

	Parte_A2: model.Estrofe_A_A2{

		Denominanda: model.Parte_A2,
		Conceitos:   model.ConceitosParte_A2,
		Andamento:   model.Andamento_A2,

		Frase_Fato: model.PerguntaResposta{
			Pergunta: model.MusicalSilabas{
				Silabas: "",
				Grau:    []model.GrauTypeSilabas{},
			}, Resposta: model.MusicalSilabas{
				Silabas: "",
				Grau:    []model.GrauTypeSilabas{},
			},
		}, //

		Frase_Consequencia: model.PerguntaResposta{
			Pergunta: model.MusicalSilabas{
				Silabas: "",
				Grau:    []model.GrauTypeSilabas{},
			}, Resposta: model.MusicalSilabas{
				Silabas: "",
				Grau:    []model.GrauTypeSilabas{},
			},
		}, //

		Frase_Resultado_Fecha: model.Frase_Resultado_Fecha{
			Frase:          "",
			Cadencia_Fecha: model.Fecha_31,
		}, //
	}, //
}
