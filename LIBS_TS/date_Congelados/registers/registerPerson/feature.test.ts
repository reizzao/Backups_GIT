// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { IRegisterPersonModel } from "./contracts.ts";
import { registerPersonFN } from "./feature.ts";
import { objectDateLogMOD } from "./aux/auxiliares_mods.ts";

// DELETAR

// MOCK
const dateObjeto = objectDateLogMOD();

const registerPersonMock: registerPersonFN = () => {
  return {
    ID: "1",
    IDB: "1",
    CreateAt: {
      dia: dateObjeto.dia,
      mes: dateObjeto.mes,
      ano: dateObjeto.ano,
      horario: dateObjeto.horario,
    },
  };
};

// SUT
const sut = registerPersonMock;

Deno.test("deve retornar ...", () => {
  const input: IRegisterPersonModel = {
    ID: "1",
    IDB: "1",
    CreateAt: {
      dia: dateObjeto.dia,
      mes: dateObjeto.mes,
      ano: dateObjeto.ano,
      horario: dateObjeto.horario,
    },
  };

  const res: IRegisterPersonModel = {
    ID: "1",
    IDB: "1",
    CreateAt: {
      dia: dateObjeto.dia,
      mes: dateObjeto.mes,
      ano: dateObjeto.ano,
      horario: dateObjeto.horario,
    },
  };

  const actual = sut();
  const assertion = input;

  expect(actual).toEqual(assertion);
});

/* TESTER_CONSOLE ************************************* */

function show_RegisterPerson() {
  // console.log(sut());
}
show_RegisterPerson();

export default 1;
