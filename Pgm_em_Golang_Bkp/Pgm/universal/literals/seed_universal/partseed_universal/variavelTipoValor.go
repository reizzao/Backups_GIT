package partseed_universal

import u "github.com/rzjprogramador/Pgm/Pgm/universal"

var VariavelTipoValorSEED = u.Variavel{
	Conceito: `é uma CELULA unidade na memoria já preenchida com o valor zero dependendo do seu tipo de dado esperado, alias sempre será de um TIPO de dado prometido/demarcado pelo dev e sempre será REPRESENTADO por um VALOR correspondente ao tipo prometido`,

	Tipos_para_Variaveis: []string{
		"Caractere_Unico",
		"Texto_Conjunto_de_Caracteres",
		"Numero_Inteiro",
		"Numero_Real_Decimal",
		"Objeto",
		"Erro",
		"Funcao",
		"Indefinido",
		"Nulo",
		"Livre_QualquerValor_ANY",
	},

	Uso_de_variaveis: `O pc é como uma calculadora guarda 1 valor na celula/memoria, guarda a operacao pedida, guarda outros valores pedidos  , guarda o pedido de resultado ex: = igual, Manda pro processador que devolve outra celula com o resultado.`,

	Consequencia_ao_usar_Variavel: `ao guardar um valor na celula somente apos uma execucao e por padrao guarda na memoria volatil, para esse valor persistir tem que fazer funcionalidade pra guardar e gravar na memoria naoVolatil
	Obs: Cada passo estara em uma celula variavel volatil por padrao ao ser executado/chamado ou naoVolatil se for gravado os dados.
	Entao só vai ocupar a memoria se for chamado e desocupará quando for reiniciado ou fechado o local de memoria usada.`,
}

/*
# TODO VER SE NAO ESTA JA EXPLICADO :

Tipos_e_Suas_Representacoes:
Conceito: Ao anunciar que devolvera ou usara um tipo de dado , para cada tipo tem as representacoes que podemos usar para representar este tipo anunciado em questao e tambem tem o valorZeroDefault que é tambem uma representacao do tipo caso nao seja passado nada na inicializacao da variavel do tipobem questao.
Ex: string é representada por "foo" qualquer conjinto de caracteres dentro de aspas duplas, obs: seu valorZero é "" caractere vazio.

*/
