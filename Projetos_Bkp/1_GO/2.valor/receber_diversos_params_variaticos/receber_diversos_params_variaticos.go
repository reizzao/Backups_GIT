package main

import "fmt"

func Reduce_ReceberDiversosNumeros(n ...int) int {
	total := 0
	for _, item := range n {
		total += item
	}
	return total
}

func main() {
	totalReduzido := Reduce_ReceberDiversosNumeros(10, 10, 10)
	fmt.Println(totalReduzido)
}
