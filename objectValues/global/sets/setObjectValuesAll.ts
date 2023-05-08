import { ISetFirstNamePerson } from "./set_FirtsNamePerson/contracts.ts";
import { setFirstNamePerson } from "./set_FirtsNamePerson/setFirstNamePerson.ts";

export type SetObjectValues = { firstNamePerson: ISetFirstNamePerson };

// AllObjectValues
export const setObjectValues: SetObjectValues = {
  firstNamePerson: setFirstNamePerson,
};
