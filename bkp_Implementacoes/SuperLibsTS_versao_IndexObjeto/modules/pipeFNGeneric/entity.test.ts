// deno-lint-ignore-file no-explicit-any no-unused-vars ban-types no-unused-labels
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { pipeFNGeneric } from "./mod.ts";

const sut = pipeFNGeneric

Deno.test({
  name: "deve retornar a soma de 10 que entrou no inputRequest + 10 da 1ª funcao + 10 que devolve a 2ª funcao do array,entao deve voltar um obj com { numero: 30 } [ #Logic ].",
  only: false,
  async fn() {
    type Foo = { numero: number }
    const inpRequest = { numero: 10 }

    const foo = (inp: Foo): Foo => ({ numero: inp.numero + 10 })
    const foo2 = (inp: Foo): Foo => ({ numero: inp.numero + 10 })
    const arrFuncs: Function[] = [foo, foo2] // My array
    // test
    const action = await sut<Foo>(inpRequest, arrFuncs)
    const assertion = { numero: 30 }

    expect(action).toEqual(assertion);
  },

});

/* TESTER_CONSOLE ************************************* */

type Bar1 = { texto: string, numero: number }

const inpRequest = { texto: 'any', numero: 10 }

const foo = (inp: Bar1): Bar1 => {
  return {
    texto: inp.texto.toUpperCase(),
    numero: inp.numero + 100
  }
}
const foo2 = (inp: Bar1): Bar1 => {
  return {
    texto: `${inp.texto.toUpperCase()}_Concatenei1_`,
    numero: inp.numero + 10
  }
}

const arrFuncs: Function[] = [foo, foo2]

async function show1() {
  const res = await sut<Bar1>(inpRequest, arrFuncs);
  console.log(res)
}
// show1();

export default 1;
