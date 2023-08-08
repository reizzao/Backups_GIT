import type { IClienteFisicoArgs } from "@clienteFisico"

interface ClienteFisicoFake {
  ONE: IClienteFisicoArgs
  TWO: IClienteFisicoArgs
}

const clienteFisicoOKFake: ClienteFisicoFake = {
  ONE: {
    primeiroNome: 'anyONE',
    sobrenome: 'sobrenome fisico',
    cpf: '1234567',
    email: 'any@email.com',
    dataNascimento: {
      dia: '1',
      mes: '1',
      ano: '1980'
    },
    type: "fisico",
  },
  TWO: {
    primeiroNome: 'anyTWO',
    sobrenome: 'sobrenome fisico',
    cpf: '1234567',
    email: 'any@email.com',
    dataNascimento: {
      dia: '1',
      mes: '1',
      ano: '1980'
    },
    type: "fisico",
  },
}

export {
  clienteFisicoOKFake,
  type ClienteFisicoFake
}