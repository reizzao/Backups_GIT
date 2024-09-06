package campoHarmonico

import "github.com/reizzao/RzLibs_GO/constants"

var C_CampoHarmonicoDefault = CampoHarmonico{

	DominadoresAll: []DominadoresAllOptions{
		DominadoresC_7_B, DominadoresC_5_G, DominadoresC_4_F, DominadoresC_3_E,
	},

	Notas: []NotaProps{
		{
			Ordem:     constants.UM,
			Nota:      C,
			TipoNota:  MAIOR,
			Distancia: MESMA,
			Funcao:    TONICA,
			Acorde: AcordeProps{
				FormacaoAcordeTriade: FormacaoAcordeTriadeProps{
					Tonica: "TODO",
					Terca:  "TODO",
					Quinta: "TODO",
				},
			},
		},
		{
			Ordem:     constants.DOIS,
			Nota:      D,
			TipoNota:  MENOR,
			Distancia: MAIS_DOIS,
			Funcao:    SUBDOMINANTE_FRACA,
			Acorde: AcordeProps{
				FormacaoAcordeTriade: FormacaoAcordeTriadeProps{
					Tonica: "TODO",
					Terca:  "TODO",
					Quinta: "TODO",
				},
			},
		},
		{
			Ordem:     constants.TRES,
			Nota:      E,
			TipoNota:  MENOR,
			Distancia: MAIS_TRES,
			Funcao:    DOMINANTE_FRAQUISSIMA,
			Acorde: AcordeProps{
				FormacaoAcordeTriade: FormacaoAcordeTriadeProps{
					Tonica: "TODO",
					Terca:  "TODO",
					Quinta: "TODO",
				},
			},
		},
		{
			Ordem:     constants.QUATRO,
			Nota:      F,
			TipoNota:  MAIOR,
			Distancia: MAIS_QUATRO,
			Funcao:    SUBDOMINANTE,
			Acorde: AcordeProps{
				FormacaoAcordeTriade: FormacaoAcordeTriadeProps{
					Tonica: "TODO",
					Terca:  "TODO",
					Quinta: "TODO",
				},
			},
		},
		{
			Ordem:     constants.CINCO,
			Nota:      G,
			TipoNota:  MAIOR,
			Distancia: MENOS_QUATRO,
			Funcao:    DOMINANTE,
			Acorde: AcordeProps{
				FormacaoAcordeTriade: FormacaoAcordeTriadeProps{
					Tonica: "TODO",
					Terca:  "TODO",
					Quinta: "TODO",
				},
			},
		},
		{
			Ordem:     constants.SEIS,
			Nota:      A,
			TipoNota:  MENOR,
			Distancia: MENOS_TRES,
			Funcao:    TONICA_FRACA,
			Acorde: AcordeProps{
				FormacaoAcordeTriade: FormacaoAcordeTriadeProps{
					Tonica: "TODO",
					Terca:  "TODO",
					Quinta: "TODO",
				},
			},
		},
		{
			Ordem:     constants.SETE,
			Nota:      B,
			TipoNota:  MENOR_ou_MINUTA,
			Distancia: MENOS_DOIS,
			Funcao:    DOMINANTE_FRAQUISSIMA,
			Acorde: AcordeProps{
				FormacaoAcordeTriade: FormacaoAcordeTriadeProps{
					Tonica: "TODO",
					Terca:  "TODO",
					Quinta: "TODO",
				},
			},
		},
	},
}

var D_CampoHarmonicoDefault = CampoHarmonico{
	DominadoresAll: []DominadoresAllOptions{
		DominadoresD_7_E, DominadoresD_5_A, DominadoresD_4_G, DominadoresD_3_F,
	},

	Notas: []NotaProps{
		{
			Ordem:     constants.UM,
			Nota:      D,
			TipoNota:  MAIOR,
			Distancia: MESMA,
			Funcao:    TONICA,
		},
		{
			Ordem:     constants.DOIS,
			Nota:      E,
			TipoNota:  MENOR,
			Distancia: MAIS_DOIS,
			Funcao:    SUBDOMINANTE_FRACA,
		},
		{
			Ordem:     constants.TRES,
			Nota:      F,
			TipoNota:  MENOR,
			Distancia: MAIS_TRES,
			Funcao:    DOMINANTE_FRAQUISSIMA,
		},
		{
			Ordem:     constants.QUATRO,
			Nota:      G,
			TipoNota:  MAIOR,
			Distancia: MAIS_QUATRO,
			Funcao:    SUBDOMINANTE,
		},
		{
			Ordem:     constants.CINCO,
			Nota:      A,
			TipoNota:  MAIOR,
			Distancia: MENOS_QUATRO,
			Funcao:    DOMINANTE,
		},
		{
			Ordem:     constants.SEIS,
			Nota:      B,
			TipoNota:  MENOR,
			Distancia: MENOS_TRES,
			Funcao:    TONICA_FRACA,
		},
		{
			Ordem:     constants.SETE,
			Nota:      E,
			TipoNota:  MENOR_ou_MINUTA,
			Distancia: MENOS_DOIS,
			Funcao:    DOMINANTE_FRAQUISSIMA,
		},
	},
}

// TODO : TERMINAR COM + CAMPO HARMONICO
