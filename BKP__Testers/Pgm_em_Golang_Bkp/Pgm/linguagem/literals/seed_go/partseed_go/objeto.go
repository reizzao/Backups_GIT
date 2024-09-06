package partseed_go

import (
	l "github.com/rzjprogramador/Pgm/Pgm/linguagem"
	"github.com/rzjprogramador/Pgm/Pgm/universal/literals/seed_universal/partseed_universal"
)

var Objeto_GO = l.Objeto{
	Objeto_Contexto: l.Objeto_Ctx{

		Molde_Gerador_da_Informacao: "struct",

		Gerar_Instancia:               `func funcaoNomeDoNovoTipo(t Tipo) { return t}`,
		Campos_Fixo_na_Instancia:      `#TODO`,
		Campos_Dinamicos_na_Instancia: `#TODO`,
		Dar_Intelegencia_Ha_Instancia: partseed_universal.Objeto_Universal.Dar_Intelegencia_Ha_Instancia,

		Campos_Com_Valores_Default: l.Algoritmo_Type_LING{
			Algoritmo: `no struct inserir campo default: valor`,
			Exemplo:   `#todo`,
		},

		Composicao: l.Composicao_Ctx{
			Conceito: "Campo de um objeto que Delega a outro objeto fazer a acao por ele.",

			Campo_Que_Pode_Variar_Tendo_Mesmas_Acoes: l.Contexto{
				Titulo:   "Campo_Que_Pode_Variar_Tendo_Mesmas_Acoes",
				Objetivo: `ter objetos diferentes com campos que nao sao iguais, mas com mesmos metodosAcoes Poliformicos metodo com o memso nome que devolvem o mesmo tipo implementados diferentes - exemplo: objPai. carro ou moto . vao_Ter_Acao_Foo()`,
				Molde: `cria-se uma interface com somente metodos que vai querer que os objetos que SEJAM UM DESTA INTERFACE tenham .

				Obs: cada SubTipo tem que replicar um metodo com o mesmo nome da funcao definida na interface , vai ser polimorfico cada tipo pode implementar do seu jeito só tem que devolver o mesmo tipo prometido no contrato da interface ::
				subTipos para composicao no tipoPrincipal : o que vai unir fazer SER_UM do usado no principal sao os metodos de interface implementados com o This .

				Quem replicar o comportamento da interface inserindo o seu This SERA_UM desta interface ex: os 2 Tipos replicaram o metodo da interface - quer dizer que eles SAO UM AGORA .. assim cada instancia podera fazer composicao do objeto instanciado que desejar basta ele ser do tipo prometido.

				diferencas: metodo x interface
				metodo = reflete somente em 1 tipo de instancia/objeto.
				metodoDeInterface = reflete em varios tipos de objetos que seu tipo repĺica o metodo polimorfico igual da interface.
				`,

				Exemplos: []string{
					`Esta AcaoFoo() foi definida na interface que esses objetos SÃO UM - ex: Veiculo e implementada por estes subobjetos vinculando assim como metodo deles.`,
					`
					package exemplos

import "fmt"

// Tipo_Principal - AltoNivel
type ObjetoGO struct {
	C1                string
	C2                string
	ComposicaoVariada Variado
}

// SubTipos
type OpcaoVariada1 struct {
	C1 string
}
type OpcaoVariada2 struct {
	C1 string
}

// criando metodo : Reflete Somente em um Tipo de Instancia Somente
func (o ObjetoGO) ComportamentoGO1() string {
	return fmt.Sprintf("%s fez a Acao do ComportamentoGO1", o.C1)
}

// Contrato de Metodos Interface - Metodos_Polimorficos : Atinge Todos Tipos de instancias que o implementam
type Variado interface {
	ComportamentoSejaQualForOObjeto() string
}

// replicando metodo da interface - com os SubTipos de Composicao

func (o OpcaoVariada1) ComportamentoSejaQualForOObjeto() string {
	return fmt.Sprintf("Meu Jeito1:: var Interpolada >> %s ", o.C1)
}

func (o OpcaoVariada2) ComportamentoSejaQualForOObjeto() string {
	return fmt.Sprintf("Meu Jeito2:: var Interpolada >> %s", o.C1)
}

// Tester
func Tester_ObjetoGO() {
	opcaovariada1 := OpcaoVariada1{C1: "FooVariada1"}
	opcaovariada2 := OpcaoVariada2{C1: "FooVariada2"}

	instancia1 := ObjetoGO{
		C1:                "CAMPOUM",
		C2:                "CAMPODOIS",
		ComposicaoVariada: opcaovariada1,
	}

	instancia2 := ObjetoGO{
		C1:                "CAMPOUM",
		C2:                "CAMPODOIS",
		ComposicaoVariada: opcaovariada2,
	}

	// fmt.Println(instancia1)
	// fmt.Println(instancia1.ComportamentoGO1())
	fmt.Println(instancia1.ComposicaoVariada.ComportamentoSejaQualForOObjeto())
	fmt.Println(instancia2.ComposicaoVariada.ComportamentoSejaQualForOObjeto())
}

					`,
				},
			},
		},

		Criar_Metodo_Para_o_Objeto: l.Objeto_Info{
			Contexto: "#todo",
			Macete:   "faz a funcao normal dps da clausula func entre parenteses -( defina a variavel que sera o this para acessar os campos do Objeto e qual é o tipo deste objeto a sera acessado)",
			Ditado:   "só de usar a var this entre parenteses referenciando o Tipo ja define como um metodo deste tipo para todas suas intancias usarem.",
			Exemplos: []string{
				`func (o ObjetoGO) ComportamentoGO1() string {
				return fmt.Sprintf("%s fez a Acao do ComportamentoGO1", o.C1)
			}`,
				``,
			},
		},
	},
}
