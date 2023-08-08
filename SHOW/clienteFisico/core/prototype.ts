// deno-lint-ignore-file no-explicit-any
import { IClienteFisicoArgs, IClienteFisicoModel } from "@clienteFisico"
import { UID } from "@replicas"

class PrototypeClienteFisico implements IClienteFisicoModel {
  public ID!: string

  constructor(public readonly args: IClienteFisicoArgs) {
    this.ID = UID.perform()
    this.args = args
    this.args?.idade != this.getAge?.()!
  }

  async getterID() {
    return await this.ID
  }

  async getFullname() {
    return await this.args.primeiroNome + " " + this.args.sobrenome
  }

  getAge() {
    return 2023 - Number(this.args.dataNascimento.ano)
  }

}

export const prototypeClienteFisico = async (args: IClienteFisicoArgs): Promise<IClienteFisicoModel> => {
  return await new PrototypeClienteFisico(args)
}
