// deno-lint-ignore-file ban-types no-explicit-any

import { ResponseBadArguments } from "../../global/helpers/response.ts";
import { ISetFirstNamePerson } from "../../global/sets/set_FirtsNamePerson/contracts.ts";

export type FirstNamePersonArg = string;
export type ResponseValidator = FirstNamePersonArg | ResponseBadArguments;

export type ValidatorsFN = (
  d: FirstNamePersonArg,
  set?: ISetFirstNamePerson,
) => ResponseValidator;

export type ConstructValidatorFNP = Function;
export type FirstNamePersonFN = ValidatorsFN;


