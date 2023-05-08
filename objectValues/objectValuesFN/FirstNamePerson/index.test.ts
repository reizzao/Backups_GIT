// deno-lint-ignore-file no-unused-vars no-explicit-any
import { FirstNamePerson } from "./index.ts";
import {
  firstNameFake,
  inputLettersFakeForController,
} from "./utils/fakes/fakes.ts";

import { setFirstNamePerson } from "../../global/sets/set_FirtsNamePerson/setFirstNamePerson.ts";
import { ArgMain, InvalidArgFirstNamePerson } from "./contracts.ts";

const Log = (m: any) => console.log(m);

type ArgsSut = string;
type ArgControllerSut = { primeiroNome: ArgMain; key2: string };

const makeSut = (d: ArgsSut) => {
  return {
    sutFirstNamePerson: FirstNamePerson(d),
  };
};

Deno.test("[ Fail >> FirstNamePerson { lengthTextMin } ] deve retornar msg correta de erro ao validar o tamanho minimo de letras passado ao campo primeiroNome ", () => {
  const checkedMsgErrorLettersMin = setFirstNamePerson.totalLetters
    .msgErrorLettersMin();
  try {
    const primeiroNome = makeSut(firstNameFake.letters.one1);
  } catch (e: any) {
    const outPrimeiroNome = e.message;
    if (outPrimeiroNome !== checkedMsgErrorLettersMin) {
      throw new Error(
        "A mensagem de erro para letras minima ao usar FirstNamePerson esta incorreta!!!",
      );
    }
  }
});

Deno.test("[ Fail >> FirstNamePerson { lengthTextMin } ] deve retornar a class de Error correta ", () => {
  const checkedMsgErrorLettersMin = setFirstNamePerson.totalLetters
    .msgErrorLettersMin();
  try {
    const primeiroNome = makeSut(firstNameFake.letters.one1);
  } catch (e: any) {
    const outPrimeiroNome = e instanceof InvalidArgFirstNamePerson;
    // console.log(">>>>>>>>>>>>>", outPrimeiroNome);
    if (outPrimeiroNome === false) {
      throw new Error(
        "A instancia do erro não é InvalidArgFirstNamePerson !!!",
      );
    }
    Log("Ok: instancia do erro é >> InvalidArgFirstNamePerson !!!");
  }
});

Deno.test("[ Fail >> FirstNamePerson { lengthTextMax } ] deve retornar msg correta de erro ao validar o tamanho maximo de letras passado ao campo primeiroNome ", () => {
  const checkedMsgErrorLettersMax = setFirstNamePerson.totalLetters
    .msgErrorLettersMax();
  try {
    const primeiroNome = makeSut(firstNameFake.letters.twentyOne21);
  } catch (e: any) {
    const outPrimeiroNome = e.message;
    if (outPrimeiroNome !== checkedMsgErrorLettersMax) {
      throw new Error(
        "A mensagem de erro para letras maximo ao usar FirstNamePerson esta incorreta!!!",
      );
    }
  }
});

Deno.test("[ Fail >> FirstNamePerson { lengthTextMin } ] deve retornar a class de Error correta ", () => {
  const checkedMsgErrorLettersMax = setFirstNamePerson.totalLetters
    .msgErrorLettersMax();
  try {
    const primeiroNome = makeSut(firstNameFake.letters.one1);
  } catch (e: any) {
    const outPrimeiroNome = e instanceof InvalidArgFirstNamePerson;
    // console.log(">>>>>>>>>>>>>", outPrimeiroNome);
    if (outPrimeiroNome === false) {
      throw new Error(
        "A instancia do erro não é InvalidArgFirstNamePerson !!!",
      );
    }
    Log("Ok: instancia do erro é >> InvalidArgFirstNamePerson !!!");
  }
});

/* MOCK PARA TESTER ************************************* */

const controllerFirstNamePersonMock = (d: ArgControllerSut) => {
  try {
    const newObj = {
      primeiroNome: FirstNamePerson(d.primeiroNome),
      key2: d.key2,
    };
    return {
      data: newObj,
      status: 200,
      infos: { messageOk: "Oba! cadastrado com sucesso!" },
    };
  } catch (e) {
    return { data: e.message, status: 400, infos: { classError: e.name } };
  }
};
/* CONTROLLER TESTER ************************************* */

function showControllerFirstName() {
  const outputOk = controllerFirstNamePersonMock(
    inputLettersFakeForController.inputOk,
  );
  const outputFailMin = controllerFirstNamePersonMock(
    inputLettersFakeForController.inputFailMin,
  );
  const outputFailMax = controllerFirstNamePersonMock(
    inputLettersFakeForController.inputFailMax,
  );

  console.log(outputOk); // ok
  console.log(outputFailMin); // falha MIN
  console.log(outputFailMax); // falha MAX
}
showControllerFirstName();
