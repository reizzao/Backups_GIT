import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { clienteFisicoOKFake, createClienteFisicoController } from '@clienteFisico'
import type { FNCreateClienteFisicoControllerArgs, IClienteFisicoArgs, SetsEntityClienteFisico } from '@clienteFisico'
import { setsLoggUserMemory, setsLoggUserPivoIntactTDD } from "@loggUser";

const sut: FNCreateClienteFisicoControllerArgs = createClienteFisicoController

const setsLoggUserMemorySUT: SetsEntityClienteFisico = setsLoggUserMemory

const setsLoggUserPivoIntactTDDSUT: SetsEntityClienteFisico = setsLoggUserPivoIntactTDD

function cleanItemsRepoLoggUserMEMORY() {
  setsLoggUserMemorySUT.relations.repoSaveLogg.items = []
}

Deno.test({
  name: "[ OK ] deve conter as props corretas na nova instancia da entidade gerada.",
  only: false,
  async fn() {
    const input: IClienteFisicoArgs = clienteFisicoOKFake.ONE
    const action = await sut(input, setsLoggUserMemorySUT)
    console.log('ACTION >>>>>> ', await action)
    expect(action.statusCode).toBe(200);
    expect(action.data.args).toHaveProperty('primeiroNome');
    expect(action.data.args.type).toBe('fisico');
  },
});

Deno.test({
  name: "[ OK - Create > add logg ] deve criar um logg no repo correto, após esta ação de criacao.",
  only: false,
  async fn() {
    cleanItemsRepoLoggUserMEMORY()
    const input: IClienteFisicoArgs = clienteFisicoOKFake.ONE
    await sut(input, setsLoggUserMemorySUT)
    // console.log('LOGG REPO MEMORY >>>>>> ', await sutSetsRelations.repoSaveLogg)

    expect(await setsLoggUserMemorySUT.relations.repoSaveLogg.items).toHaveLength(1)

  },
});

Deno.test({
  name: "[ OK - Create > add logg ] deve garantir que não vai fazer inserção no repoLoggUser em produção - após inseir somente no de test.",
  only: false,
  async fn() {
    cleanItemsRepoLoggUserMEMORY()
    const inputONE: IClienteFisicoArgs = clienteFisicoOKFake.ONE
    const inputTWO: IClienteFisicoArgs = clienteFisicoOKFake.TWO

    await sut(inputONE, setsLoggUserMemorySUT)
    await sut(inputTWO, setsLoggUserMemorySUT)

    console.log('LOGG REPO PRODUÇÃO >>>>>> ', await setsLoggUserPivoIntactTDDSUT.relations.repoSaveLogg.items)

    expect(await setsLoggUserPivoIntactTDDSUT?.relations?.repoSaveLogg?.items).toHaveLength(0)
    // -- GARANTE QUE NAO VAI SALVAR TAMBEM NO REPO EM PRODUÇÃO - TEM QUE FICAR TAMANHO : 0 -- TODO ESTA VOLTANDO 2 É PARA VOLTAR 0

  },
});

// TODO COMPUTAR CAMPO IDADE
// Deno.test({
//   name: "[ OK ] deve retornar valores validos nos campos computados.",
//   only: false,
//   async fn() {

//     const input: IClienteFisicoArgs = clienteFisicoOKFake.ONE
//     const action = await sut(input)
//     console.log('ACTION >>>>>> ', await action)

//     expect(action.data.args.idade).not.toBeNaN();
//     expect(action.data.args.idade).not.toBeUndefined();
//   },

// });