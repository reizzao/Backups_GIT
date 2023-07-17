import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { createClienteFisicoControllerMaker, fakeCreateClienteFisicoArg } from "@clienteFisico";
import { type HttpResponse } from "@responses";

const sut = createClienteFisicoControllerMaker

Deno.test({
  name: "[ OK ] deve retornar as props da entidade dentro da funcao ok() do tipo HttpResponse com as keys: data, statusCode.",
  only: false,
  async fn() {
    const action: HttpResponse = await sut.execute(fakeCreateClienteFisicoArg)

    expect(await action.data.ID).not.toBeUndefined();

    expect(await action.data).toHaveProperty('args');
    expect(await action.data.args).toHaveProperty('primeiroNome');
    expect(await action.data.args.primeiroNome).toBe('any');

    expect(await action.data.args).toHaveProperty('sobrenome');
    expect(await action.data.args.sobrenome).toBe('foobar');

    expect(await action.data.args.idade).not.toBeUndefined();

    expect(await action.data.args).toHaveProperty('nomeCompleto');
    expect(await action.data.args.nomeCompleto).toBe('any foobar');
  },

});

Deno.test("[ OK ] deve retornar .", () => {

  expect(true).toEqual(true);
});

/* -- TESTER_CONSOLE -- */

// async function tester_() { }
// tester_ ();

export default 1;