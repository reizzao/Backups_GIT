package moto

import "fmt"

type Moto struct {
	ID         string
	Fabricante string
	Modelo     string
	Ano        int
}

func (m *Moto) buzina() string {
	return fmt.Sprint("%s buzinou com a MOTO ...", m.ID)
}

func CreateMoto(m Moto) Moto {
	return m
}
