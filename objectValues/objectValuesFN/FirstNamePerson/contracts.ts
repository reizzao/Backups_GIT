// deno-lint-ignore-file ban-types no-explicit-any

import { ISetFirstNamePerson } from "../../global/sets/set_FirtsNamePerson/contracts.ts";

export type ArgMain = string;
export type ResponseValidator = string | void;

export type ValidatorsFN = (
  d: ArgMain,
  set?: ISetFirstNamePerson,
) => ResponseValidator;

export type ConstructValidatorFNP = Function;
export type FirstNamePersonFN = ValidatorsFN;

// classes
export class InvalidArgFirstNamePerson extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "InvalidArgFirstNamePerson";
  }
}
