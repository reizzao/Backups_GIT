import { IDateFieldsStrings } from "@replicas"

export interface IClienteModel extends Partial<MembersPersonCliente> {
  ID: string
  args: IClienteArgs
  computed?: ComputedCliente
  actionsManagers?: ActionsManagersClienteFisico
}

export interface IClienteArgs {
  primeiroNome: string
  sobrenome: string
  cpf: string
  email: string
  dataNascimento: IDateFieldsStrings
  type: ClienteType
}

export type ComputedCliente = {
  idade?: number
  fullname?: string
}

export interface ActionsManagersClienteFisico {
  activation?: ActivationUser
  statusOperational?: UseStatusOperational
}

export type ClienteType = "juridico" | "fisico"
export type ActivationUser = 'off' | 'on'
export type UseStatusOperational = 'pendente' | 'habilitado' | 'congelado' | 'removido'

export type MembersPersonCliente = {
  ID?: string
  getterID?: () => string
  getFullname?: () => string

  setSetActivationUser?: () => ActivationUser
  setStatusOperational?: () => UseStatusOperational
}