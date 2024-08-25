package main

import "fmt"

// Decisao_Interruptor_Switch

func melhorSwitch_LogicaNoCaso(numero int) string {
	switch {
	case numero == 1:
		return "Domingo"
	case numero == 2:
		return "Segunda"
	default:
		return "nenhum destes vou devolver esta string"
	}
}

// func switch_Legado(numero int) string {
// 	switch numero {
// 	case 1:
// 		return "Domingo"
// 	case 2:
// 		return "Segunda"

// 	default:
// 		return "nenhum destes este pe o default caso nao caia em nenhum caso."
// 	}

// }

func main() {
	// fmt.Println(switch_Legado(1))
	fmt.Println(melhorSwitch_LogicaNoCaso(2))
}

/*
Decisao_Interruptor_Switch
conceito: ao inves de fazer mais que 1 : if , if else - fazer então um switch quando tenho opções limitadas para tomar uma decisao.

passes_logicos: avalie o parametro e caso for o que passei, retorne isto. ..obs: naMelhorForma: posso analizar o parametro direto no caso.

default: tem que estar no mesmo escopo dos casos, e o tipo do default tem que ser o mesmo prometido na decalracao do metodo.

*/
