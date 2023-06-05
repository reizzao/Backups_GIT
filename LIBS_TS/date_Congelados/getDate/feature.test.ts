import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { setIdadeMinima } from "./setAdmIdade.ts";
import { fakeMaiorOrMenorIdade } from "./aux/fake/fake.ts";
import { getIdadeMock } from "./aux/fake/mock.ts";

import { Log as mkeLog } from "/home/rzj/..gitAll/rzModulesTS_FIXOPC/devToolsRZ/LogConsole/index.ts";

// SUT
const sut = getIdadeMock;
const inputSut = fakeMaiorOrMenorIdade;
// const sut = getIdade;

Deno.test("deve retornar 18", () => {
  const input = inputSut.dataSimuladaMaiorQue18OK;
  const actual = sut(input);

  // console.log(">>>>>>>>>>", actual)
  const assertion: number = 18;

  expect(actual).toEqual(assertion);
});

Deno.test("deve retornar o feddBack de excessao se nao for maior de idade.", () => {
  // referente ao hoje >> estou simulando o amanha entao tem que ter 17 e é menor de idade
  const input = inputSut.dataSimuladaMenorQue18FAIL;
  const execute = () => {
    try {
      sut(input);
    } catch (err: any) {
      const message: string = err.message;
      return message;
    }
  };
  expect(execute()).toEqual(setIdadeMinima.feedExceptionIdadeMinima());
});

/* TESTER_CONSOLE ************************************* */

function show_getIdadeOk() {
  // console.log(sut(inputSut.dataSimuladaMaiorQue18OK));
}
show_getIdadeOk();

function show_getIdadeFAIL() {
  try {
    sut(inputSut.dataSimuladaMenorQue18FAIL);
  } catch (err: any) {
    mkeLog(err);
  }
}
// show_getIdadeFAIL();

export default 1;
