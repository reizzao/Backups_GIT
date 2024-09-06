package linguagem

import (
	"github.com/emirpasic/gods/lists/arraylist"
)

// tipagem da entidade principal
type Linguagem struct {
	Linguagem                  string
	Valor                      Valor
	ObterInformacao            ObterInformacao
	Colecoes                   Colecoes
	Libs                       Libs
	MoldeDefinicaoDeNovosTipos MoldeDefinicaoDeNovosTipos_Ctx
	Regras                     Regras
	Recursos                   Recursos
	Codigo                     Algortimo_LING
}

type Valor struct {
	Declaracao_Completa string
	Declaracao_Inferida string
	Tipos_de_Valor      Tipos
}

type Tipos struct {
	Conceito                     string
	Texto_Caractere_Unico        TiposProps
	Texto_Conjunto_de_Caracteres TiposProps
	Texto_Recursos               Texto_Recursos
	Numero_Inteiro               TiposProps
	Numero_Real_Decimal          TiposProps
	Numero_SomentePositivo       TiposProps
	Numero_Complexo              TiposProps
	Logico                       TiposProps
	Objeto                       TiposProps
	Erro                         TiposProps
	Funcao                       TiposProps
	Indefinido                   TiposProps
	Nulo                         TiposProps
	Vazio                        TiposProps
}

type TiposProps struct {
	Clausula_Contrato        Clausula_Contrato
	Representacao_ComoUsar   Clausula_Contrato
	ValorZeroDefault         string
	Interpolacao_De_Variavel string
	Doc                      string
	Metodos_Prototipos       []string

	// representacao: , tipo: , doc: , metodos: ,
}

type Clausula_Contrato struct {
	Singular string
	Plural   string
}

type Texto_Recursos struct {
	Template_String_QuebraDeLinhas string
}

type ObterInformacao struct {
	Debugg         Debug
	ObterTipo      string
	ObterInstancia string
}

type Debug struct {
	Printar_no_Console                           string
	Printar_no_Console_com_VariaveisInterpoladas string
}

type Colecoes struct {
	Criar_prop_de_colecao_inicial_vazia string
	Add_item_na_colecao                 string
	Remover_item_na_colecao             string
	Mostrar_items_da_colecao            string
	Mostrar_item_Especifico_da_colecao  string
}

type Libs struct {
	PacotesConfiaveis []string
}

// Tipagem Repositorio -- para salvar dados da entidade principal
type LinguagemRepository struct {
	Items *arraylist.List
	// Obs: Items nao tem problema ser um tipo externo de lib - porque é usado somente em memoria - na real o bd nao tem items
}

// metodos para ser um :Repositorio
type IlinguagemRepository[C ICollectionlinguagem] interface {
	Createlinguagem(p Linguagem) string
	GetAll() C
}

// opcoes dinamicas de tipos
type ICollectionlinguagem interface {
	[]Linguagem | *arraylist.List
}

type MoldeDefinicaoDeNovosTipos_Ctx struct {
	Conceito string
}

type Regras struct {
	Virgula_Apos_Fechamento_de_Objetos_Encadeados string
}

type Recursos struct {
	Apelido_Para_Importacoes string
}

type Algortimo_LING struct {
	Pensamento_Declaracoes string
}

type Objeto struct {
	Objeto_Contexto Objeto_Ctx
}

type Algoritmo_Type_LING struct {
	Algoritmo string
	Exemplo   string
}

type Composicao_Ctx struct {
	Conceito                                 string
	Campo_Que_Pode_Variar_Tendo_Mesmas_Acoes Contexto
}

type Contexto struct {
	Titulo   string
	Objetivo string
	Molde    string
	Exemplos []string
}

type Objeto_Ctx struct {
	Molde_Gerador_da_Informacao   string
	Gerar_Instancia               string
	Campos_Fixo_na_Instancia      string
	Campos_Dinamicos_na_Instancia string
	Dar_Intelegencia_Ha_Instancia string
	Campos_Com_Valores_Default    Algoritmo_Type_LING
	Composicao                    Composicao_Ctx
	Criar_Metodo_Para_o_Objeto    Objeto_Info
}

type Objeto_Info struct {
	Contexto string
	Macete   string
	Ditado   string
	Exemplos []string
}

type RecursosLinguagem struct {
	Devolver_Tipo_da_Variavel string
}

type Array struct {
	Declarar_Array     string
	Modificar_Item     string
	Remover_Item       string
	Remover_UltimoItem string
	Add_Varios_Items   string
	Add_Item_Hard      string
	Add_Item_Dinamico  string
	Pegar_Pedaco       string
	Pegar_PrimeiroItem string
	Pegar_UltimoItem   string
}
