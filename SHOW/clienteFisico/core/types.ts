import { ClienteType } from "@clientes"
import { IDateFieldsStrings } from "@replicas"
import { LoggUserRepository } from "@loggUser"

export interface IClienteFisicoModel extends Partial<MembersCF> {
  ID: string
  args: IClienteFisicoArgs
}

export interface IClienteFisicoArgs extends Partial<IComputedCF>, Partial<IComputedCF> {
  primeiroNome: string
  sobrenome: string
  cpf: string
  email: string
  dataNascimento: IDateFieldsStrings
  type: ClienteType
}

interface MembersCF {
  getterID: () => Promise<string>
  getFullname: () => Promise<string>
  getAge: () => number
}

interface IComputedCF {
  idade: number
}

export type ICreateCFArgsFN = (args: IClienteFisicoArgs, sets: SetsEntityClienteFisico) => Promise<IClienteFisicoModel>

// config sets da entidade, ex: relacoes, etc...
export interface SetsEntityClienteFisico {
  relations: {
    repoSaveLogg: LoggUserRepository
  }

}


