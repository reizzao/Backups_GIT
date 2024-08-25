package partseed_universal

import u "github.com/rzjprogramador/Pgm/Pgm/universal"

var O_Computador_entende = u.Significados{
	Contexto: u.NovoConceito{
		Titulo:    "O_Computador_entende",
		Conceito:  []string{"somente binarios 0 e 1 onde 0 é falso", "circuito apagado e 1 é verdadeiro circuito acesso."},
		Exemplos:  []string{""},
		Tutoriais: []u.Tutoriais{{By: "#naoTem", Link: "#naoTem"}},
	},
}

var Linguagem_De_Programacao = u.Significados{
	Contexto: u.NovoConceito{
		Titulo:    "Linguagem_De_Programacao",
		Conceito:  []string{"Linguagem é o idioma onde criaremos o codigo fonte das nossas insyrucoes, e para o pc entender precisara de um interpretador ou um compilador para entregar ao pc em binario."},
		Exemplos:  []string{""},
		Tutoriais: []u.Tutoriais{{By: "#naoTem", Link: "#naoTem"}},
	},
}

var Linguagem_Compilada = u.Significados{
	Contexto: u.NovoConceito{
		Titulo:    "Linguagem_Compilada",
		Conceito:  []string{"Sao todas que cokpilamos o codigo fonte para binario, obs: as compiladas sao mais rapidas por ja entregarem em binario e o pc processa naturalmentevmais rapido.", "Ex: [ C, Golang, python, java,]"},
		Exemplos:  []string{""},
		Tutoriais: []u.Tutoriais{{By: "#naoTem", Link: "#naoTem"}},
	},
}

var Linguagem_Interpretada = u.Significados{
	Contexto: u.NovoConceito{
		Titulo:    "Linguagem_Interpretada",
		Conceito:  []string{"Sao todas que nao compilam para binario, para serem entendidas pelo pc precisa de um interpretador", "Ex: [ Javascript, typescript,  ]"},
		Exemplos:  []string{""},
		Tutoriais: []u.Tutoriais{{By: "#naoTem", Link: "#naoTem"}},
	},
}

var Lib = u.Significados{
	Contexto: u.NovoConceito{
		Titulo:    "lib",
		Conceito:  []string{"funcoes/modulos externas importaveis", "pacote", "Voce tem a liberdade de configurar do seu modo essa funcionalidade"},
		Exemplos:  []string{""},
		Tutoriais: []u.Tutoriais{{By: "#naoTem", Link: "#naoTem"}},
	},
}

var Framework = u.Significados{
	Contexto: u.NovoConceito{
		Titulo:    "Framework",
		Conceito:  []string{"Parece uma lib a diferenca que voce tem que usar esta lib/framework do jeito que ela foi programada para ser usada.", "voce tem que seguir suas regras de uso"},
		Exemplos:  []string{""},
		Tutoriais: []u.Tutoriais{{By: "#naoTem", Link: "#naoTem"}},
	},
}

var Caracteristicas = u.Significados{
	Contexto: u.NovoConceito{
		Titulo:    "Caracteristicas",
		Conceito:  []string{"Atributos", "Campos", "Propriedades Props", "key chave com valor", "Coisas que tenho?", "Posso ter?", "obs: os campos de estado serão: do tipo LOGICO boleano", ""},
		Exemplos:  []string{""},
		Tutoriais: []u.Tutoriais{{By: "#naoTem", Link: "#naoTem"}},
	},
}

var Comportamento = u.Significados{
	Contexto: u.NovoConceito{
		Titulo:    "Comportamento",
		Conceito:  []string{"Metodos", "Coisas que posso fazer?", "Funcao", "Metodo : funcao ligada a um objeto"},
		Exemplos:  []string{""},
		Tutoriais: []u.Tutoriais{{By: "#naoTem", Link: "#naoTem"}},
	},
}

var Estado = u.Significados{
	Contexto: u.NovoConceito{
		Titulo:    "Estado",
		Conceito:  []string{"Como estou agora?", "Estado_Atual"},
		Exemplos:  []string{""},
		Tutoriais: []u.Tutoriais{{By: "#naoTem", Link: "#naoTem"}},
	},
}

