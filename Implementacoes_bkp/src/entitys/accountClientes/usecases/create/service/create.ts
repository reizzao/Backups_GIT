import {
  Cliente,
  type AccountClienteRepository,
} from "@accountClientes"
import { defsAccountClientes } from "@setsEntitys"

class CreateAccountClientes {

  async create(cliente: Cliente, repo: AccountClienteRepository = defsAccountClientes.repositoryInProduction) {
    return await repo.create(cliente)
  }
}

export const createAccountClientesMaker = new CreateAccountClientes()