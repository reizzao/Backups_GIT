import { ISetsLoggUser, poleLoggRepositoryMemory, poleLoggRepositoryIntactTDD, poleLoggRepositoryProductionTodo1, } from "@loggUser";

// -- #poloUnico define oS SETS em producao, ex: repo da entidade --

export const setsLoggUserProduction: ISetsLoggUser = {
  relations: {
    repoSaveLogg: poleLoggRepositoryProductionTodo1
  }

}

// -- DINAMISMO NOS SETS BY TDD  --

export const setsLoggUserPivoIntactTDD: ISetsLoggUser = {
  relations: {
    repoSaveLogg: poleLoggRepositoryIntactTDD
  }

}

// -- repo para inserções em memoria das ações nos tests. --
export const setsLoggUserMemory: ISetsLoggUser = {
  relations: {
    repoSaveLogg: poleLoggRepositoryMemory
  }

}
