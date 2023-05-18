import { ISetIdadeMinima } from "../../setAdmIdade.ts";

export const fakeMaiorIdade: ISetIdadeMinima = {
  idadeMinima: 18,
  feedExceptionIdadeMinima() {
    return `Ops! só é permitido idade maior que ${this.idadeMinima}`;
  },
};

//

type IFakeMaiorOrMenorIdade = {
  hoje: string;
  dataSimuladaMaiorQue18OK: string;
  dataSimuladaMenorQue18FAIL: string;
};

export const fakeMaiorOrMenorIdade: IFakeMaiorOrMenorIdade = {
  hoje: "Thu May 18 2023",
  dataSimuladaMaiorQue18OK: "18/05/2005",
  dataSimuladaMenorQue18FAIL: "19/05/2005",
};
