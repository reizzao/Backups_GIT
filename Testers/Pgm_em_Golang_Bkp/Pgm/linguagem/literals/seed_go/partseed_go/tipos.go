package partseed_go

import l "github.com/rzjprogramador/Pgm/Pgm/linguagem"

var Tipos_Golang_SEED = l.Tipos{
	Conceito: `em golang por default a variavel com valor nNÃO vira um objeto desencadeavel para acessar seus metodos herdados
	os metodos de cada tipo vem do objeto importavel correspondente ao tipo do valor ex: para usar
	metodos para importamos o objeto para numero number, para matematica math, ] e usamos o objeto e deste objeto desencadeamos seus metodos : obj.METODO_HERDADO()`,

	Texto_Caractere_Unico: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "naoTem char",
			Plural:   "naoTem char",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "naoTem char",
			Plural:   "naoTem char",
		},
		ValorZeroDefault:         `todo`,
		Interpolacao_De_Variavel: `todo`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Texto_Conjunto_de_Caracteres: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "string",
			Plural:   "[]string",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "texto somente dentro de aspas duplas",
			Plural:   `[]string{"foo", "bar", }`,
		},
		ValorZeroDefault:         `string vazia - sem espaço`,
		Interpolacao_De_Variavel: `%s`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Texto_Recursos: l.Texto_Recursos{
		Template_String_QuebraDeLinhas: "Dentro de Aspas/crazes ex: `texto em cada linha aqui sem precisar usar \n a cada fim de linha desejada`.",
	},

	Numero_Inteiro: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "int",
			Plural:   "[]int",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "10",
			Plural:   "[]int{ 10, 20, 30}",
		},
		ValorZeroDefault:         `0`,
		Interpolacao_De_Variavel: `%d`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"https://pkg.go.dev/golang.org/x/text/number", "matematica https://pkg.go.dev/math"},
	},

	Numero_Real_Decimal: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "float",
			Plural:   "[]float",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "10.11",
			Plural:   "[]float{ 10.11, 20.22, }",
		},
		ValorZeroDefault:         `0`,
		Interpolacao_De_Variavel: `%.2f - explicacao: por padrao o %f exibe 6 casas decimais - vc pode definir quantas casas quer mostrar após o % com ponto numeroDecasas e o f - exemplo: %2.f vai mostrar 2 numeros depois do ponto.`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Numero_SomentePositivo: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "uint64",
			Plural:   "[]uint64",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "10",
			Plural:   "[]uint64{ 10, 20, 30 }",
		},
		ValorZeroDefault:         `0`,
		Interpolacao_De_Variavel: `todo`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Numero_Complexo: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "todo",
			Plural:   "todo",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "todo",
			Plural:   "todo",
		},
		ValorZeroDefault:         `todo`,
		Interpolacao_De_Variavel: `todo`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Logico: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "bool",
			Plural:   "[]bool",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "true para verdadeiro - false para falso",
			Plural:   "[]bool{ true, false, false, true, }",
		},
		ValorZeroDefault:         `todo`,
		Interpolacao_De_Variavel: `todo`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Objeto: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "Tem que criar uma struct ex: type NomeDoNovoObjeto { campos tipo }",
			Plural:   "naoTem",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: `criar uma funcao que recebe o obj e o devolve.
			ex:
			func NewObject(o StructDoObjeto) StructDoObjeto {
				return o
			}`,
			Plural: "naoTem",
		},
		ValorZeroDefault:         `todo`,
		Interpolacao_De_Variavel: `todo`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Erro: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "error",
			Plural:   "[]error",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: `errors.New("msg_de_erro") - Importar a lib "errors"`,
			Plural:   `[]error{errors.New("msg_de_erro"), errors.New("msg_de_erro")`,
		},
		ValorZeroDefault:         `todo`,
		Interpolacao_De_Variavel: `todo`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Funcao: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "todo",
			Plural:   "todo",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "todo",
			Plural:   "todo",
		},
		ValorZeroDefault:         `todos são automaticamente VAZIO, nao executar nada e usar a clausula return`,
		Interpolacao_De_Variavel: `todo`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Indefinido: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "todo",
			Plural:   "todo",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "todo",
			Plural:   "todo",
		},
		ValorZeroDefault:         `todo`,
		Interpolacao_De_Variavel: `todo`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Nulo: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "nil",
			Plural:   "[]nil",
		},
		Representacao_ComoUsar: l.Clausula_Contrato{
			Singular: "todo",
			Plural:   "todo",
		},
		ValorZeroDefault:         `todo`,
		Interpolacao_De_Variavel: `todo`,
		Doc:                      `todo`,
		Metodos_Prototipos:       []string{"todo"},
	},

	Vazio: l.TiposProps{
		Clausula_Contrato: l.Clausula_Contrato{
			Singular: "NaoPrecisa_Demarcar",
			Plural:   "naoTem",
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
