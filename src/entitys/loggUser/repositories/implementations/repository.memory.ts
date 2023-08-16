import { ObjRegisterLogg, LoggUserRepository } from "@loggUser"

export class LoggRepositoryMemory implements LoggUserRepository {
  public items?: ObjRegisterLogg[] = []

  async create(loggUserObj: ObjRegisterLogg) {
    this.items?.push(loggUserObj)
    return await loggUserObj
  }

  async list() {
    return await this.items!
  }

}

export const makerLoggRepositoryMemory = new LoggRepositoryMemory

