// deno-lint-ignore-file no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { Log } from "@externals";
import { fakerLoggUserOK, ILoggPersonModel, ILoggUserType } from "@loggUser";
import { createLoggUser } from "./feature.ts";

const input: ILoggPersonModel = fakerLoggUserOK;

// Mock
const repositoryLoggUserMock: ILoggUserType = {
  items: [],

  async create(props: ILoggPersonModel) {
    if (props) {
      await this?.items?.push(props)!;
      return await true;
    } else {
      return await false;
    }
  },

  async list() {
    return await this?.items!;
  },
};

const sut = createLoggUser; // SUT

const beforeTests = () => repositoryLoggUserMock.items = [];

Deno.test({
  name: "deve retornar um objeto [LoggUser] com as propriedades corretas.",
  only: false,
  async fn() {
    const actual = await sut(input);
    // sut(input).then((d) => Log(d)); // VIEW CRIACAO EM PROMESSA

    expect(actual).not.toBeUndefined();
    expect(actual).toHaveProperty("atividade");
    expect(actual).toHaveProperty("author");
    expect(actual).toHaveProperty("data");
    beforeTests();
  },
});

Deno.test({
  name: "deve retornar o test de repo mock",
  only: false,
  async fn() {
    const actual = await repositoryLoggUserMock.create(input);
    const assertion = true;

    expect(actual).toEqual(assertion);
    beforeTests();
  },
});

Deno.test({
  name: "deve retornar a quantidade de 1 item na colecao de LogUse Mock",
  only: false,
  async fn() {
    // necessario para zerar o criado no controller
    beforeTests();
    await repositoryLoggUserMock.create(input);
    const actual = await repositoryLoggUserMock?.items?.length;
    const assertion = 1;

    expect(actual).toEqual(assertion);
    beforeTests();
  },
});

/* TESTER_CONSOLE ************************************* */

function show_RepoMockLogUser() {
  repositoryLoggUserMock.create(input).then((d) => Log(d));
  repositoryLoggUserMock.list().then((d) => Log(d));
  Log(
    "numero de items no repo: >>> ",
    repositoryLoggUserMock?.items?.length,
  );

  // Limpar os items do LogUser
  beforeTests();
}
// show_RepoMockLogUser();

export default 1;
