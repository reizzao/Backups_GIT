package harmoniafuncional

// "github.com/reizzao/musical/api/entitys/harmoniafuncional"

type CadenciaPerguntaResposta struct {
	Acordes AcordesPerguntaResposta
}
type CadenciaFecha struct {
	Acordes string
}

type AcordesPerguntaResposta struct {
	Pergunta string
	Resposta string
}

type AcordeDefault struct {
	GrauNatura     int
	Normal         string
	Relativo       string
	Subdominante   string
	Dominate       string
	DominateFraco7 string
}

type SensacaoCadencia_PerguntaResposta_RequestOptions = string

const (
	normalRelativo SensacaoCadencia_PerguntaResposta_RequestOptions = "normalRelativo"
	superFraco     SensacaoCadencia_PerguntaResposta_RequestOptions = "superFraco"
)

type SensacaoCadenciaFecha_RequestOptions = string

const (
	CadenciaFechaFraca SensacaoCadenciaFecha_RequestOptions = "CadenciaFechaFraca"
	CadenciaFechaForte SensacaoCadenciaFecha_RequestOptions = "CadenciaFechaForte"
)

type CadenciaFecha_Options = string

const (
	CadenciaFechaFraca_71 CadenciaFecha_Options = "CadenciaFechaFraca_71"
	CadenciaFechaForte_5  CadenciaFecha_Options = "CadenciaFechaForte_5"
)

func Def_NewCadencia_Fecha(
	sensacaoCadenciaFecha SensacaoCadenciaFecha_RequestOptions,
) CadenciaFecha_Options {

	if sensacaoCadenciaFecha == CadenciaFechaFraca {
		return CadenciaFechaFraca_71
	}
	if sensacaoCadenciaFecha == CadenciaFechaForte {
		return CadenciaFechaForte_5
	}

	return sensacaoCadenciaFecha
}

func Def_Cadencia_PerguntaResposta(
	tom AcordeDefault,
	sensacaoCadencia SensacaoCadencia_PerguntaResposta_RequestOptions,
) CadenciaPerguntaResposta {

	c := CadenciaPerguntaResposta{}

	// def cadencias Pergunta e Respostas
	if sensacaoCadencia == "normalRelativo" {
		c.Acordes.Pergunta = tom.Normal
		c.Acordes.Resposta = tom.Relativo

	}
	if sensacaoCadencia == "superFraco" {
		c.Acordes.Pergunta = tom.Normal
		c.Acordes.Resposta = tom.DominateFraco7
	}

	return c
}

var AcordeDefault_C = AcordeDefault{
	GrauNatura:     1,
	Normal:         "C",
	Relativo:       "Am",
	Subdominante:   "F",
	Dominate:       "G",
	DominateFraco7: "B7",
}
var AcordeDefault_D = AcordeDefault{
	GrauNatura:     2,
	Normal:         "D",
	Relativo:       "Bm",
	Subdominante:   "G",
	Dominate:       "A",
	DominateFraco7: "C7",
}

// func Tester_NewCadencia() {

// 	fmt.Println(
// 		Def_Cadencia_PerguntaResposta(
// 			AcordeDefault_C,
// 			"normalRelativo",
// 			// "CadenciaFechaFraca",
// 		))

// 	fmt.Println(
// 		Def_Cadencia_PerguntaResposta(
// 			AcordeDefault_D,
// 			"superFraco",
// 			// "CadenciaFechaFraca",
// 		))

// }
