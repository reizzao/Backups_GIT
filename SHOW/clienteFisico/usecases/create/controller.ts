// deno-lint-ignore-file no-explicit-any
import { HttpResponse, badRequest, ok } from "@helpers"
import { createClienteFisicoService } from '@clienteFisico'
import type { IClienteFisicoArgs, SetsEntityClienteFisico } from '@clienteFisico'

type FNCreateClienteFisicoControllerArgs = (args: IClienteFisicoArgs, sets: SetsEntityClienteFisico) => Promise<HttpResponse>

const createClienteFisicoController: FNCreateClienteFisicoControllerArgs = async (args, sets) => {

  try {
    const service = await createClienteFisicoService(args, sets)
    return await ok(service)
  }
  catch (err: any) {
    return badRequest(err.message)
  }
}

export {
  createClienteFisicoController,
  type FNCreateClienteFisicoControllerArgs
}

