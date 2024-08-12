package entity

type Empresa struct {
	Nome   string
	Ramo   string
	Pessoa string
}

func createEmpresa(e Empresa) Empresa {
	return e
}
