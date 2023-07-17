
// const useSetPontual: ISetFirstNamePerson = setFirstNamePerson;

const hasLettersMinForFirstNamePerson: ValidatorsFN = (
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

const hasLettersMaxForFirstNamePerson: ValidatorsFN = (
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
