// Contratos : [ EntAltoNivel, EntAltoNivelFNReturn]
interface EntAltoNivel {
  c1: number
  c2: number
}

type EntAction1Return = number
type EntAltoNivelInput = EntAltoNivel
type Test_EntAltoNivelType = Error | void

// Contrato_Estruturador :

// entidade delegadaServical
class EntAction1Type {
  public readonly c1: number = 0
  public readonly c2: number = 0

  private constructor(private x: EntAltoNivel) {
    this.c1 = x.c1
    this.c2 = x.c2
  }

  static New(x: EntAltoNivelInput) {
    return new EntAction1Type(x)
  }
}

// entidade altoNivel usa as outras
class EntAltoNivelType {
  static readonly EntAction1Type = EntAction1Type

  // acao: das instancias : somar
  static EntAction1(x: EntAltoNivelInput): EntAction1Return {
    const input = EntAltoNivelType.EntAction1Type.New(x)
    const formula = input.c1 + input.c2
    return formula
  }
}


// input: de dados sejam eles externos, hardcorde, doCodigo
const EntAltoNivelInput_OK = EntAltoNivelType.EntAction1({ c1: 10, c2: 10 })
const EntAltoNivelInput_FAIL = EntAltoNivelType.EntAction1({ c1: 20, c2: 20 })
const EntAltoNivelInput_HARD = { c1: 10, c2: 10 }

// test :
function Test_EntAltoNivelFN(op: EntAction1Return): Test_EntAltoNivelType {
  if (op != 20) {
    throw new Error(`OPS..O TEST_FALHOU : O resultado = ${op}`)
  }
  console.log(`Ok..O TEST_PASSOU : O resultado = ${op}`)
}

// testerResult : para gerar resultados para serem usados no test
const EntAltoNivel_TesterResult_OK = () => Test_EntAltoNivelFN(EntAltoNivelInput_OK)
const EntAltoNivel_TesterResult_FAIL = () => Test_EntAltoNivelFN(EntAltoNivelInput_FAIL)

// runAllTests : rodar todos tests existentes
function RunAllTests() {
  EntAltoNivel_TesterResult_OK()
  // resultTest_EntAltoNivel_FAIL()
}

RunAllTests()

/*

ALGORITMOS PARA ENTIDADE OU FUNCIONALIDADES

conceito a entidade seja ela: [ pessoa, funcionalidade, produto], sera no final a representacao de um objeto.
- uma entidade usara a outra : exemplo entidade pessoa vai usar a entidade numeros para acao soma

*/