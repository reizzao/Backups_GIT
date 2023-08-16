import { ObjRegisterLogg, LoggUserRepository } from "@loggUser"

export class LoggRepositoryProductionTodo1 implements LoggUserRepository {
  public items?: ObjRegisterLogg[] = []

  constructor() {
  }

  async create(loggUserObj: ObjRegisterLogg) {
    this.items?.push(loggUserObj)
    return await loggUserObj
  }

  async list() {
    return await this.items!
  }

}

export const makerLoggRepositoryProductionTodo1 = new LoggRepositoryProductionTodo1

