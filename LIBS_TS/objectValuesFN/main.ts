import { ValidatorsFN } from "./objectValuesFN/FirstNamePerson/contracts.ts";
import { FirstNamePerson } from "./objectValuesFN/FirstNamePerson/index.ts";

/* modulo agrupador apra release */
interface ObjectValuesFN {
  FistNamePerson: ValidatorsFN;
}

export const objectValuesFN: ObjectValuesFN = {
  FistNamePerson: FirstNamePerson,
};

// console.log(objectValuesFN.FistNamePerson("foo"));
