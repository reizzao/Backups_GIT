import { ClienteFisicoModel, createClienteFisicoPrototypeMaker } from "@clienteFisico";
import { CreateClienteFisicoCasePipeArgs } from "@clienteFisico";
import { ok, badRequest } from "@responses";


class CreateClienteFisicoController {
  private pipeArgs = CreateClienteFisicoCasePipeArgs
  private createFactory = createClienteFisicoPrototypeMaker

  async execute(args: ClienteFisicoModel) {
    const argsHandlers = await this.pipeArgs(args)
    const createdPrototype = await this.createFactory(argsHandlers)

    const modelHandlers = { ...createdPrototype }

    try {
      return ok(modelHandlers)
    }
    catch (err: any) {
      return badRequest(new Error(err.message))
    }
  }

}

const createClienteFisicoControllerMaker = new CreateClienteFisicoController()

export { createClienteFisicoControllerMaker }