import { IPassageiroData } from "@data";
import { CreatePassageiroService } from "@services";

export class CreatePassageiro {

  static async execute(data: IPassageiroData) {
    return await CreatePassageiroService.execute(data)
  }

}

