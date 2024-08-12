package exemplos

import "fmt"

type Foo struct {
	Nome      string
	Sobrenome string
}

var instanceFoo1 = Foo{
	Nome:      "Original_Nome",
	Sobrenome: "Original_Sobrenome",
}

func (f *Foo) Andou() string {
	f.Nome = "Campo Modificado na origem e ficara como default"
	return fmt.Sprintf("%s ---> Andou", f.Nome)
}

/*

*/

func TesterGerenciamentoDeDado() {
	fmt.Println(instanceFoo1.Andou())
	// fmt.Println(instanceFoo1)
}
