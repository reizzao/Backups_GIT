import { Debugger } from "./types/Debugger.type.ts";
import { Tipos } from "./types/Tipos.type.ts";
import { Funcao } from "./types/Funcao.type.ts";

export interface BaseLinguagemTypes {
  linguagem: string
  precisa_funcao_main: boolean
  gerador_novo_objeto: GeradorNovoObjeto
  debugger: Debugger
  tipos: Tipos
  funcao: Funcao
}

export interface GeradorNovoObjeto {
  viaConstrutor: ViaConstrutor
  viaMetodo: ViaMetodo
}

export interface ViaConstrutor {
  propriedade: Propriedade
}
export interface ViaMetodo {
  propriedade: Propriedade
}

export interface Propriedade {
  tem_que_ter_a_propriedade: boolean
  a_propriedade_pode_ser_criada_no: string
  popularAPropriedade: PopularAPropriedade
  devolver: string
}

export interface PopularAPropriedade {
  receber: string
  atribuir_a_propriedade_existente: string
}



