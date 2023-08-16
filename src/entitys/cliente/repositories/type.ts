import { IClienteModel } from "@cliente"

export interface IClientesFisicoRepository {
  items?: IClienteModel[]

  exist: (args: IClienteModel) => Promise<boolean>
  create: (args: IClienteModel) => Promise<IClienteModel>
  list: () => Promise<IClienteModel[]>
  getbyID: (ID: string) => Promise<IClienteModel>
}