import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { superLibsTS } from "./main.ts";


const sut = superLibsTS

Deno.test({
  name: "deve conter as props [ #PropsOK ].",
  only: false,
  async fn() {
    expect(sut).toHaveProperty('superValidateTS')
    expect(sut).toHaveProperty('superDate')
    expect(sut).toHaveProperty('addLoggUser')
    expect(sut).toHaveProperty('log')
    expect(sut).toHaveProperty('pipeFNGeneric')
  },

});

/* TESTER_CONSOLE ************************************* */

async function tester_() {
}
tester_();

/*
* PARA RODAR ONLY SÓ ESTE TEST ```deno test <caminhoDesteArquivo>```
*/

export default 1;
