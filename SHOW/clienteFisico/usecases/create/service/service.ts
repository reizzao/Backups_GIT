import { prototypeClienteFisico, modelPipeCFMaker } from '@clienteFisico'
import type { ICreateCFArgsFN, IClienteFisicoModel } from '@clienteFisico'
import { LoggUserObjModel, loggUserController } from '@loggUser'

const createClienteFisicoService: ICreateCFArgsFN = async (args, sets) => {

  const factory = await prototypeClienteFisico(args) as IClienteFisicoModel

  const argsPipe = await modelPipeCFMaker.perform(factory)

  // createLog this Action
  const loggCreateCF: LoggUserObjModel = {
    ID: argsPipe.ID,
    getFullname: await argsPipe.getFullname?.()!,
    actionName: 'createClienteFisico',
  }

  // #chave poloUnico - escolhe o repo do sets na #MelhorSituacao : Producao ou TDD
  await loggUserController.create(loggCreateCF, sets)

  // -- result
  const result = await argsPipe
  return await result
}

export {
  createClienteFisicoService,
}

