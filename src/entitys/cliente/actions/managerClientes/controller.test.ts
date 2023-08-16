import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { makeClienteRepositoryMemory } from "@cliente";
import { makerManagerClientes } from "@cliente";


const sut = makerManagerClientes

const repoSut = makeClienteRepositoryMemory

// Deno.test({
//   name: "[ OK ] deve retornar .",
//   only: false,
//   async fn() {
//     sut.handle('1', 'congelado')
//     const when = await repoSut.items[0].computedCliente?.statusOperational
//     console.log('REPO_SUT >>>>> ', repoSut)
//     expect(await when).toEqual('congelado');
//   },

// });

export default 1;