// deno-lint-ignore-file prefer-const

import { ClienteOKFake, IClienteModel, makerClienteActionsController } from '@cliente'
import { IClienteActionsController, IClienteArgs, IClientesFisicoRepository, SetClientes, makeClienteRepositoryMemory } from '@cliente'
import { LoggUserRepository, ObjRegisterLogg, makerLoggRepositoryMemory } from "@loggUser";

export const sutMakerClienteActionsController: IClienteActionsController = makerClienteActionsController

export const argClienteONE: IClienteArgs = ClienteOKFake.ONE

export let sutRepoClienteMemory: IClientesFisicoRepository = makeClienteRepositoryMemory

export const setMemoryMock: SetClientes = {
  repositoryProduction: makeClienteRepositoryMemory,
  relationLoggUserAction: {
    repoProduction: makerLoggRepositoryMemory,
  }
}

export let sutRepoLoggUserMemory: LoggUserRepository = setMemoryMock.relationLoggUserAction.repoProduction

export const repositoryLoggIntact: LoggUserRepository = {
  ...makerLoggRepositoryMemory, items: [],
  // deno-lint-ignore no-unused-vars
  create: function (loggUserObj: ObjRegisterLogg): Promise<ObjRegisterLogg> {
    throw new Error("Function not implemented.");
  },
  list: function (): Promise<ObjRegisterLogg[]> {
    throw new Error("Function not implemented.");
  }
}

export function cleanItemsMemoryCliente() {
  sutRepoClienteMemory.items = []
}

export function clenRepoLoggUser() {
  sutRepoLoggUserMemory.items = []
}

// -- ACOES SUT --
export const actionSutOK = await sutMakerClienteActionsController.create(argClienteONE, setMemoryMock)
export const actualDataHttpResponse: IClienteModel = actionSutOK.data

// console.log('FULL ENTIDADE COMPexport LETA >>>>>> ', await actionSutOK)