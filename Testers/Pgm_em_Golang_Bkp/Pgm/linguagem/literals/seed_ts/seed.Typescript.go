package seed_ts

import (
	l "github.com/rzjprogramador/Pgm/Pgm/linguagem"
	"github.com/rzjprogramador/Pgm/Pgm/linguagem/literals/seed_ts/partseed_ts"
)

var TypescriptSEED = l.Linguagem{
	Linguagem: "Typescript",

	Valor: l.Valor{
		Declaracao_Completa: `const nome: string = "valor"`,
		Declaracao_Inferida: `nome = "valor"`,

		Tipos_de_Valor: partseed_ts.Tipos_Typescript_SEED,
	},

	ObterInformacao: l.ObterInformacao{
		Debugg: l.Debug{
			Printar_no_Console:                           "console.log( target)",
			Printar_no_Console_com_VariaveisInterpoladas: "console.log( variaveis, variaveis, `${variavelInterpolada dentro de crazes}`)",
		},
		ObterTipo:      "typeof operando === \"tipoEmstring\"",
		ObterInstancia: "objeto instanceof Construtor/NomeClasseOrigem",
	},
	Colecoes: l.Colecoes{
		Criar_prop_de_colecao_inicial_vazia: "const items = []",
		Add_item_na_colecao:                 "colecao.push( item )",
		Remover_item_na_colecao:             "#todo",
		Mostrar_items_da_colecao:            "return items",
		Mostrar_item_Especifico_da_colecao:  "(identificador) => { #todo }",
	},
	Libs: l.Libs{
		PacotesConfiaveis: []string{"https://www.w3schools.com/js/", "https://developer.mozilla.org/pt-BR/docs/Web/Typescript"},
	},
	MoldeDefinicaoDeNovosTipos: l.MoldeDefinicaoDeNovosTipos_Ctx{
		Conceito: `
		#TODO
		`,
	},
	Regras: l.Regras{
		Virgula_Apos_Fechamento_de_Objetos_Encadeados: "Opcional",
	},

	Recursos: l.Recursos{
		Apelido_Para_Importacoes: `
		em typescript uso a clausula < as > para apelidar ou afirmar ser de um Tipo // OU : dois pontos para apelidar um objeto,
		ex_1_apelidar_tipo : objetoFoo: TipoA  as TipoQueSera
		ex_2_apelidar_objeto : import { objetoA: objetoApelido } from "./algumaLugar/"
		`,
	},

	Codigo: partseed_ts.Algoritmo_TS,
}
