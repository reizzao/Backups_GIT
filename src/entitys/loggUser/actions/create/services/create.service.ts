import { ICreateLoggUserServiceControll, ILoggUserSave, ISetLoggUser, makeLoggUserSave, ComputedRelationsLU } from "@loggUser";
import { msg } from "@admSystem";

export interface ObjRegisterLogg {
  ID_Relation: string
  actionName?: string
  fullname?: string
  actionFeedback?: string
  date?: string
}

class CreateLoggUserService implements ICreateLoggUserServiceControll {

  constructor(
    private readonly saveLogg: ILoggUserSave
  ) { }

  async registerLogg(actionName: string, args: ComputedRelationsLU, set: ISetLoggUser) {
    const date = new Date

    const objLoggAction: ObjRegisterLogg = {
      ID_Relation: args.ID_Relation!,
      actionName: actionName,
      fullname: await args?.fullname!,
      actionFeedback: `${actionName} ${msg.sucessCreated}`,
      date: date.toISOString()
    }
    await this.saveLogg.save(objLoggAction, set)
    return await objLoggAction
  }

}

export const makerCreateLoggUserService = new CreateLoggUserService(
  makeLoggUserSave,
)