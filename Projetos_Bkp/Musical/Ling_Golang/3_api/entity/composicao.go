package entity

type Composicao struct {
	NomeMusica        NomeMusica
	Compositor        []Compositor
	Dados_Formais     Dados_Formais
	Dados_Direcionais Dados_Direcionais
	MetricaPrincipal  Metrica
	VogaisUse         VogaisUse
	PartesFrases PartesFrases
}

type PartesFrases struct {
	ParteA      ParteA
	ParteB      ParteB
	ParteC      ParteC
	ParteRefrao ParteRefrao
}

type ParteA struct {
	Frase_Dupla [2]ParteFrase
	Frase_Extra ParteFrase
}
type ParteB struct {
	Frase_Dupla [2]ParteFrase
	Frase_Extra ParteFrase
}
type ParteC struct {
	Frase_Dupla [4]ParteFrase
	Frase_Extra ParteFrase
}

type ParteRefrao struct {
	Frase_Dupla [4]ParteFrase
	Frase_Extra [2]ParteFrase
}

type ParteFrase = Frase_Model

type NomeMusica struct {
	Titulo string
}

type Compositor struct {
	NomeArtistico string
}

type Dados_Formais struct {
	Data string // todo date
	Tom  Tom
}

type Tom struct {
	Tom_Cifra              string
	Grau_TOM_NaturalMusica int
}

type Dados_Direcionais struct {
	Alegre        bool
	Frase_Impacto NomeMusica
	Objetivo      string
	UltimaFrase   string
}

type Metrica struct {
	SilabasPoeticas int
}

type VogaisUse struct {
	Vogal_Fecha_Mestra   Vogal
	Vogal_Livre_AutoRima []Vogal
	Vogal_Curinga        Vogal
}
type Vogal = string
const(
	A Vogal = "A"
	E Vogal = "E"
	I Vogal = "I"
	O Vogal = "O"
	U Vogal = "U"
	S_Som Vogal = "S_Som"
)

type Frase_Model struct {
	ParteMusica       string
	FraseNumero       int
	FatoTipo          string
	VogalFinal        string // todo
	Fato              string
	Oque              string
	Metrica           Metrica
	HarmoniaFuncional HarmoniaFuncional
	GrausNota         GrausNota
}

type HarmoniaFuncional struct {
	Grau_Regente_da_Parte int
	SequenciaGraus        SequenciaGraus
}

type GrausNota struct {
	NotaPrincipal_ou_Domina NotaPrincipal_ou_Domina
	Grau                    int
	NotaCifra               string
}

type SequenciaGraus = string

const (
	Relaxa    SequenciaGraus = "Relaxa"
	NaoRelaxa SequenciaGraus = "NaoRelaxa"
)

type NotaPrincipal_ou_Domina = string

const (
	NotaPrincipal NotaPrincipal_ou_Domina = "NotaPrincipal"
	NotaDomina    NotaPrincipal_ou_Domina = "NotaDomina"
)
