import { ISetsLoggUser, LoggUserObjModel, loggUserSave, } from "@loggUser";
import { msg } from "@admSystem";

type LoggUserObjArgs = {
  ID: string,
  actionName: string,
  getFullname: string
}

export interface ICreateLoggUserService {
  create: (args: LoggUserObjArgs, sets: ISetsLoggUser) => Promise<LoggUserObjModel>
}

class CreateLoggUserService implements ICreateLoggUserService {

  async create(args: LoggUserObjArgs, sets: ISetsLoggUser) {
    const date = new Date

    const objLoggAction: LoggUserObjModel = await {
      ID: args.ID!,
      actionName: args.actionName,
      getFullname: args.getFullname!,

      actionFeedback: `${args.actionName} ${msg.sucessCreated}`,
      date: date.toISOString()
    }

    return await loggUserSave.create(objLoggAction, sets.relations.repoSaveLogg)
    // #obs: no service posso abrir e decidir o que usar do sets.
  }

}

export const poleCreateLoggUserService = new CreateLoggUserService()