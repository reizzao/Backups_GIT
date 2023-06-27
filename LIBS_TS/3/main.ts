import { superDate, type ISuperDateTS } from './src/modules/superDate/index.ts';
import { ISuperValidateTS, superValidateTS } from './src/modules/validatesTS/index.ts';

/**
 * @author @RzjProgramador  { @RzjProgramador in -> [ linkedin, twitter, facebook, instagram] }
 * @details gerar alias para estes modulos e replique no seu codigo consumidor
 */

export interface ISuperLibsTS {
  superValidateTS: ISuperValidateTS,
  superDate: ISuperDateTS
}

export const superLibsTS: ISuperLibsTS = {
  superValidateTS,
  superDate,
}