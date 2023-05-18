import { setIdadeMinima } from "./setAdmIdade.ts";

export type GetIdadeFN = (data: string) => number | unknown;

/**
 * @description este metodo retorna a idade se for maior que 18 anos || ou um feedBack se for menor que 18 anos
 * @param param0  string data no formato : DIA/MES/ANO
 * @returns number | unknown
 * @exemple getIdade ("18/05/2005")
 */

export const getIdade: GetIdadeFN = (data) => {
  const hoje = new Date();

  const nascimento = new Date(convertDateMMDDYYY(data.split("/")));

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

export function convertDateMMDDYYY(datearray: string[]) {
  return datearray[1] + "-" + datearray[0] + "-" + datearray[2];
}

// fonte: https://pt.stackoverflow.com/questions/137503/como-saber-se-a-pessoa-%C3%A9-maior-de-idade
