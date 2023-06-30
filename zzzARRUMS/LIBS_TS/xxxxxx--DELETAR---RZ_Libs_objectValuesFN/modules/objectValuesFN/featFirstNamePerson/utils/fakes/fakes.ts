// inputs primitivo :: para validators

export const firstNameFake = {
  letters: {
    six6: "okokok",
    one1: "f",
    twentyOne21: "aaabbbcccdddeeefffg21",
  },
};

export const inputLettersFakeForController = {
  inputOk: {
    primeiroNome: firstNameFake.letters.six6,
    key2: "okokokokok",
  },
  inputFailMin: {
    primeiroNome: firstNameFake.letters.one1,
    key2: "okokokokok",
  },
  inputFailMax: {
    primeiroNome: firstNameFake.letters.twentyOne21,
    key2: "okokokokok",
  },
};
