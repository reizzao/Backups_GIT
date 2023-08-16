import { LoggUserRepository, makerLoggRepositoryProductionTodo1 } from "@loggUser"

export interface ISetLoggUser {
  repoProduction: LoggUserRepository
}

export const setLoggUser: ISetLoggUser = {
  repoProduction: makerLoggRepositoryProductionTodo1,
}