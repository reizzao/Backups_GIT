package conceitoBasePgm

var ConceitosBasePgm_Obj = ConceitosBasePgm{
	Inicio_PeloTipoValorPreenchido: `tudo comeca em um tipo que vou deixar preencher como valor  ::ValorDeUmTipo ... todo ValorDeUmTipo é instanciado guardado em uma variavel`,

	Declaracao: `registro que existe reserva um espaco denominado na memoria é a assinatura da Instanciacao , todas declaracoes sao semelhantes a assinatura de uma variavel o que muda é o Tipo que podera ser guardado , o delimitador/isolador e parametro/variavel de dependencia ex: funcao seus isoladores de param sao (), arrayLista tem linguagem que é [] ou {}, e algumas tem palavraChaveKeyword outras limguagens nao.`,

	Sintaxe: `so usa oque a linguagem permite::  Keyword que permite Tipo/Familia/Local/Visibilidade/PermissaoAcesso nome <param> <operacao atribuicao ou fazerAlgo>`,

	Instanciar: `é guardar algo que retorna um  valor [singular/objeto/funcao/class/strct] atribuir em uma variavel e assim clonar...assumindo dai pra frente este valor e seus membros [ caracteristicas && comportamentos ]`,

	Tipos : `alem dos Primitivos, Modeladores, ParaVariaveis, ParaAtributo, ParaFuncao`,

	ModelagemOrigemTipo: `classe ustilizamos como objeto, se struct utilizamos como metodo, se funcao utilizamos invocando.`,

	ArmazenadorValorVariavel: `variavel é uma representacao um link de onde esta o valor guardado na memória...ela clona o valor e o incorpora/sefaz por ele dai pra frente..todos componentes [ singular && compostos ] sao instanciados/armazenados em uma variavel.`,

	Valor: Valor{
		ValorSingular: `Se no componente o ValorDeUmTipo é singular representara um TipoPrimitivo.`,

		ValorComposto: `Se em um componente tiver mais que um ou seja varios ValoresDeUmTipoCada representara um objeto , que sera modelado pela forma de modelagem de tipos da linguagem class ou struct.`,
	},

	Funcao: Funcao{
		Conceito: `Manipular variaveis e criar comportamentos`,
		Possiveis: []string{"ler dados", "mostrar dados",},
		FerramentasParaFuncao: `é onde utilizamos as ferramentasLogicas em OrdemLogica`,

		OrdemLogica: `
		é o passo a passo sequencial pra chegar em um resultado.
		Exemplo: 
		Desafio: JogarPapelNoLixo
		OrdemLogica: 
		1 - PegarPapel
		2 - AmassarPapel
		3 - PrepararAbeirLixo
		4 - JogarPapelNoLixo
		obs: as tarefas estao em ordem Logica, jamais conseguiriamos AmassarPapel antes de PefarPapel.
`,

		MetodoLocal_e_MetodoEmprestadoExternoDeLibs: Uso{
			Conceito: `sao funcoes criadas em TipoModelador tanto Personalizadas Proprias ou De LibsExternas onde pegamso emprestado e por isto esta atrelado a este TipoModelador , e assim toda instancia deste TipoModelador tera acesso e podera usar seus MetodosATrelados.`,

			TipoOrigem: `Normalmente a origem sao class Static ..entao instanciamos apra uso sem o operador new.`,

			ComoUsar: `importa o donoDoModulo, instancia o objeto, usa o cloneObj.metodo()`,
		},
	},

	



}

/*

TODO USAR BASES

// Objs para PropsFixas Universal
var SignificadoVariavel = "Local de amazenamento de valor na memoria... representado por um nome unico. "

var SinonimosVariavel = []string{"recipiente", "local_na_memoria", "link_para_valor", "referencia"}

var PularLinhaModoUniversal = Modos{
	Conceito: `com clausula \n dentro da mesma string pula a linha.`,
	Exemplo: `String pularLinha = "linha1\nLinha2\nlinha3";`,
}

var Interpolar_Variavel_Em_Texto_Universal = Modos{
	Conceito: "insira a string dentro de aspas apos o fechamento insira o sinal d e+ e a variavelDesejada",
	Exemplo: `"O valor da variavel interpolada é >> " + varFoo;`,
}

var Interpolar_ObjetoFuncao_Em_Texto_Universal = Modos{
	Conceito: `insira a string dentro de aspas apos o fechamento insira o sinal d e+ e a variavelDesejada.campo`,
	Exemplo: `const textoComObjeto = "meu texto2" + obj.chave1;`,
}

var Caracteres_Especiais_Universal = []string{"#TODO"}

var EscaparCaracteresEspeciaisEDeConflito_Universal = Modos{
	Conceito: `insira 1 barra invertida antes do caractere especial, obs: mesmo se o caractere especial for uma barra`,
	Exemplo: `\caractereEspecial`,
}

*/