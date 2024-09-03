package campoHarmonico

import (
	"github.com/reizzao/RzLibs_GO/constants"
)

type CampoHarmonico struct {
	DominadoresAll []DominadoresAllOptions
	Notas          []NotaProps
}

type NotaProps struct {
	Ordem constants.NumbersOptions
	Nota      GrauMasterNaturalOptions
	TipoNota  TipoNotaOptions
	Distancia DistanciaOptions
	Funcao    FuncaoOptions
	Acorde    AcordeProps
}

type AcordeProps struct {
	FormacaoAcordeTriade FormacaoAcordeTriadeProps
}
type FormacaoAcordeTriadeProps struct {
	Tonica GrauMasterNaturalOptions
	Terca  GrauMasterNaturalOptions
	Quinta GrauMasterNaturalOptions
}
