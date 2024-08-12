package main

import "fmt"

// LISTA - SLICE - ARRAY SEM LIMITE

func ListaLiteral() []uint {
	listaNumeros := []uint{10, 10, 10, 10, 10}
	return listaNumeros
}

func AddElementoALista() []uint {
	lista1 := []uint{10, 20}
	lista1 = append(lista1, 2000)
	return lista1
}

func FatiaSlicePorPosicaoInicioeFim() []uint {
	listaNumeros := []uint{1, 10, 20, 30, 40, 50, 60, 70, 80}
	lista3_5 := listaNumeros[3:6]
	// obs: ele nao retorna o ultimo sempre puxe um a mais.
	return lista3_5
}

func main() {
	fmt.Println(FatiaSlicePorPosicaoInicioeFim())
}
