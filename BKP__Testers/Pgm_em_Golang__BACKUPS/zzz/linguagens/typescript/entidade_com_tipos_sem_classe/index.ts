interface IEntidade1 {
  ID: string
  args: IRequestCriaEntidade1

  computText: string
  composicaoPerfil: IComposicaoPerfil
}

interface IRequestCriaEntidade1 {
  texto: string, texto2: string, numero: number, numero2: number,

}

type ComputTextEntidade1FN = (tx: string, tx2: string) => string

interface IComposicaoPerfil { id: number, tipo: string }

function requestCriaEntidadeGeneric<T>(data: T) {
  return data
}

const implComputTextEntidade1: ComputTextEntidade1FN = (tx1, tx2) => {
  return `${tx1} ${tx2}`
}

function implComposicaoPerfil(perfil: IComposicaoPerfil): IComposicaoPerfil {
  return perfil
}

const requestCriaEntidade1: IRequestCriaEntidade1 = {
  texto: "tum", texto2: "ttum", numero: 10, numero2: 20
}
const requestCriaEntidade2: IRequestCriaEntidade1 = {
  texto: "tdois", texto2: "ttdois", numero: 10, numero2: 20
}

function factoryCriaEntidade1<T extends IRequestCriaEntidade1>(data: T): IEntidade1 {
  const perfil: IComposicaoPerfil = { id: 1, tipo: "N" }

  const result: IEntidade1 = {
    ID: "111",
    args: requestCriaEntidadeGeneric(data),
    computText: implComputTextEntidade1(data.texto, data.texto2),
    composicaoPerfil: implComposicaoPerfil(perfil)
  }

  return result
}

const i1 = factoryCriaEntidade1(requestCriaEntidade1)
const i2 = factoryCriaEntidade1(requestCriaEntidade2)

console.log("ENTIDADE1 >> ", i1)
console.log("ENTIDADE2 >> ", i2)
console.log("RESULTADO COMPUTADO ComputText 1 >> ", i1.computText)
console.log("RESULTADO COMPUTADO ComputText 2 >> ", i2.computText)