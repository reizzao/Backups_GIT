// dynamic setFirstName : esta vinculado as msg ao test : pointUnique.

import { ISetFirstNamePerson } from "./contracts.ts";

export const setFirstNamePerson: ISetFirstNamePerson = {
  name: "FirstNamePerson",
  msgCustomArgumentsError() {
    return `InvalidArgumentsError_${this.name}`;
  },

  totalLetters: {
    min: 2,
    max: 20,
    msgErrorLettersMin() {
      return `Ops! precisa ter no minimo ${this.min}`;
    },
    msgErrorLettersMax() {
      return `Ops! pode ter no maximo ${this.max}`;
    },
  },
};
