package seed_universal

import (
	u "github.com/rzjprogramador/Pgm/Pgm/universal"
	"github.com/rzjprogramador/Pgm/Pgm/universal/literals/seed_universal/partseed_universal"
)

// Unir aqui todos partSEED
var UniversalPGMSEED = u.UniversalPGM{
	Variavel_Guarda_TipoDeDado_Representado_por_um_Valor: partseed_universal.VariavelTipoValorSEED,
}

// modificaveis sempre add mais
func NomePastaGuardaOutrasPastas() u.Singular {
	return u.Singular{Singular: "#todo"}
}
func NomePastaDeArquivosSoltos() u.Singular {
	return u.Singular{Singular: "#todo"}
}
func QuebraDeLinhas() string {
	return "#todo"
}

func Implementacoes() u.Implementacoes {
	return u.Implementacoes{

		Obrigatorio_atualizar: `Faça um Wrapper em toda app para que só a possa usar ATUALIZADA - amarre o funcionamento na versao da app.`,
		Log:                   `crie logs para todas funcoes - para controlar quem esta usando-as`,
		Origem_Campo:          ` origem_campo : Se o campo ou 1 de seus campos no caso de obj  for somente um primitivo sem inteligencia nao precisa ser gerado por uma estrutura classificatoria, caso contrario se precisar de inteligencia (operacoes, crud, logicas)  faça sua geracao vir de uma estrutura ou classe.`,
		Debuggar_Console: `Sempre rode com depuracao debugg
		`,

		Gerador_De_Objeto_Via_Construtor: u.Gerador_De_Objeto_Via_Construtor{
			O_que_vai_no_construtor: `No construtor vão os campos com valor : que ganharam , ou viram com valor , ou executam algo, quando a classe é instanciada.`,
		},

		Operacoes: u.Operacoes{
			Ajuntar_Com_Valor_que_Ja_tem: `Ajuntar com o valor que ja tem : += ex: operandoValor operacao operandoDeMudanca <se for string vai concatenar se for numero vai somar.>`,
		},

		Loop_For: `No loop crio a variavel key que a cada volta do loop vai set a chave do objAlvo, com target[key] tenho o valor contido nesta chave capturada e com ele faco algo {},
		*/

		for ( const key in target ) {
			target[key]
		}

		// logica :for in modificando valor de obj

		for( const key in objAlvo) {
				objAlvo[key] += mudanca
				// aqui tenho o valor a cada loop faco alguma operacao nele
				}
			return objAlvo
			// aqui fora do for reutilizando a variavel modificada tenho o alvo modificado ou retorno ou continuo usando-o ja afetado`,

		Formulas: u.Formulas{
			Porcentagem_entre_2_valores: `https://youtu.be/Jd_wrMJKdQg?si=fg8MWYJrFOQ3koJb`,
		},
	}
}

// #TODO Formar um objeto com essas funcoes

// func ConceitosUniversalPGM_FN () u.Universal {

// 	return {
// 		NomeDePastas:         NomePastaGuardaOutrasPastas(),
// 		NomeDeArquivosSoltos: NomePastaDeArquivosSoltos(),
// 		QuebraDeLinhas:       QuebraDeLinhas(),
// 	}
// }
