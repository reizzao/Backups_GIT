// deno-lint-ignore-file no-explicit-any
import { ICreateLoggUserService, ISetsLoggUser, LoggUserObjModel, poleCreateLoggUserService, } from "@loggUser";

// -- Actions : controller --
export interface ILoggUserActionsController {
  items?: LoggUserObjModel[]
  create(args: LoggUserObjModel, sets: ISetsLoggUser): Promise<LoggUserObjModel>
  // list(saveRepo: ILoggUserSave): Promise<LoggUserObjModel[]>
}

class LoggUserActionsController implements ILoggUserActionsController {
  constructor(
    private readonly serviceCreate: ICreateLoggUserService,
  ) { }

  async create(args: LoggUserObjModel, sets: ISetsLoggUser) {
    const created = await this.serviceCreate.create(args, sets)
    const res = await created
    return await res
  }

}

// pontoDeEntrada para quem precisa criar um loggUser
export const loggUserController = new LoggUserActionsController(
  poleCreateLoggUserService,
)