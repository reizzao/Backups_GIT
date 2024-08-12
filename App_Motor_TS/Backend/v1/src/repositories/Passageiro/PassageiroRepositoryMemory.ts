import { IModelPassageiro } from "@model";
import { IPassageiroRepository } from "@repositories";

export class PassageiroRepositoryMemory implements IPassageiroRepository {
  public _items: IModelPassageiro[] = []

  async create(model: IModelPassageiro) {
    await this._items.push(model)
    return await model
  }

}