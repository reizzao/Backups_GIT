import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import {
  accountClienteRepositoryInMemory,
  fakeAccountClienteFisicoOK,
  fakeAccountClienteJuridicoOK,
} from "@accountClientes";

const sut = accountClienteRepositoryInMemory

const clienteFisicoOK = fakeAccountClienteFisicoOK
const clienteJuridicoOK = fakeAccountClienteJuridicoOK

const cleanItemsBeforeEachTest = () => sut.items = []

Deno.test({
  name: "[ OK ] deve criar um cliente do tipo { Fisico } com as props corretas.",
  only: false,
  async fn() {
    const input = clienteFisicoOK

    const action = await sut.create(input)
    // console.log(action)

    expect(action).toHaveProperty('primeiroNome');
    expect(action).toHaveProperty('sobrenome');
    expect(action).toHaveProperty('cpf');
    expect(action).toHaveProperty('email');

    cleanItemsBeforeEachTest()

  },

});

Deno.test({
  name: "[ OK ] deve criar um cliente do tipo { Juridico } com as props corretas.",
  only: false,
  async fn() {
    const input = clienteJuridicoOK

    const action = await sut.create(input)
    // console.log(action)

    expect(action).toHaveProperty('nomeFantasia');
    expect(action).toHaveProperty('cnpj');
    expect(action).toHaveProperty('email');

    cleanItemsBeforeEachTest()

  },

});

Deno.test({
  name: "[ OK ] deve listar os 2 clientes criados.",
  only: false,
  async fn() {
    const input1 = clienteFisicoOK
    const input2 = clienteJuridicoOK
    const assertionListCreateds = 2

    await sut.create(input1)
    await sut.create(input2)

    expect(await sut.list()).toHaveLength(assertionListCreateds);

    cleanItemsBeforeEachTest()

  },

});


export default 1;