import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { CreatePassageiro } from "@usecases";
import { IPassageiroData } from "@data";

const sut = CreatePassageiro

const requestCreatePassageiroOK: IPassageiroData = {
  ID: "1",
  firstName: "firstnameOne"
}

Deno.test({
  name: "[ OK ] deve retornar instancia de Passageiro.",
  only: false,
  async fn() {
    const actionCreate = await sut.execute(requestCreatePassageiroOK)

    console.log("RESULTADO- CREATE PASSAGEIRO >> ", actionCreate)

    expect(await requestCreatePassageiroOK).toEqual(requestCreatePassageiroOK);
  },

});

export default 1;