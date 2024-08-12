package partseed_ts

import (
	l "github.com/rzjprogramador/Pgm/Pgm/linguagem"
	"github.com/rzjprogramador/Pgm/Pgm/universal/literals/seed_universal/partseed_universal"
)

var Objeto_TS = l.Objeto{
	Objeto_Contexto: l.Objeto_Ctx{

		Molde_Gerador_da_Informacao: "class",

		Gerar_Instancia:               `const i1 = new NomeDoNovoTipo()`,
		Campos_Fixo_na_Instancia:      `na parte alta da classe inserir campos com valores pré-determinados`,
		Campos_Dinamicos_na_Instancia: `Receber via constructor parametros que serao so campos dinamicos da intancia ao ser gerada`,
		Dar_Intelegencia_Ha_Instancia: partseed_universal.Objeto_Universal.Dar_Intelegencia_Ha_Instancia,

		Campos_Com_Valores_Default: l.Algoritmo_Type_LING{
			Algoritmo: `no alto da classe inserir campo default: valor`,
			Exemplo:   `#todo`,
		},

		Composicao: l.Composicao_Ctx{
			Conceito: "Campo de um objeto que Delega a outro objeto fazer a acao por ele.",
			Campo_Que_Pode_Variar_Tendo_Mesmas_Acoes: l.Contexto{
				Titulo:   "Campo_Que_Pode_Variar_Tendo_Mesmas_Acoes",
				Objetivo: `ter um objPai. carro ou moto . vao_Ter_Acao_Foo()`,
				Molde:    `#todo`,

				Exemplos: []string{
					`#todo`,
					``,
				},
			},
		},

		Criar_Metodo_Para_o_Objeto: l.Objeto_Info{
			Contexto: "#todo",
			Macete:   "faz a funcao dentro do molde.",
			Ditado:   "#todo",
			Exemplos: []string{
				"Comportamento() { return `${o.C1}ez a Acao do ComportamentoGO1` } ",
				``,
			},
		},
	},
}

/*
Contexto: "",
		Macete: "",
		Ditado: "",
		Exemplos:[]string{
			``,
			``,
		},
*/
