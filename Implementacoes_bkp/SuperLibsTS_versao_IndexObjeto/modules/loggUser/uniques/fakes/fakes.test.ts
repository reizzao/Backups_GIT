// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { fakesLoggUser } from "./fakes.ts";


const sut = fakesLoggUser

Deno.test({
  name: "deve retornar os valores fakes corretos.[ garanteFakes ]",
  only: false,
  fn() {
    expect(sut.OK.atividadeName).toBe('atividade1');
    expect(sut.OK.author).toBe('author1');
  },

});

export default 1;
