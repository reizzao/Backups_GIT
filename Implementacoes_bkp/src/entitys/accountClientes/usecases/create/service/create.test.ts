import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import {
  createAccountClientesMaker,
  fakeAccountClienteFisicoOK,
  fakeAccountClienteJuridicoOK,
} from "@accountClientes";
import {
  accountClienteRepositoryInMemory,
} from "@accountClientes"

const sut = createAccountClientesMaker
const clienteFooOK = fakeAccountClienteFisicoOK
const clienteJuridicoOK = fakeAccountClienteJuridicoOK
const repoTest = accountClienteRepositoryInMemory

Deno.test({
  name: "[ OK ] deve retornar um { clienteFisico fake }",
  only: false,
  async fn() {
    const cliente = clienteFooOK
    const action = await sut.create(cliente, repoTest)
    // console.log(action)

    expect(action).toEqual(cliente);
    expect(action.type).toEqual('fisico');
  },

});
Deno.test({
  name: "[ OK ] deve retornar um { clienteJuridico fake }",
  only: false,
  async fn() {
    const cliente = clienteJuridicoOK
    const action = await sut.create(cliente, repoTest)
    // console.log(action)

    expect(action).toEqual(cliente);
    expect(action.type).toEqual('juridico');
  },

});


export default 1;