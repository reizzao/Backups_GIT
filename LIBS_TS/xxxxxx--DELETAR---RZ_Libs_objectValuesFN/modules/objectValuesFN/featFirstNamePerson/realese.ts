import {
  ConstructValidatorFNP,
  FirstNamePersonArg,
  FirstNamePersonFN,
} from "./contracts.ts";
import { listValidatorsFirstName } from "./features/validators.ts";

export const _FirstNamePerson: FirstNamePersonFN = (d, set) => {
  return listValidatorsFirstName.reduce(
    (acc: FirstNamePersonArg, validatorsFN: ConstructValidatorFNP) => {
      return validatorsFN(acc, set);
    },
    d,
  );
};
