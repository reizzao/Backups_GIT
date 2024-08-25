package create

import (
	"github.com/reizzao/musical/api/entitys/harmoniafuncional"
	"github.com/reizzao/musical/api/model"
)

func New_Composicao(
	request model.Composicao_Main_Request,
	tom harmoniafuncional.AcordeDefault,
	AB_Fato_Cadencia harmoniafuncional.SensacaoCadencia_PerguntaResposta_RequestOptions,
	cadenciaFecha_A harmoniafuncional.SensacaoCadenciaFecha_RequestOptions,
) model.Composicao_Main_Request {

	composicao := request

	// View : resolvendo parte a cadencia de pergunta e resposta
	composicao.Parte_A.Frases.Frase_Fato.Cadencia = harmoniafuncional.Def_Cadencia_PerguntaResposta(tom, AB_Fato_Cadencia)

	// resolve A : cadenciafecha resultado
	composicao.Parte_A.Frases.Frase_Resultado_Fecha.CadenciaFecha = harmoniafuncional.Def_NewCadencia_Fecha(AB_Fato_Cadencia)

	return composicao

}
