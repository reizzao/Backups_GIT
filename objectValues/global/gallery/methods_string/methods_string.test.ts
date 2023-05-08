import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { methods_string } from "./methods_string.ts";

type ArgsSut = string;

const inputOK_Mock: ArgsSut = "foo";
const inputFAIL_Numbers_Mock: ArgsSut = "123";
const inputFAIL_Special_Mock: ArgsSut = "aA_#*$%@({";
const input_OK_One_Space_Final_StringMock: ArgsSut = "a bddd dddd";
const input_FAIL_One_Space_Final_StringMock: ArgsSut = "a  bddd dddd ";

const makeSut = (d: ArgsSut) => {
  return {
    sut_isString: methods_string.isString(d),
  };
};

Deno.test("[ Fail >> isString() ] nao aceitar diferente de string", () => {
  const { sut_isString } = makeSut(inputFAIL_Numbers_Mock);
  expect(sut_isString).toEqual(false);
});

Deno.test("[ Fail >> isString() ] nao aceitar numeros.", () => {
  const { sut_isString } = makeSut(inputFAIL_Numbers_Mock);
  expect(sut_isString).toEqual(false);
});

Deno.test("[ Fail >> isString() ] deve aceitar apenas 1 espaco no meio da string e terminar com string.", () => {
  const { sut_isString } = makeSut(input_OK_One_Space_Final_StringMock);
  expect(sut_isString).toEqual(true);
});

Deno.test("[ Fail >> isString() ] nao deve aceitar + mais que 1 espaco no meio da string e nao terminar com string.", () => {
  const { sut_isString } = makeSut(input_FAIL_One_Space_Final_StringMock);
  expect(sut_isString).toEqual(false);
});

Deno.test("[ Fail >> isString() ] nao aceitar caracteres especiais.", () => {
  const { sut_isString } = makeSut(inputFAIL_Special_Mock);
  expect(sut_isString).toEqual(false);
});

Deno.test("[ Ok >> isString() ] deve retornar verdadeiro se a entrada for string", () => {
  const { sut_isString } = makeSut(inputOK_Mock);
  expect(sut_isString).toEqual(true);
});
