import { ActionsManagersClienteFisico, ActivationUser, ComputedCliente, IClienteArgs, IClienteModel, UseStatusOperational } from "@cliente"
// import { makeAdmCliente } from "@/entitys/admClient/manager.ts"

class PrototypeCliente implements IClienteModel {
  public ID!: string

  constructor(
    public readonly args: IClienteArgs,
    public readonly computed?: ComputedCliente,
    public readonly actionsManagers?: ActionsManagersClienteFisico,
  ) {
    this.args = args
    this.computed = {
      fullname: this.getFullname?.()!,
    }
    this.actionsManagers = {
      activation: 'off',
      // activation: makeAdmCliente.setActivation(this.ID, 'off')!,
      statusOperational: 'pendente'
    }
  }

  getterID() {
    return this.ID
  }

  getFullname() {
    return this.args.primeiroNome + " " + this.args.sobrenome
  }


}

export const prototypeCliente = async (args: IClienteArgs): Promise<IClienteModel> => {
  return await new PrototypeCliente(args)
}
