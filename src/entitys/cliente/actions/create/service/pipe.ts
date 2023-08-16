// deno-lint-ignore-file no-explicit-any ban-types
import { IClienteModel } from "@cliente";
import { UID } from "@replicas";

class PipeHandlerCliente {
  public items = [this.assignComputedFieldsCliente,]

  async perform(args: IClienteModel) {
    return await this.items.reduce(async (acc: any, fns: Function) => await fns(acc), args)
  }

  // -- obs: add all down methods in array items

  async assignComputedFieldsCliente(args: IClienteModel) {

    args.ID = await UID?.perform?.()

    args.computed!.idade! = 2023 - Number(args.args.dataNascimento.ano)
    // TODO: está marretado o ano - usar funcao para ano

    // let dinamicStatus = await byRequestStatusOp

    // args.computedCliente!.statusOperational! = await makerStatusOperationalCliente.perform(dinamicStatus('ff'))

    return await args
  }

}

export const makerPipeHandlerCliente = new PipeHandlerCliente