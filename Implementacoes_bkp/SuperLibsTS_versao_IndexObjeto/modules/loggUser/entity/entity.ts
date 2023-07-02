import { SuperDate } from "../../../_deps/replicas.deps.ts";
import { ILoggPersonModel } from "./types.ts";


type AddLoggUserFN = (atividadeName: string, author: string) => Promise<ILoggPersonModel>;
/**
 * @description registrar a atividade de um usuario
 */

const addLoggUser: AddLoggUserFN = async (atividadeName, author) => {
  const inputLog: ILoggPersonModel = {
    atividade: atividadeName,
    author: author,
    data: SuperDate._baseDateFields(),
  };
  return await inputLog;
};

export {
  addLoggUser,
  type AddLoggUserFN
};
