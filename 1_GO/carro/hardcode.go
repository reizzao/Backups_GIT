package carro

import "fmt"

var CarBmw1 = Carro{
	ID:         "bmw1",
	Fabricante: "Bmw",
	Modelo:     "Modelo BMW",
	Ano:        2024,
}

func HardMethodsCarro() {
	fmt.Println(CreateCarro(CarBmw1))
}
