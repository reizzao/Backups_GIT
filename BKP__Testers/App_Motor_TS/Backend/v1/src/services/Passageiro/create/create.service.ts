import { IPassageiroData } from "@data";
import { IModelPassageiro, ModelPassageiro } from "@model";

export class CreatePassageiroService {

  static async execute(data: IPassageiroData) {
    const model = new ModelPassageiro(data)

    // TODO USAR O REPOSITORIO EM USO

    // const repo = new PassageiroRepositoryMemory
    // return await repo.create(model)

    const exports = await model
    return await exports
  }

}

