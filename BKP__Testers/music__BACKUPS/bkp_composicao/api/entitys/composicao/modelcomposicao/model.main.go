package modelcomposicao

import (
	c "github.com/reizzao/composicao/api/helpers/constants"
	mc "github.com/reizzao/musicalidade/api/entitys/campoHarmonico"
)

type ComposicaoModelMain struct {
	Request  RequestComposicao
	Computed ComputedComposicao
}

// Requests
type RequestComposicao struct {
	Emocao c.EmocaoOptions

	GrauMasterNatural mc.GrauMasterNaturalOptions
	Estrofe           c.EstrofeOptions
	Frases            []PerguntaResposta
}



