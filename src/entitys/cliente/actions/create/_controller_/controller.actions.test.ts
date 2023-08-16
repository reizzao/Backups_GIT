// deno-lint-ignore-file prefer-const
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { actionSutOK, actualDataHttpResponse, argClienteONE, cleanItemsMemoryCliente, clenRepoLoggUser, repositoryLoggIntact, setMemoryMock, sutMakerClienteActionsController, sutRepoClienteMemory, sutRepoLoggUserMemory } from "@cliente";


Deno.test({
  name: "[ OK - Create > add logg ] deve criar um logg no repo correto, após esta ação de criacao.",
  only: false,
  async fn() {
    await cleanItemsMemoryCliente()
    await clenRepoLoggUser()
    await sutMakerClienteActionsController.create(argClienteONE, setMemoryMock)
    // console.log('LOGG REPO MEMORY >>>>>> ', await sutRepoMemory.list())
    expect(await sutRepoLoggUserMemory.items).toHaveLength(1)
  },
});

Deno.test({
  name: "[ OK - Create > add logg ] deve criar um logg no repo correto, após esta ação de criacao.",
  only: false,
  async fn() {
    await cleanItemsMemoryCliente()
    await clenRepoLoggUser()
    await sutMakerClienteActionsController.create(argClienteONE, setMemoryMock)
    // console.log('LOGG REPO MEMORY >>>>>> ', await sutRepoMemory.list())
    expect(await sutRepoLoggUserMemory.items).toHaveLength(1)
  },
});

Deno.test({
  name: "[ OK ] não deve refletir em outros repositorios as inserções no memory ou production, o intact deve continuar intact.",
  only: false,
  async fn() {
    await cleanItemsMemoryCliente()
    await sutMakerClienteActionsController.create(argClienteONE, setMemoryMock)

    expect(await repositoryLoggIntact.items).toHaveLength(0)
  },
});

Deno.test({
  name: "[ OK - save Cliente ] deve salvar  as inserções criadas no repoMemory Clientes passado via set.",
  only: false,
  async fn() {
    await cleanItemsMemoryCliente()
    await sutMakerClienteActionsController.create(argClienteONE, setMemoryMock)
    // console.log(await sutRepoClienteMemory.items)
    expect(await sutRepoClienteMemory.items).toHaveLength(1)
  },
});

Deno.test({
  name: "[ OK ] deve existir a prop {activation} com o valor default {off}.",
  only: false,
  async fn() {
    expect(actualDataHttpResponse.actionsManagers!.activation).toBe('off');
  },
});

Deno.test({
  name: "[ OK ] deve existir a prop statusOperational com o valor default pendente.",
  only: false,
  async fn() {
    expect(actualDataHttpResponse.actionsManagers!.statusOperational).toBe('pendente');
  },
});

Deno.test({
  name: "[ OK - PROPS ] a prop type deve ser fisico por default.",
  only: false,
  async fn() {
    expect(actualDataHttpResponse.args.type).toBe('fisico');
  },
});

Deno.test({
  name: "[ OK - PROPS ] deve conter as props corretas na nova instancia da entidade gerada.",
  only: false,
  async fn() {
    expect(actionSutOK.statusCode).toBe(200);
    expect(actualDataHttpResponse).toHaveProperty('ID');
    expect(actualDataHttpResponse.args).toHaveProperty('primeiroNome');
    expect(actualDataHttpResponse.computed?.idade).toBeTruthy();
    expect(actualDataHttpResponse.computed?.idade).not.toBeNaN();
    expect(actualDataHttpResponse.computed?.fullname).toBeTruthy();
    expect(actualDataHttpResponse.args.type).toBe('fisico');
    await cleanItemsMemoryCliente()
  },
});
