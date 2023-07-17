import type { ClienteFisico, ClienteJuridico } from "@accountClientes"

const fakeAccountClienteFisicoOK: ClienteFisico = {
  primeiroNome: 'any',
  sobrenome: 'sobrenome fisico',
  cpf: '1234567',
  email: 'any@email.com',
  type: "fisico"
}

const fakeAccountClienteJuridicoOK: ClienteJuridico = {
  nomeFantasia: 'any juridico',
  cnpj: '123456789 0001/10',
  email: 'any@email.com',
  type: "juridico",
}

export {
  fakeAccountClienteFisicoOK,
  fakeAccountClienteJuridicoOK,
}