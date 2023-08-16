import { ISetLoggUser, ObjRegisterLogg } from "@loggUser"
import { ComputedCliente } from "@cliente"

export type ComputedRelationsLU = {
  ID_Relation?: string
  fullname?: string
  computedCliente?: ComputedCliente
}

// -- Controller and Service
export interface ICreateLoggUserServiceControll {
  registerLogg: (actionName: string, args: any, set: ISetLoggUser) => Promise<ObjRegisterLogg>
}

// -- Repository
export interface LoggUserRepository {
  items?: ObjRegisterLogg[]
  create(loggUserObj: ObjRegisterLogg): Promise<ObjRegisterLogg>
  list(): Promise<ObjRegisterLogg[]>
}


