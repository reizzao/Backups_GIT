// dynamic setFirstName : esta vinculado as msg ao test : pointUnique.

import { ISetFirstNamePerson } from "./contracts.ts";


export const setFirstNamePerson: ISetFirstNamePerson = {
  totalLetters: {
    min: 2,
    max: 20,
    msgErrorLettersMin() {
      return `Ops! precisa ter no minimo ${this.min} letras`;
    },
    msgErrorLettersMax() {
      return `Ops! pode ter no maximo ${this.max} letras`;
    },
  },
};
