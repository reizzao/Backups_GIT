
// -- Repositories
export interface LoggUserRepository {
  items: LoggUserObjModel[]
  create(loggUserObj: LoggUserObjModel): Promise<LoggUserObjModel>
  list(): Promise<LoggUserObjModel[]>
}

// config sets da entidade, ex: relacoes, etc...
export interface ISetsLoggUser {
  relations: {
    repoSaveLogg: LoggUserRepository
  },
}

export interface LoggUserObjModel {
  ID: string
  getFullname: string
  actionName: string
  actionFeedback?: string
  date?: string
}
