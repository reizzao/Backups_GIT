import { type AccountClienteRepository, } from "@accountClientes"
import {
  defsAccountClientes,
} from "@setsEntitys"

class ListClientes {
  async list(repo: AccountClienteRepository = defsAccountClientes.repositoryInProduction) {
    return await repo.list()
  }
}

const listClientesMaker = new ListClientes()

export { listClientesMaker }