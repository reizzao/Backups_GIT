package seed

import "github.com/reizzao/musical/api/entity"

var Funcao_Tonica_Seed = entity.Funcao_Tonica{
	Props: entity.Props_Funcionais{
		Provoca:           "Emocao Tranquilidade Estabilidade Resolvida",
		Estavel:           true,
		Normal:            true,
		Precisa_Resolucao: false,
		GrausFuncionais: entity.GrausFuncionais{
			Forte: entity.Grau_Props{
				Grau_Escala_Natural: 1,
				Intensidade:         "Forte",
				Apelido:             "Principal",
				Macete_Localizar:    "",
			},
			Medio: entity.Grau_Props{
				Grau_Escala_Natural: 6,
				Intensidade:         "Medio",
				Apelido:             "Relativo",
				Macete_Localizar:    entity.Dois_Graus_Para_Cima,
			},
			Fraco: entity.Grau_Props{
				Grau_Escala_Natural: 3,
				Intensidade:         "Fraco",
				Apelido:             "",
				Macete_Localizar:    entity.Dois_Graus_Para_Baixo,
			},
		},
	},
}

var Funcao_Dominante_Seed = entity.Funcao_Tonica{
	Props: entity.Props_Funcionais{
		Provoca:           "Emocao Tensa Fora do Normal",
		Estavel:           true,
		Normal:            false,
		Precisa_Resolucao: false,
		GrausFuncionais: entity.GrausFuncionais{
			Forte: entity.Grau_Props{
				Grau_Escala_Natural: 5,
				Intensidade:         "Forte",
				Apelido:             "Preparacao",
				Macete_Localizar:    "",
			},
			Medio: entity.Grau_Props{
				Grau_Escala_Natural: 7,
				Intensidade:         "Medio",
				Apelido:             "Diminuto",
				Macete_Localizar:    "",
			},
			Fraco: entity.Grau_Props{
				Grau_Escala_Natural: 3,
				Intensidade:         "Fraco",
				Apelido:             "",
				Macete_Localizar:    entity.Dois_Graus_Para_Cima,
			},
		},
	},
}

var Funcao_SubDominante_Seed = entity.Funcao_Tonica{
	Props: entity.Props_Funcionais{
		Provoca:           "nem Tonica Nem Dominate - Apenas Distancia - Precisa Resolucao",
		Estavel:           true,
		Normal:            false,
		Precisa_Resolucao: false,
		GrausFuncionais: entity.GrausFuncionais{
			Forte: entity.Grau_Props{
				Grau_Escala_Natural: 4,
				Intensidade:         "Forte",
				Apelido:             "",
				Macete_Localizar:    "",
			},
			Medio: entity.Grau_Props{
				Grau_Escala_Natural: 2,
				Intensidade:         "Medio",
				Apelido:             "",
				Macete_Localizar:    "",
			},
			Fraco: entity.Grau_Props{
				Grau_Escala_Natural: 3,
				Intensidade:         "Fraco",
				Apelido:             "",
				Macete_Localizar:    "",
			},
		},
	},
}
