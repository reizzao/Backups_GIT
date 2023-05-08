import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
// import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";

import { generate } from "./records.ts";

const sut = generate;

Deno.test("generate hash id in string", () => {
  const id = sut.generateID();
  const idb = sut.generateIDB();
  const codigo = sut.generateCodigo();
  const createdAt = sut.generateDateCreateAt();
  const updateAt = sut.generateDateUpdateAt();
  const removedAt = sut.generateRemovedAt();
  const loggerAt = sut.generateLoggerAt();
  const incrementNumber = sut.generateIncrementNumber();

  expect(typeof id).toEqual("string");
  expect(typeof idb).toEqual("string");
  expect(typeof codigo).toEqual("string");
  expect(typeof createdAt).toEqual("object");
  expect(typeof updateAt).toEqual("object");
  expect(typeof removedAt).toEqual("object");
  expect(typeof loggerAt).toEqual("object");
  expect(typeof incrementNumber).toEqual("number");
});
