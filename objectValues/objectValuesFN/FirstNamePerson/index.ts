import {
  ArgMain,
  ConstructValidatorFNP,
  FirstNamePersonFN,
} from "./contracts.ts";
import { listValidatorsFirstName } from "./features/validators.ts";

export const FirstNamePerson: FirstNamePersonFN = (d, set) => {
  return listValidatorsFirstName.reduce(
    (acc: ArgMain, validatorsFN: ConstructValidatorFNP) => {
      return validatorsFN(acc, set);
    },
    d,
  );
};
