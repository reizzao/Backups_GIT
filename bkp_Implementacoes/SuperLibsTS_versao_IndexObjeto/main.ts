// deno-lint-ignore-file no-explicit-any
import { addLoggUser, type AddLoggUserFN } from './modules/loggUser/entity/mod.ts';
import { superDate, type ISuperDateTS } from './modules/superDate/index.ts';
import { ISuperValidateTS, superValidateTS } from './modules/validatesTS/index.ts';
import { log } from './modules/logConsole/feature.ts'
import { pipeFNGeneric } from './modules/pipeFNGeneric/mod.ts'

/**
 * @author @RzjProgramador  { @RzjProgramador in -> [ linkedin, twitter, facebook, instagram] }
 * @details gerar alias para estes modulos e replique no seu codigo consumidor
 */

export interface ISuperLibsTS {
  superValidateTS: ISuperValidateTS,
  superDate: ISuperDateTS,
  addLoggUser: AddLoggUserFN,
  log: any,
  pipeFNGeneric: any
}

/**
 * @description jsdoc do SuperLibsTS
 */

export const superLibsTS: ISuperLibsTS = {
  superValidateTS,
  superDate,
  addLoggUser,
  log,
  pipeFNGeneric,
}