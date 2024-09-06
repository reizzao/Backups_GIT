import { IModelPassageiro } from "@model";

export interface IPassageiroRepository {
  // _items: IModelPassageiro[]
  create: (model: IModelPassageiro) => Promise<IModelPassageiro>
}