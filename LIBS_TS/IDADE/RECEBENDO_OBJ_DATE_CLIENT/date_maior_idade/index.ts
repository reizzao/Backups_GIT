import { DateFormat } from "./data/fake/fake.ts";
import { setIdadeMinima } from "./setAdmIdade.ts";

export type GetIdadeFN = (data: DateFormat) => number | unknown;

export const getIdade: GetIdadeFN = (data) => {
  const hoje = new Date();

  const nascimento = new Date(data.mm + "/" + data.dd + "/" + data.yy);
  // console.log(nascimento)

  //Retorna a diferença entre hoje e a data de nascimento em anos.
  let ano = hoje.getFullYear() - nascimento.getFullYear();

  //Retorna a diferença de mês do mês de nascimento para o atual.
  const m = hoje.getMonth() - nascimento.getMonth();

  //Caso ainda não tenha ultrapassado o dia e o mês
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    ano--;
  }

  // lancar excessao caso seja menor de idade
  if (ano < setIdadeMinima.idadeMinima) {
    throw new Error(setIdadeMinima.feedExceptionIdadeMinima());
  }

  return ano;
};

// fonte: https://pt.stackoverflow.com/questions/137503/como-saber-se-a-pessoa-%C3%A9-maior-de-idade
