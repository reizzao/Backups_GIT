import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import {
  listClientesMaker, createAccountClientesMaker, fakeAccountClienteFisicoOK, fakeAccountClienteJuridicoOK,
  accountClienteRepositoryInMemory
} from "@accountClientes";

const sut = listClientesMaker
const sutCreate = createAccountClientesMaker
const clienteFooOK = fakeAccountClienteFisicoOK
const clienteJuridicoOK = fakeAccountClienteJuridicoOK
const repoTest = accountClienteRepositoryInMemory

Deno.test({
  name: "[ OK ] deve retornar a lista com os 2 clientes Fisico e Juridico.",
  only: false,
  async fn() {
    await sutCreate.create(clienteFooOK, repoTest)
    await sutCreate.create(clienteJuridicoOK, repoTest)

    const listSut = await sut.list
    // console.log(await listSut(repoTest))

    expect(await listSut(repoTest)).toHaveLength(2);
  },

});

export default 1;