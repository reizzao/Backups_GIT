import { IPassageiroData } from "../data/_index.ts";

export type IModelPassageiro = IPassageiroData

export class ModelPassageiro {

  constructor(
    private readonly data: IPassageiroData,
  ) { }

}