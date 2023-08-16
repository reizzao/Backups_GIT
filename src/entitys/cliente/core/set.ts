import { IClientesFisicoRepository, makeClienteRepositoryProduction } from "@cliente"
import { ISetLoggUser, setLoggUser } from "@loggUser"

// -- SETS Cliente --
export interface SetClientes {
  repositoryProduction: IClientesFisicoRepository
  relationLoggUserAction: ISetLoggUser
}

// -- este obj setCliente só deve ser usado por quem for usar o controller de qualquer cliente --
export const setClientes: SetClientes = {
  repositoryProduction: makeClienteRepositoryProduction,
  relationLoggUserAction: { ...setLoggUser }
}