// deno-lint-ignore-file no-explicit-any
import { HttpResponse, badRequest, ok } from "@helpers"
import { makerCreateClienteService } from '@cliente'
import type { IClienteArgs, ICreateClienteService, SetClientes, } from '@cliente'

export interface IClienteActionsController {
  create: (args: IClienteArgs, sets: SetClientes) => Promise<HttpResponse>
}

class ClienteActionsController implements ClienteActionsController {

  constructor(
    private createService: ICreateClienteService
  ) { }

  async create(args: IClienteArgs, sets: SetClientes): Promise<HttpResponse> {

    try {
      const service = await this.createService.perform(args, sets)
      return await ok(service)
    }
    catch (err: any) {
      return badRequest(err.message)
    }
  }
}

export const makerClienteActionsController = new ClienteActionsController(makerCreateClienteService)


