import { GetIdadeFN } from "../../index.ts";
import { setIdadeMinima } from "../../setAdmIdade.ts";
import { fakeMaiorOrMenorIdade } from "./fake.ts";

export const getIdadeMock: GetIdadeFN = (data) => {
  // const hoje = new Date();// abaixo fixei a data mockada com a data de hoje ao inves de atual
  const hoje = new Date(fakeMaiorOrMenorIdade.hoje);

  const nascimento = new Date(data.mm + "/"  + data.dd + "/" + data.yy);
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

console.log(getIdadeMock(fakeMaiorOrMenorIdade.dataSimuladaMaiorQue18OK))