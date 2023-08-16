import { ObjRegisterLogg, ISetLoggUser } from "@loggUser";

export interface ILoggUserSave {
  save: (service: ObjRegisterLogg, set: ISetLoggUser) => Promise<ObjRegisterLogg>
  // list: (saveRepo: LoggUserRepository) => Promise<LoggUserObjModel[]>
}

class LoggUserSave implements ILoggUserSave {

  async save(service: ObjRegisterLogg, set: ISetLoggUser) {
    await set.repoProduction.create(service)
    return await service
  }

  // async list(saveRepo: LoggUserRepository) {
  //   return await saveRepo.items
  // }
}

export const makeLoggUserSave = new LoggUserSave