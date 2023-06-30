import { calculations } from "./calculations.ts";

import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
// import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";

const sut = calculations;

Deno.test("[percentage] correct percentage #1", () => {
  expect(Promise.resolve(sut.discountPercentage(100, 10))).resolves.toEqual(90);
  expect(Promise.resolve(sut.discountPercentage(100, 10))).resolves.not.toEqual(
    91,
  );
});

Deno.test("[Sum] correction sum #1", () => {
  expect(sut.sum(10, 20)).toEqual(30);
  expect(sut.sum(10, 20)).not.toEqual(31);
});
