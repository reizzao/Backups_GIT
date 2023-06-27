// deno-lint-ignore-file no-explicit-any
import { IBaseDateFields } from "@externals";

type ILoggPersonModel = IArgsLoggPerson;

interface IArgsLoggPerson {
  atividade: string;
  author?: string;
  data?: IBaseDateFields;
  statusModificacoes?: IStatusModificacoes;
}

interface IStatusModificacoes {
  anterior: any;
  alteradoPara: any;
}

interface ILoggUserType {
  items?: ILoggPersonModel[];
  create: (props: ILoggPersonModel) => Promise<ILoggPersonModel | boolean>;
  list: () => Promise<ILoggPersonModel[]>;
}

export type {
  IArgsLoggPerson,
  ILoggPersonModel,
  ILoggUserType,
  IStatusModificacoes,
};

/** INPORTANTE ESTE CONTRATO TEM QUE SER EXPORTADO NO INDEX DO MODULO PARA USO DO UTILIZADOR */
