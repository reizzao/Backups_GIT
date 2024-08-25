package test

import (
	"testing"

	"github.com/reizzao/musical/api/model"
	"github.com/reizzao/musical/api/usecases/create"
	"github.com/reizzao/musical/test/protest"
)

var sut model.Composicao_Main = create.Create_Composicao(protest.Composicao_Reinventar_InputPROTEST)

func Test_Create_Composicao(t *testing.T) {
	// suts
	// var sut = sut(protest.Composicao_Reinventar_protest)

	// Suites_de_tests

	// -- Dados_Musica  --
	// test : deve retornar valor no campo silabas da Parte A
	var ok_Sut = sut
	compare_Sut_Vazio := ""

	if ok_Sut.Parte_A.Frase_Fato.Pergunta.Silabas != compare_Sut_Vazio {
		t.Error("Ops... <<Espeado_ok: >>", ok_Sut, "<<compare_Tentando: >>", compare_Sut_Vazio)
	}

} //
