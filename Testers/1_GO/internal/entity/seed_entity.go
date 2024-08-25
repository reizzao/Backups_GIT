package entity

func SeedEntityEmpresa() Empresa {
	intance := Empresa{
		Nome:   "NomeEmpresa",
		Ramo:   "A",
		Pessoa: "foo",
	}
	return intance
}
