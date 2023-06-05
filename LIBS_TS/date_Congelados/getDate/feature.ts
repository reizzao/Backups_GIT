import { IDateFormat } from "./aux/fake/fake.ts";
import { setIdadeMinima } from "./setAdmIdade.ts";

type IGetAgeFN = (data: IDateFormat) => number | unknown;

/**
 * @description retorna a idade em numero.
 * @param param0  recebe obj com campos de nascimento { dd: string, mm: string, yy: string,}
 * @returns  number : retorna a idade
 * @exemple getName ({ dd: string, mm: string, yy: string,})
 */

const getAge: IGetAgeFN = (data) => {
  const hoje = new Date();

  const nascimento = new Date(data.mm + "/" + data.dd + "/" + data.yy);

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

export { getAge };
export type { IGetAgeFN };
