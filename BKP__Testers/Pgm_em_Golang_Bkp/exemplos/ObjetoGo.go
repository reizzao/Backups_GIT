package exemplos

import "fmt"

// Tipo_Principal - AltoNivel
type ObjetoGO struct {
	C1                string
	C2                string
	ComposicaoVariada Variado
}

// SubTipos
type OpcaoVariada1 struct {
	C1 string
}
type OpcaoVariada2 struct {
	C1 string
}

// criando metodo : Reflete Somente em um Tipo de Instancia Somente
func (o ObjetoGO) ComportamentoGO1() string {
	return fmt.Sprintf("%s fez a Acao do ComportamentoGO1", o.C1)
}

// Contrato de Metodos Interface - Metodos_Polimorficos : Atinge Todos Tipos de instancias que o implementam
type Variado interface {
	ComportamentoSejaQualForOObjeto() string
}

// replicando metodo da interface - com os SubTipos de Composicao

func (o OpcaoVariada1) ComportamentoSejaQualForOObjeto() string {
	return fmt.Sprintf("Meu Jeito1:: var Interpolada >> %s ", o.C1)
}

func (o OpcaoVariada2) ComportamentoSejaQualForOObjeto() string {
	return fmt.Sprintf("Meu Jeito2:: var Interpolada >> %s", o.C1)
}

// Tester
func Tester_ObjetoGO() {
	opcaovariada1 := OpcaoVariada1{C1: "FooVariada1"}
	opcaovariada2 := OpcaoVariada2{C1: "FooVariada2"}

	instancia1 := ObjetoGO{
		C1:                "CAMPOUM",
		C2:                "CAMPODOIS",
		ComposicaoVariada: opcaovariada1,
	}

	instancia2 := ObjetoGO{
		C1:                "CAMPOUM",
		C2:                "CAMPODOIS",
		ComposicaoVariada: opcaovariada2,
	}

	// fmt.Println(instancia1)
	// fmt.Println(instancia1.ComportamentoGO1())
	fmt.Println(instancia1.ComposicaoVariada.ComportamentoSejaQualForOObjeto())
	fmt.Println(instancia2.ComposicaoVariada.ComportamentoSejaQualForOObjeto())
}
