import { ISetFirstNamePerson } from "../../../global/sets/set_FirtsNamePerson/contracts.ts";
import { setFirstNamePerson } from "../../../global/sets/set_FirtsNamePerson/setFirstNamePerson.ts";
import { badArguments } from "../../../global/helpers/response.ts";
import { ValidatorsFN } from "../contracts.ts";
import { InvalidArgumentsError } from "../../../global/helpers/contracts.ts";

const useSetPontual: ISetFirstNamePerson = setFirstNamePerson;

export const hasLettersMinForFirstNamePerson: ValidatorsFN = (
  d,
  set = useSetPontual,
) => {
  if (d.length < set.totalLetters.min!) {
    return badArguments(
      new InvalidArgumentsError(
        useSetPontual.totalLetters.msgErrorLettersMin(),
        useSetPontual.msgCustomArgumentsError(),
      ),
    );
  }
  return d;
};

export const hasLettersMaxForFirstNamePerson: ValidatorsFN = (
  d,
  set = useSetPontual,
) => {
  if (d.length > set.totalLetters.max!) {
    return badArguments(
      new InvalidArgumentsError(
        useSetPontual.totalLetters.msgErrorLettersMax(),
        useSetPontual.msgCustomArgumentsError(),
      ),
    );
  }
  return d;
};

/* dinamic: registrar novas FN na lista abaixo */

export type ListValidators = ValidatorsFN[];
// importante: #atencao:: O tipo ListValidators : interfere no reduce master., outrasOpcoes: = ValidatorsFN[] | any[]

export const listValidatorsFirstName: ListValidators = [
  hasLettersMinForFirstNamePerson,
  hasLettersMaxForFirstNamePerson,
];