var Objeto = u.Significados{
	Contexto: u.NovoConceito{
		Titulo:    "Objeto",
		Conceito:  []string{"Tudo que tem : [ Caracteristicas, Comportamento, Estado]", "Instancia filho(s) instanciados apartir de uma estrutura", "Pode ser material (posso tocar) ou abstrato (nao posso tocar mas existe)", "Para criar um obj pergunte-se: [Coisas que tenho: Props, Coisas que faço: metodos, Como estou agora: Estado <sera uma caracterista do tipo LOGICO boleano]", "Todo objeto vem a apartir de um molde/classe/estrutura", "Um valor é uma variavel - mais que 1 valor agrupamos variaveis dentro de um objeto - entao no fundo objeto é mais que um valor dentro de uma referencia.", "Sua origem vem de um molde que estrutura objetos ex: class, struct, etc conforme a linguagem, e depois deste molde ser instanciado da origem a um ou mais objetos."},
		Exemplos:  []string{""},
		Tutoriais: []u.Tutoriais{{By: "CursoEmVideo", Link: "https://www.youtube.com/watch?v=aR7CKNFECx0&t=939s"}},
	},
}

var Molde = u.Significados{
	Contexto: u.NovoConceito{
		Titulo:    "Molde",
		Conceito:  []string{"O que Modela um Objeto", "Contrato", "Formato - Formatador", "Classe", "Struct", "Modelador de NovoTipo Personalizado", "fabrica de instancias de um modelo objeto."},
		Exemplos:  []string{"Interface em Typescript"},
		Tutoriais: []u.Tutoriais{{By: "", Link: ""}},
	},
}

var This_ProprioEscopo = u.Significados{
	Contexto: u.NovoConceito{
		Titulo:    "This_Este",
		Conceito:  []string{"è o ProprioEscopo o nivel mais superior do escopo da entidade que esta", "variavel que acessa aos campos do molde | do escopo maior que cerca todo o objeto onde esta.", "è o proprio objeto e acessa com variavel ex: c.campo ou this.campo"},
		Exemplos:  []string{""},
		Tutoriais: []u.Tutoriais{{By: "", Link: ""}},
	},
}

/*
ALGORITMOS

package partseed_universal

import "github.com/rzjprogramador/Pgm/Pgm/universal"

var PartSeed_Algoritmos = universal.Algoritmos{

	Pensamento_Declaracoes: `Escopo TalNome : É UMA estrutura { E VAI TER ... }`,

	Metodos_Computaveis: `São metodos/funcoes ligadas a estrutura que criou o tipo - para ser usado basta desencadear com . ponto a instancia que estará cjhamando o metodo/funcao disponivel, obs: toda instancia herda metodos da sua estrutura.`,

	Valor: []string{"representacao de um tipo", "variavel", "objeto", "funcao que retorna algo"},

	Valor_e_seus_Tipos: universal.Tipos_Valor{
		Conceito: `o valor singular da origem a inferencia de tipo ( ao preencher uma variavel ela ja se torna o tipo do valor inserido)
		e na maioria das linguagens a variavel a ser preenchida com valor vira um objeto e seus metodos_herdados prototipos vem da estrutura/classe que criou este tipo e quando esta variavel/objeto é preenchida pode-se desencadear com .ponto para acessar os metodos prototipos deste tipo que tem o poder fazer algo com este tipo de dado/valor.`,
		QualquerValor:                  `na maioria das linguagens tipadas é do tipo any (aceita qualquer tipo de valor) ou interface{} vazia.`,
		TextoSingular:                  `è um conjunto de char caracteres, é iteravel por ser um array de caracteres char/unidade de strings.`,
		TextoColecao:                   `#TODO`,
		TextoEmGeral:                   `#TODO`,
		NumeroInteiroSingular:          `#TODO`,
		NumeroInteiroColecao:           `#TODO`,
		NumeroDecimalSingular:          `#TODO`,
		NumerodecimalColecao:           `#TODO`,
		Numero_Inteiro_SomentePositivo: `#TODO`,
		Numero_Complexo:                `#TODO`,
		Logico:                         `#TODO`,
	},

	Campos_Com_Valores_Default_UNIV: universal.Algoritmo_Type_UNIV{
		Algoritmo: `Fazer uma funcao que avalia no caso de texto : se o tamanho do texto recebido for menor ou igual a 0 da um valor fixo ao campo - caso contrario vai deixar o valor recebido.`,

		Exemplo: `// Exemplo:

		const objRequest = {
		 C1: "a",
		 C2: "",
	 }

	 function configurando_Obj(o) {

		 if (o.C1.length <= 0) {
			 o.C1 = "valorFIXO_1"
		 }
		 if (o.C2.length <= 0) {
			 o.C2 = "valorFIXO_2"
		 }

		 const res = {
			 C1: o.C1,
			 C2: o.C2,
		 }
		 return res
	 }

	 console.log( configurando_Obj(objRequest) )
 `,
	},
}


*/
