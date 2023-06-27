import { superDate } from "@externals";
import { IArgsLoggPerson } from "@loggUser";

const fakerLoggUserOK: IArgsLoggPerson = {
  atividade: "atividade1",
  author: "1",
  data: superDate._baseDateFields(),
  statusModificacoes: { anterior: "todo foo", alteradoPara: "todo bar" },
};

export { fakerLoggUserOK };
