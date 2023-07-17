import type { Cliente, AccountClienteRepository } from "@accountClientes"

class AccountClienteRepositoryMemory implements AccountClienteRepository {
  public items: Cliente[] = []

  async create(cliente: Cliente) {
    await this.items.push(cliente)
    return await cliente
  }

  async list() {
    return await this.items
  }

}

const accountClienteRepositoryInMemory = new AccountClienteRepositoryMemory()

export { accountClienteRepositoryInMemory }