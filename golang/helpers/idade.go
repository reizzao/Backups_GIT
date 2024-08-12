package helpers

type Idade struct {
	// dia int
	IdadeAtual int
}

func (i *Idade) FazerAniver() {
	i.IdadeAtual++
}
