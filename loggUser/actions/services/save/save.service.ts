// import {  } from "../../core/types.ts";
import { LoggUserObjModel, LoggUserRepository } from "@loggUser";

export interface ILoggUserSave {
  create: (service: LoggUserObjModel, repo: LoggUserRepository) => Promise<LoggUserObjModel>
  // list: (saveRepo: LoggUserRepository) => Promise<LoggUserObjModel[]>
}

class LoggUserSave implements ILoggUserSave {

  async create(service: LoggUserObjModel, repo: LoggUserRepository) {
    await repo.create(service)
    return await service
  }

  // async list(saveRepo: LoggUserRepository) {
  //   return await saveRepo.items
  // }
}

export const loggUserSave = new LoggUserSave()