// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { createClienteFisicoPrototypeMaker } from "./prototype.ts";
import { fakeCreateClienteFisicoArg, ClienteFisicoPrototype } from "@clienteFisico";


const sut = createClienteFisicoPrototypeMaker

Deno.test({
  name: "[ OK ] deve retornar a existencia de todos os campos da entidade.",
  only: false,
  async fn() {
    const input = fakeCreateClienteFisicoArg;
    const action = await sut(input);
    expect(action).toHaveProperty('ID');
    expect(action.args).toHaveProperty('primeiroNome');
    expect(action.args).toHaveProperty('sobrenome');
    expect(action.args).toHaveProperty('idade');
    expect(action.args).toHaveProperty('anoNascimento');
    expect(action.args).toHaveProperty('nomeCompleto');
  },

});

Deno.test("[ OK ] deve retornar a confirmação dos prototypes.", async () => {
  const instance1 = await sut(fakeCreateClienteFisicoArg)
  const obj2 = { ...instance1, primeiroNome: 'Twoname' }
  const instance2 = Object.assign(instance1, obj2)

  const confirmEqualMemory = instance1.getIdade == instance2.getIdade
  const confirmPrototypeInstance1 = instance1 instanceof ClienteFisicoPrototype
  const confirmPrototypeInstance2 = instance1 instanceof ClienteFisicoPrototype

  expect(confirmEqualMemory).toEqual(true);
  expect(confirmPrototypeInstance1).toEqual(true);
  expect(confirmPrototypeInstance2).toEqual(true);
});

/* -- TESTER_CONSOLE -- ************************************ */

async function tester_Ok_Propertys() {
  const action = await sut(fakeCreateClienteFisicoArg);
  console.log(action)
}
// tester_Ok_Propertys();

export default 1;

