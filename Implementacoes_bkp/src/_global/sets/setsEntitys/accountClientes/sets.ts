import {
  accountClienteRepositoryInMemory,
  type AccountClienteRepository,
} from "@accountClientes";

/*
 -- PoloUnico --
 -- edite com segurança --
 :: define o repositorio desta entidade em uso na produção --

 */

interface DefsAccountClientes {
  repositoryInProduction: AccountClienteRepository
}

const defsAccountClientes: DefsAccountClientes = {
  repositoryInProduction: accountClienteRepositoryInMemory
}

export { defsAccountClientes }