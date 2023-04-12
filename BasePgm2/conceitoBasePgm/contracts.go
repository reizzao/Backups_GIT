package conceitoBasePgm

type ConceitosBasePgm struct {
	Inicio_PeloTipoValorPreenchido string
	Declaracao string
	Sintaxe string
	Instanciar string
	Tipos string
	ModelagemOrigemTipo string
	ArmazenadorValorVariavel string
	Valor
	Funcao
}

type Valor struct {
	ValorSingular string
	ValorComposto string
}
type Funcao struct {
	Conceito string
	Possiveis []string
	FerramentasParaFuncao string
	OrdemLogica string
	MetodoLocal_e_MetodoEmprestadoExternoDeLibs Uso
	MetodoExterno Uso
}
type Uso struct {
	Conceito string
	TipoOrigem string
	ComoUsar string
}
