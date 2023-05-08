
export type ISetFirstNamePerson = { totalLetters: TotalLetters };

export type TotalLetters = {
  min: number;
  max: number;
  msgErrorLettersMin: () => string;
  msgErrorLettersMax: () => string;
};