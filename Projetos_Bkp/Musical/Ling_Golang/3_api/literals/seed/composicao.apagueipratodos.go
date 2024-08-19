package seed

import "github.com/reizzao/musical/api/entity"

var Exemplo_ApagueipraTodos = entity.Composicao{
	NomeMusica:        entity.NomeMusica{Titulo: "APAGUEI PARA TODOS"},
	Compositor:        []entity.Compositor{{NomeArtistico: "RodrigoOliveira"}},
	Dados_Formais:     entity.Dados_Formais{Data: "FOO", Tom: entity.Tom{Tom_Cifra: "C", Grau_TOM_NaturalMusica: 1}},
	Dados_Direcionais: entity.Dados_Direcionais{Alegre: false, Frase_Impacto: entity.NomeMusica{Titulo: "APAGUEI PARA TODOS"}},
	MetricaPrincipal:  entity.Metrica{SilabasPoeticas: 5},
	VogaisUse: entity.VogaisUse{
		Vogal_Fecha_Mestra:   entity.U,
		Vogal_Livre_AutoRima: []string{entity.I, entity.S_Som},
		Vogal_Curinga:        entity.A,
	},

	// PartesFrases

}
