// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { msgByExceptions } from "./byExceptions.ts";

const sut = msgByExceptions;

Deno.test("[ Messenger ] deve retornar a mensagem de somente letras", () => {
  expect(sut.letters.onlyLetters).toBe("Ops! digite somente letras!");
});

export default 1;
