// deno-lint-ignore-file prefer-const
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { ILoggUserActionsController, ISetsLoggUser, loggUserController, setsLoggUserProduction } from "@loggUser";
import { msg } from "@admSystem";

const sutCreate: ILoggUserActionsController = loggUserController
let setsLoggUserProductionTDD: ISetsLoggUser = setsLoggUserProduction

function cleanItemsRepoLoggUserMEMORY() {
  setsLoggUserProductionTDD.relations.repoSaveLogg.items = []
}

const inputFakeOK = {
  ONE: {
    ID: '1',
    getFullname: 'Jon Doe',
    actionName: 'createClienteFisico',
  },
  TWO: {
    ID: '2',
    getFullname: 'Jon Doe TWO',
    actionName: 'action2',
  },
}

Deno.test({
  name: "[ Create - OK ] deve gerar com sucesso os campos da entidade com os valores corretos.",
  only: false,
  async fn() {
    const action = await sutCreate.create(inputFakeOK.ONE, setsLoggUserProductionTDD)
    // console.log('ACTION--LOGGS >>>>', action)

    expect(action.ID).toBe('1');
    expect(action.getFullname).toBe('Jon Doe');
    expect(action.actionName).toBe('createClienteFisico');
    expect(action.actionFeedback).toBe(`createClienteFisico ${msg.sucessCreated}`);
    expect(action).toHaveProperty('date');
    cleanItemsRepoLoggUserMEMORY()
  },

});

// Deno.test({
//   name: "[ List - OK ] deve retornar a quantidade correta de artefatos gravados no repo escolhido para salvar e listar.",
//   only: false,
//   async fn() {
//     cleanItemsRepoLoggUserMEMORY()
//     await sutCreate.create(inputFakeOK.ONE, sutRepoByTest)
//     await sutCreate.create(inputFakeOK.TWO, sutRepoByTest)

//     // console.log('LOG ADICIONADOS EM REPO_TEST >>> ', await sutList.list(sutRepoByTest, sutRepoByTest))

//     expect(await sutList.list(sutRepoByTest, sutRepoByTest)).toHaveLength(2);
//   },

// });

export default 1;