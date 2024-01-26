import { PgmComputUniversal } from "../statics/static.PgmUniversal.ts";
import { Args_Dinamico } from "../types/args.ts";
import { Comput_Fixo } from "../types/comput.type.ts";

export class Pgm {

  public comput_fixo: Partial<Comput_Fixo> = PgmComputUniversal.create()

  constructor(
    // private args_dinamico: Args_Dinamico,
  ) { }

  // criarPgm(args_dinamico: Args_Dinamico) {
  //   return new Pgm(args_dinamico)
  // }

}

export const makePgm = new Pgm()
// export const makePgm = (args_dinamico: Args_Dinamico) => new Pgm(args_dinamico)

console.log(makePgm)