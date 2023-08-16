import { ActivationUser } from "@cliente";
import { IAdmClienteService, makeAdmClienteService } from "@admCliente";

class AdmCliente {
  constructor(
    // private readonly service: IAdmClienteService
  ) { }

  async setActivation(ID: string, onOff: ActivationUser) {
    // return await this.service.updateActivation(ID, onOff)
  }
}

export const makeAdmCliente = new AdmCliente
// (
//   // makeAdmClienteService,
// )
