package campoHarmonico

type GrauMasterNaturalOptions = string

const (
	C GrauMasterNaturalOptions = "C"
	D GrauMasterNaturalOptions = "D"
	E GrauMasterNaturalOptions = "E"
	F GrauMasterNaturalOptions = "F"
	G GrauMasterNaturalOptions = "G"
	A GrauMasterNaturalOptions = "A"
	B GrauMasterNaturalOptions = "B"
)

type TipoNotaOptions = string

const (
	MAIOR           TipoNotaOptions = "MAIOR"
	MENOR           TipoNotaOptions = "MENOR"
	COMSETIMA       TipoNotaOptions = "COMSETIMA"
	MENOR_ou_MINUTA TipoNotaOptions = "MENOR_ou_MINUTA"
)

type FuncaoOptions = string

const (
	TONICA                FuncaoOptions = "TONICA"
	TONICA_FRACA          FuncaoOptions = "TONICA_FRACA"
	TONICA_FRAQUISSIMA    FuncaoOptions = "TONICA_FRAQUISSIMA"
	DOMINANTE             FuncaoOptions = "DOMINANTE"
	DOMINANTE_FRACA       FuncaoOptions = "DOMINANTE_FRACA"
	DOMINANTE_FRAQUISSIMA FuncaoOptions = "DOMINANTE_FRAQUISSIMA"
	SUBDOMINANTE          FuncaoOptions = "SUBDOMINANTE"
	SUBDOMINANTE_FRACA    FuncaoOptions = "SUBDOMINANTE_FRACA"
)

type DistanciaOptions = string

const (
	MESMA        DistanciaOptions = "MESMA"
	MAIS_DOIS    DistanciaOptions = "MAIS_DOIS"
	MAIS_TRES    DistanciaOptions = "MAIS_TRES"
	MAIS_QUATRO  DistanciaOptions = "MAIS_QUATRO"
	MENOS_DOIS   DistanciaOptions = "MENOS_DOIS"
	MENOS_TRES   DistanciaOptions = "MENOS_TRES"
	MENOS_QUATRO DistanciaOptions = "MENOS_QUATRO"
)
