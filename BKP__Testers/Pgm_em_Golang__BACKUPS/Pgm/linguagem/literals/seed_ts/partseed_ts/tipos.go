package partseed_ts

import l "github.com/rzjprogramador/Pgm/Pgm/linguagem"

var Tipos_Typescript_SEED = l.Tipos{
	Conceito: `em typescript por default a variavel ao ser preenchida ou tipada se transformará em um objeto desencadeavel para acessar seus metodos prototipos herdados. ex: variavel.METODO_HERDADO()`,

	Texto_Caractere_Unico: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "é o tipo char - naotem clausula",
			Plural:   "naotem todo",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "unico caractere dentro de aspas simples",
			Plural:   "naotem todo",
		},
		ValorZeroDefault:         `todos são undefined/indefinido se nao tipado./ string vazia obs: sem espaço - somente uma string vazia dentro de aspas simples`,
		Interpolacao_De_Variavel: `${ variavelDoTipo}riavel}`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Texto_Conjunto_de_Caracteres: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "string",
			Plural:   "string[]",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "texto dentro de aspas simples ou duplas",
			Plural:   "textos singular , separados por virgula",
		},
		ValorZeroDefault:         `todos são undefined/indefinido se nao tipado./ string vazia obs: sem espaço - somente uma string vazia`,
		Interpolacao_De_Variavel: `${ variavelDoTipo}ariavel }`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Texto_Recursos: l.Texto_Recursos{
		Template_String_QuebraDeLinhas: "Dentro de Aspas/crazes ex: `texto em cada linha aqui sem precisar usar \n a cada fim de linha desejada`.",
	},

	Numero_Inteiro: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "number",
			Plural:   "number[]",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "10",
			Plural:   "[10, 20, 30 ]",
		},
		ValorZeroDefault:         `todos são undefined/indefinido se nao tipado.s são undefined/indefinido se nao tipado`,
		Interpolacao_De_Variavel: `${ variavelDoTipo}`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Numero_Real_Decimal: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "number",
			Plural:   "number[]",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "10.99",
			Plural:   "[10.99, 20.22, 30.33 ]",
		},
		ValorZeroDefault:         `todos são undefined/indefinido se nao tipado.s são undefined/indefinido se nao tipado`,
		Interpolacao_De_Variavel: `${ variavelDoTipo}`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Numero_SomentePositivo: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "number",
			Plural:   "number[]",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "10",
			Plural:   "[10, 20, 30 ]",
		},
		ValorZeroDefault:         `todos são undefined/indefinido se nao tipado.s são undefined/indefinido se nao tipado`,
		Interpolacao_De_Variavel: `${ variavelDoTipo}`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Numero_Complexo: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "naoTem",
			Plural:   "naoTem",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "naoTem",
			Plural:   "naoTem",
		},
		ValorZeroDefault:         `todos são undefined/indefinido se nao tipado.`,
		Interpolacao_De_Variavel: `${ variavelDoTipo}`,
		Doc:                      `todo NaoTem`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Logico: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "boolean",
			Plural:   "boolean[]",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "true para verdadeiro e false para falso",
			Plural:   "let logico: boolean[] = [ true, false, false, true ]",
		},
		ValorZeroDefault:         `todos são undefined/indefinido se nao tipado.`,
		Interpolacao_De_Variavel: `${ variavelDoTipo}`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Objeto: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "Object",
			Plural:   "Object[]",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "{ campo1: valor, campo2: valor }",
			Plural:   "[ { campo1: valor, campo2: valor }, { campo1: valor, campo2: valor } ]",
		},
		ValorZeroDefault:         `todos são undefined/indefinido se nao tipado.`,
		Interpolacao_De_Variavel: `${ variavelDoTipo}`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Erro: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "Error",
			Plural:   "Error[]",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "new Error('Msg_Foo')",
			Plural:   "const foo: Error[] = [ new Error('Msg_Foo'),  new Error('Msg_Foo_2'),]",
		},
		ValorZeroDefault:         `todos são undefined/indefinido se nao tipado.`,
		Interpolacao_De_Variavel: `${ variavelDoTipo}`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Funcao: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "Function",
			Plural:   "Function[]",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "const foo: Function = (): string => `text`",
			Plural:   "const foo: Function = (): Function[] => [() => 'foo1', () => 'foo_2']",
		},
		ValorZeroDefault:         `todos são undefined/indefinido se nao demarcar que será vazio, nao executar nada e usar a clausula return.`,
		Interpolacao_De_Variavel: `${ variavelDoTipo}`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Indefinido: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "undefined",
			Plural:   "undefined[]",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "undefined",
			Plural:   "[ undefined, undefined ]",
		},
		ValorZeroDefault:         `todos são undefined/indefinido se nao tipado.`,
		Interpolacao_De_Variavel: `${ variavelDoTipo}`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Nulo: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "null",
			Plural:   "null[]",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "null",
			Plural:   "const foo: null[] = [null, null]",
		},
		ValorZeroDefault:         `todos são undefined/indefinido se nao tipado.`,
		Interpolacao_De_Variavel: `${ variavelDoTipo}`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Vazio: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "void",
			Plural:   "void[]",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "em funcao é só nao usar a clausula return.",
			Plural:   "naoTem",
		},
		ValorZeroDefault:         `naoTem`,
		Interpolacao_De_Variavel: `naoTem`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},
}
