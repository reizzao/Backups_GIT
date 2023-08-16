import { IClienteModel, ClienteOKFake } from "@cliente"

const eClienteFakeONE = ClienteOKFake.ONE
const eClienteFakeTWO = ClienteOKFake.TWO

const fullnameAsyncONECliente = () => `${eClienteFakeONE.primeiroNome} ${eClienteFakeONE.sobrenome}`

export const ClienteSeedsONE: IClienteModel = {
  ID: '1',
  args: {
    primeiroNome: eClienteFakeONE.primeiroNome,
    sobrenome: eClienteFakeONE.sobrenome,
    cpf: eClienteFakeONE.cpf,
    email: eClienteFakeONE.email,
    dataNascimento: eClienteFakeONE.dataNascimento,
    type: eClienteFakeONE.type,
  },
  computed: {
    fullname: fullnameAsyncONECliente?.()!
  }
}

export const ClienteSeedsTWO: IClienteModel = {
  ID: '2',
  args: {
    primeiroNome: eClienteFakeTWO.primeiroNome,
    sobrenome: eClienteFakeTWO.sobrenome,
    cpf: eClienteFakeTWO.cpf,
    email: eClienteFakeTWO.email,
    dataNascimento: eClienteFakeTWO.dataNascimento,
    type: eClienteFakeTWO.type,
  }
}
