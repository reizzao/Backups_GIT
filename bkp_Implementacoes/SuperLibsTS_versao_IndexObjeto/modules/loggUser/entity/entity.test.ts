// deno-lint-ignore-file no-unused-vars no-explicit-any
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { AddLoggUserFN, fakesLoggUser, IArgsLoggPerson } from "./mod.ts";
import { addLoggUser } from "./mod.ts";
import { Log } from "../../../_deps/replicas.deps.ts";

const inputSutAtividadeName = fakesLoggUser.OK.atividadeName
const inputSutAuthor = fakesLoggUser.OK.author

const makeSut: AddLoggUserFN = async (atividadeName, author): Promise<IArgsLoggPerson> => {
  return await addLoggUser(atividadeName, author)
};

Deno.test({
  name: "deve conter os campos corretos.",
  only: false,
  async fn() {
    const where = await makeSut(inputSutAtividadeName, inputSutAuthor)

    expect(where).toHaveProperty('atividade');
    expect(where).toHaveProperty('author');
    expect(where).toHaveProperty('data');
    expect(where.data).toHaveProperty('dia');
    expect(where.data).toHaveProperty('mes');
    expect(where.data).toHaveProperty('ano');
  },

});

Deno.test({
  name: "deve retornar a atividadeName correta.",
  only: false,
  async fn() {
    const where = await makeSut(inputSutAtividadeName, inputSutAuthor)

    const assertionAtividadeName = inputSutAtividadeName

    expect(where.atividade).toEqual(assertionAtividadeName);
  },

});


/* TESTER_CONSOLE ************************************* */

function show_LoggUser() {
  makeSut(inputSutAtividadeName, inputSutAuthor).then((d: any) => Log(d))
}
// show_LoggUser();

export default 1;
