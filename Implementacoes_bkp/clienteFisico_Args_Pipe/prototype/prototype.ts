
// -- Factory baseada na Base_Abstrata --

import { BaseEntityPerson } from "@globalEntitys";
import { ClienteFisicoModel, ClienteFisicoRequest } from "@clienteFisico";

class ClienteFisicoPrototype extends BaseEntityPerson<ClienteFisicoModel> {

  private constructor(args: ClienteFisicoModel, ID: string) {
    super(args, ID)
    this.args.idade = this?.getIdade?.()
    this.args.nomeCompleto = this?.nomeCompleto?.()
  }

  static async create(args: ClienteFisicoModel, ID?: string) {
    return await new ClienteFisicoPrototype(args, ID!)
  }

  // members
  nomeCompleto() {
    return `${this.args.primeiroNome} ${this.args.sobrenome}`;
  }

  getIdade() {
    return 2023 - this.args.anoNascimento
  }
}

// maker
const createClienteFisicoPrototypeMaker = async (args: ClienteFisicoRequest, ID?: string) => {
  return await ClienteFisicoPrototype.create(args, ID)
}

export { createClienteFisicoPrototypeMaker, ClienteFisicoPrototype }