// // deno-lint-ignore-file no-inferrable-types
import { UseStatusOperational } from "@cliente";

class ManagerClientes {

  constructor(
  ) { }

  async handle(ID: string, status: UseStatusOperational) {
    // let item = await setClientes.repositoryProduction.getbyID(ID)
    // const newItem: IClienteModel = { ...item }
    // newItem!.computedCliente!.statusOperational! = status!

    // item = newItem
    // const saveNewItem = item

    // return await makerCreateClienteSave.perform(saveNewItem)
  }

}

export const makerManagerClientes = new ManagerClientes
