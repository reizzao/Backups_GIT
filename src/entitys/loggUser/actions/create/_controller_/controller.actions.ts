import { ICreateLoggUserServiceControll, ISetLoggUser, makerCreateLoggUserService, } from "@loggUser";

class LoggUserActionsController implements ICreateLoggUserServiceControll {
  constructor(
    private readonly serviceCreate: ICreateLoggUserServiceControll,
  ) { }

  async registerLogg(actionName: string, args: any, set: ISetLoggUser) {
    const created = await this.serviceCreate.registerLogg(actionName, args, set)
    const res = await created
    return await res
  }

}

export const loggUserActionsController = new LoggUserActionsController(
  makerCreateLoggUserService,
)