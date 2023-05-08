import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { setFirstNamePerson } from "./setFirstNamePerson.ts";

// pointUnique Controller : FirstName

Deno.test("[ lengthText.min ] deve retornar o tamanho minimo de texto para firstName ", () => {
  const actual = setFirstNamePerson.totalLetters.min;
  const resultExpected = 2;
  expect(actual).toEqual(resultExpected);
});

Deno.test("[ lengthText.max ] deve retornar o tamanho maximo de texto para firstName ", () => {
  const actual = setFirstNamePerson.totalLetters.max;
  const resultExpected = 20;
  expect(actual).toEqual(resultExpected);
});

Deno.test("[ lengthText.msgErrorLengthTextMin() ] deve retornar a mensagem correta caso de erro no tamanho minimo de texto para firstName ", () => {
  const sut = setFirstNamePerson.totalLetters;
  const actual = sut.msgErrorLettersMin();
  const resultExpected = `Ops! precisa ter no minimo ${sut.min} letras`;
  expect(actual).toEqual(resultExpected);
});

Deno.test("[ lengthText.msgErrorLengthTextMin() ] deve retornar a mensagem correta caso de erro no tamanho maximo de texto para firstName ", () => {
  const sut = setFirstNamePerson.totalLetters;
  const actual = sut.msgErrorLettersMax();
  const resultExpected = `Ops! pode ter no maximo ${sut.max} letras`;
  expect(actual).toEqual(resultExpected);
});
