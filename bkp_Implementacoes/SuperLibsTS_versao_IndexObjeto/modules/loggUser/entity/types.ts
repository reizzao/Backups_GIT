
import { XBaseDateFields } from "../../../_deps/replicas.deps.ts";

type ILoggPersonModel = IArgsLoggPerson;

interface IArgsLoggPerson {
  atividade: string;
  author?: string;
  data?: XBaseDateFields;
}

export type {
  IArgsLoggPerson,
  ILoggPersonModel,
};
