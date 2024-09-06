import { IDataADM } from "@data";
import { ModelAdm } from "@model";

export class CreateAdm {

  static async execute(data: IDataADM) {
    return await new ModelAdm(data)
  }

}

