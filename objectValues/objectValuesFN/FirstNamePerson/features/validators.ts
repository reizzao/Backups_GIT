import { ISetFirstNamePerson } from "../../../global/sets/set_FirtsNamePerson/contracts.ts";
import { setFirstNamePerson } from "../../../global/sets/set_FirtsNamePerson/setFirstNamePerson.ts";
import { badArguments } from "../../../global/helpers/response.ts";
import { InvalidArgFirstNamePerson, ValidatorsFN } from "../contracts.ts";

const useSetPontual: ISetFirstNamePerson = setFirstNamePerson;

export const hasLettersMinForFirstNamePerson: ValidatorsFN = (
  d,
  set = useSetPontual,
) => {
  if (d.length < set.totalLetters.min!) {
    return badArguments(
      new InvalidArgFirstNamePerson(
        useSetPontual.totalLetters.msgErrorLettersMin(),
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
      new InvalidArgFirstNamePerson(
        useSetPontual.totalLetters.msgErrorLettersMax(),
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
