import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { CreateClienteFisicoCasePipeArgs } from "@clienteFisico";
import { setsAdm } from "@sets";

const sut = await CreateClienteFisicoCasePipeArgs
const msgValitorsMinString = setsAdm.messages.validatorsText.min.exception

const clientefisicoFakeOk = {
  primeiroNome: 'Jon',
  sobrenome: 'Doe',
  anoNascimento: 1970,
}

Deno.test({
  name: "[ FAIL ] deve retornar mensagem de erro se o campo primeiroNome for passado com menos de 2 letras.",
  only: false,
  async fn() {
    const minText = 2
    const inputTarget = { ...clientefisicoFakeOk, primeiroNome: 'J' }

    const getError = async () => {
      try {
        return await sut(inputTarget)
      }
      catch (err: any) {
        return await err.message
      }
    }

    expect(await getError()).toEqual(`${msgValitorsMinString} ${minText}`);
  },

});


export default 1;