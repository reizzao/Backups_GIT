export type ISetFirstNamePerson = {
  name: string;
  msgCustomArgumentsError: () => string;
  totalLetters: TotalLetters;
};

export type TotalLetters = {
  min: number;
  max: number;
  msgErrorLettersMin: () => string;
  msgErrorLettersMax: () => string;
};
