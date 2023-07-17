// deno-lint-ignore-file no-explicit-any
import { FirstNamePerson } from "@objectValues";
import { ClienteFisicoModel } from "@clienteFisico";

// import { setMinString } from "@useObjects";
// - todo -- para usar o setMinstring no fonte tem que :: fazer o perform receber opcional o setMinString e repassa pra subfuncao minString


const validatesClienteFisico = async (args: ClienteFisicoModel) => {
  const { primeiroNome, sobrenome, anoNascimento } = args

  const valids = {
    primeiroNome: await FirstNamePerson.perform(primeiroNome),
    sobrenome,
    anoNascimento,
  }
  return await valids
}

// inserir os metodos acima no array de metodosPipe abaixo:
const listPipeClienteFisico = [
  validatesClienteFisico,
]

const CreateClienteFisicoCasePipeArgs = async (args: ClienteFisicoModel) => {
  try {
    return await listPipeClienteFisico.reduce(async (acc: any, fn) => await fn(acc), args)
  }
  catch (err: any) {
    throw await err
  }
}

export { CreateClienteFisicoCasePipeArgs }
