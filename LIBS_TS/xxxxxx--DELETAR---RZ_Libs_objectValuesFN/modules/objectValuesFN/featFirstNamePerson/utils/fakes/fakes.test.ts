// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { firstNameFake } from "./fakes.ts";

Deno.test("[ Fail >> ... ] deve retornar os valores corretos dos fakes", () => {
  expect(firstNameFake.letters.six6).toBe("okokok");
  expect(firstNameFake.letters.one1).toBe("f");
});
