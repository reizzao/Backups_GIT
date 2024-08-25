interface ObjByFormula {
  c1: number
  c2: number
}

type ObjByFormulaParamRequest = ObjByFormula | ObjByFormulaRequest

class ObjByFormulaRequest {
  public c1: number = 0
  public c2: number = 0
  private constructor(private x: ObjByFormula) {
    this.c1 = x.c1
    this.c2 = x.c2
  }

  static Instance(x: ObjByFormula) {
    return new ObjByFormulaRequest(x)
  }
}

const objByFormulaRequest1 = ObjByFormulaRequest.Instance({ c1: 10, c2: 10 })
const objByFormulaRequest2 = ObjByFormulaRequest.Instance({ c1: 20, c2: 20 })
const objByFormulaHard = { c1: 10, c2: 10 }

function FuncionalidadeSoma(x: ObjByFormulaParamRequest): number {
  const formula = x.c1 + x.c2
  return formula
}

function testFuncionalidadeSoma(op: number) {
  if (op != 20) {
    return `OPS FALHOU.. O RESULTADO FOI = ${op}`
  }
  return `Ok o resultado esta certo = ${op}`
}

console.log(testFuncionalidadeSoma(FuncionalidadeSoma( objByFormulaRequest1 )))
