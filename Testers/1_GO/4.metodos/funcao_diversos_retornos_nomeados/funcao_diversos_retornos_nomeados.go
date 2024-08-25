package main

import "fmt"

func calculos(
	n1, n2 int) (soma int, subtracao int, ehMenor bool) {
	soma = n1 + n2
	subtracao = n1 - n2
	ehMenor = n1 <= n2
	return
}

func validartexto(t string) (menorTexto bool, maiorTexto bool) {
	menorTexto = len(t) < 2
	maiorTexto = len(t) > 2
	return
}

func main() {
	menorTexto, maiorTexto := validartexto("m")

	soma, subtracao, ehMenor := calculos(100, 20)

	fmt.Println(soma)
	fmt.Println(subtracao)
	fmt.Println(ehMenor)

	fmt.Println(menorTexto)
	fmt.Println(maiorTexto)
}

/*
Funcao com diversos retornos nomeados
aplicabilidade: submeter a mesma entrada por diversas operacoes.

configuracao: após os params isoladamente prometer as variaveisOperacionais que vai retornar, na consequencia para cada variavel retornavel definir sua operacao atribuindo com o sinal de igual normal,
obs: essas variaveis com operacoes sera seu retorno e cada operacao desta sera submetida aos seus params de entrada.
importante: por ultimo de um return semNada.

uso: extrair as variaveisOperacionais atribuir a sua funcaoDeOrigem e passar os argumentos se tiver params, por fim usar essas variaveisOperacionais extraidas.

*/
