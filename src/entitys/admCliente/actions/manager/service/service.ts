import { ActivationUser } from "@cliente"

export interface IAdmClienteService {
  updateActivation: (ID: string, onOff: ActivationUser) => Promise<ActivationUser>
}

class AdmClienteService {

  async updateActivation(ID: string, onOff: ActivationUser) {
    // const found = await setClientes.repositoryProduction.getbyID(ID)
    // const newFound: IClienteModel = { ...found, actionsManagers?.activation?= onOff, }
    // return await found

  }

}

export const makeAdmClienteService = new AdmClienteService()