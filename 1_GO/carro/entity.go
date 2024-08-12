package carro

import "fmt"

type Carro struct {
	ID         string
	Fabricante string
	Modelo     string
	Ano        int
}

func (c *Carro) buzina() string {
	return fmt.Sprint("%s buzinou com o CARRO ...", c.ID)
}

func CreateCarro(c Carro) Carro {
	return c
}
