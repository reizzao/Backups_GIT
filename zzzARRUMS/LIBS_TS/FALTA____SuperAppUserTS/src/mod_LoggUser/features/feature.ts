import { superDate } from "@externals";
import { IArgsLoggPerson, ILoggPersonModel } from "@loggUser";

// #TODO: imports do PC -> substituir por linkReal assim que prontos.

type ICreateLoggUserFN = (a: IArgsLoggPerson) => Promise<ILoggPersonModel>;

/**
 * @description missão desta feature é criar o LoggUser(atividade) que registrar a atividade de um usuario :: a  escolha da baseDeDados que gravará este registro >> será configurada pelo Client_LiB
 * @param param0  input  será um objeto com as informações da atividade realizada 1º { atividade, author?,data?  statusModificações? }
 * @returns objeto com dados que registram a realização
 * @exemple createLoggUser ('nomeDaAtividade')
 */

const createLoggUser: ICreateLoggUserFN = async (a) => {
  const inputLog: ILoggPersonModel = {
    atividade: a.atividade,
    author: a.author,
    data: superDate._baseDateFields(),
    statusModificacoes: {
      anterior: a.statusModificacoes?.anterior,
      alteradoPara: a.statusModificacoes?.alteradoPara,
    },
  };
  return await inputLog;
};

export { createLoggUser };
