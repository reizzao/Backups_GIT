import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { setClientes } from "@cliente";
import { makeAdmCliente } from "@/entitys/admCliente/actions/manager/controller.ts";

const sut = makeAdmCliente
const repoSUT = setClientes.repositoryProduction

Deno.test({
  name: "[ FAIL ] deve retornar .",
  only: false,
  async fn() {

    const on = repoSUT.items!

    expect(true).toEqual(true);
  },

});

Deno.test("[ OK ] deve retornar .", () => {

  expect(true).toEqual(true);
});

/* -- TESTER_CONSOLE -- */

async function tester_() {
  return await repoSUT!.items![0].actionsManagers?.activation!
}

console.log(await tester_())

export default 1;