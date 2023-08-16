import { IClienteModel, SetClientes } from "@cliente";

export interface ICreateClienteSave {
  perform(args: IClienteModel, set?: SetClientes): Promise<IClienteModel>
}

class CreateClienteSave implements ICreateClienteSave {

  async perform(args: IClienteModel, set?: SetClientes) {
    return await set?.repositoryProduction.create(args)!
  }
}

export const makerCreateClienteSave = new CreateClienteSave