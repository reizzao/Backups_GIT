// deno-lint-ignore-file prefer-const
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { ICreateLoggUserServiceControll, loggUserActionsController, setLoggUser, makerLoggRepositoryMemory, LoggRepositoryMemory, ObjRegisterLogg } from "@loggUser";
import { msg } from "@admSystem";

const sutCreate: ICreateLoggUserServiceControll = loggUserActionsController
const repoTDDMemory: LoggRepositoryMemory = makerLoggRepositoryMemory

function cleanItemsRepoLoggUserMEMORY() {
  repoTDDMemory.items! = []
}

interface InputFakeObjLoggUser {
  ONE: Pick<ObjRegisterLogg, 'ID_Relation' | 'fullname'>
  TWO: Pick<ObjRegisterLogg, 'ID_Relation' | 'fullname'>
}

const inputFakeOK: InputFakeObjLoggUser = {
  ONE: {
    ID_Relation: '1',
    fullname: 'fullname one',
  },
  TWO: {
    ID_Relation: '2',
    fullname: 'fullname two',
  },
}

Deno.test({
  name: "[ Create - OK ] deve gerar com sucesso os campos da entidade com os valores corretos.",
  only: false,
  async fn() {
    const action = await sutCreate.registerLogg('createCliente', inputFakeOK.ONE, setLoggUser)
    //   console.log('ACTION--LOGGS >>>>', action)

    expect(action?.ID_Relation).toBe('1');
    // expect(await action.getFullnameUser()).toBe('Jon Doe');
    expect(action.actionName).toBe('createCliente');
    expect(action.actionFeedback).toBe(`createCliente ${msg.sucessCreated}`);
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