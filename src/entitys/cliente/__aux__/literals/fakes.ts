import type { IClienteArgs } from "@cliente"

interface ClienteFake {
  ONE: IClienteArgs
  TWO: IClienteArgs
}

const ClienteOKFake: ClienteFake = {
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
  ClienteOKFake,
  type ClienteFake
}