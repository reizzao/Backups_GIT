import type {
  BaseLinguagemTypes
} from './types.Base_Linguagem.ts'

class Base_Linguagem {

  constructor(
    private readonly base_linguagem: BaseLinguagemTypes,
  ) { }

  public static criar(
    base_linguagem: BaseLinguagemTypes
  ) {
    return new Base_Linguagem(base_linguagem)
  }


}

export {
  Base_Linguagem
};


