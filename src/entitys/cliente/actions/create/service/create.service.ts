// deno-lint-ignore-file prefer-const
import { prototypeCliente, makerPipeHandlerCliente, makerCreateClienteSave } from '@cliente'
import type { IClienteModel, IClienteArgs, ICreateClienteSave, SetClientes } from '@cliente'
import { ICreateLoggUserServiceControll, loggUserActionsController, } from '@loggUser'

export interface ICreateClienteService {
  perform: (args: IClienteArgs, set: SetClientes) => Promise<IClienteModel>
}

class CreateClienteService implements ICreateClienteService {

  constructor(
    private registerLogg: ICreateLoggUserServiceControll,
    private saveCreate: ICreateClienteSave,
  ) { }

  async perform(args: IClienteArgs, set: SetClientes): Promise<IClienteModel> {
    const prototype = await prototypeCliente(args) as IClienteModel

    const pipeHandler = await makerPipeHandlerCliente.perform(prototype)

    await this.registerLogg.registerLogg('createCliente', pipeHandler, set.relationLoggUserAction)

    const saved = await this.saveCreate.perform(pipeHandler, set)
    return await saved
  }

}

export const makerCreateClienteService = new CreateClienteService(
  loggUserActionsController,
  makerCreateClienteSave,
)
