package entity

// type Funcoes_Harmonicas interface {
// 	Harmonico() Props_Funcionais
// }

type Props_Funcionais struct {
	Provoca           string
	Estavel           bool
	Normal            bool
	Precisa_Resolucao bool
	GrausFuncionais   GrausFuncionais
}

type Funcao_Tonica struct {
	Props Props_Funcionais
}

type Funcao_Dominante struct {
	Props Props_Funcionais
}

type Funcao_SubDominante struct {
	Props Props_Funcionais
}

type GrausFuncionais struct {
	Forte Grau_Props
	Medio Grau_Props
	Fraco Grau_Props
}

type Grau_Props struct {
	Grau_Escala_Natural int
	Intensidade         Intensidade
	Apelido             string
	Macete_Localizar    string
}

type Intensidade = string

const (
	Forte Intensidade = "Forte"
	Medio Intensidade = "Medio"
	Fraco Intensidade = "Fraco"
)

type EncontrarGraus = string

const (
	Dois_Graus_Para_Baixo EncontrarGraus = "Dois_Graus_Para_Baixo"
	Dois_Graus_Para_Cima  EncontrarGraus = "Dois_Graus_Para_Cima"
)
