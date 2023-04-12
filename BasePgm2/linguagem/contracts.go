package linguagem

type Linguagem struct{
	Nome string
	Arquivos
	ComandosDeSaida
	EntradaSaidaDadosByLinguagem
	RegrasDaLinguagem
	TiposDeDados
	Variaveis
}

type Arquivos struct {
	RodarArquivo string
}
type ComandosDeSaida struct {
	ViaConsole string
}

type EntradaSaidaDadosByLinguagem struct{
	TemEscopoDeEntradaESaidaPrincipal bool
	LocalArquivoDeEntradaESaidaPrincipal string
	ArquivoDeEntradaESaidaPrincipal string
	QualPacoteNameSpaceDeEntradaESaidaPrincipal string
	QualEscopoDeEntradaESaidaPrincipal string
}

type TiposDeDados struct {
	OrigemTiposDaLinguagem string
	DescobrirTipo AcessoOrigemStatica
	TipoPrimitivo
	TipoParaModeladores
	TipoParaVariaveis
	TipoParaAtributo
	TipoParaEstrutura
	TiposParaValor
	NovoTipoPersonalizado
}

type AcessoOrigemStatica struct {
	AcessarMembroDeForma string
	Membro string
	ExemploUso string
}

type TipoPrimitivo struct {
	Boleano ModelTipo
	Texto ModelTipoTexto
	CaractereUnico ModelTipo
	Numeros	ModelTipoNumeros
}

type TipoParaModeladores struct {
	ModeladorNovoTipoPersonalizado ModelTipo
}

type TipoParaVariaveis struct {
	LivreParaReescrita ModelTipo
	ConstanteNaoPodeSerReescrita ModelTipo
}

type TipoParaAtributo struct {
	Atributo ModelTipo
}

type TipoParaEstrutura struct {
	Objeto ModelTipo 
	Funcao ModelTipo
	DataHora ModelTipo
}

type TiposParaValor struct {
	AceitaQualquerDadoANY ModelTipo
	Vazio_Void ModelTipo
	Indefinido ModelTipo
	Nulo ModelTipo
	Erro ModelTipo
}

type NovoTipoPersonalizado struct {
	NovoTipoPersonalizado string
}

type ModelTipo struct {
	Nome string
	Significado string
	TemNaLinguagem bool
	Conceito string
	ModeladorDeOrigem string
	Keyword string
	Representacao_PodeInstanciar []string
	ValorDefault_SeNadaForPassado string
	CriarNovo string
	EditarNovo string
	Exemplo string
}

type ModelTipoTexto struct {
	Keyword string
	Representacao_PodeInstanciar string
	ValorDefault_SeNadaForPassado string
	CriarNovo string
	EditarNovo string
	Exemplo string
	AcoesTexto
	
}

type AcoesTexto struct {
	PularLinhas string
	Interpolar_Variavel_Em_Texto string
	Interpolar_ObjetoFuncao_Em_Texto string
	Concatenar_Variaveis_Com_Texto string
	Caracteres_Especiais []string
	EscaparCaracteresEspeciaisEDeConflito string
}

type ModelTipoNumeros struct {
	QualquerNumero ModelTipo
	NumeroInteiro ModelTipo
	NumeroDecimal ModelTipo
}

type RegrasDaLinguagem struct {
	ObrigatorioPontoeVirgulaACadaSentenca bool
}

type Variaveis struct {
	PropsConceitoVariavel
	DeclaracaoVariavel string
	AspasAceitasEmString string
	AspasAceitasEmCaractereUnico string
}
type PropsConceitoVariavel struct {
	Significado string
	Sinonimos []string
}

