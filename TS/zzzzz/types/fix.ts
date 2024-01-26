import { Conceito, Exemplo, Habilitado } from "../helpers/types/aux.types.ts";
import { Dado_Gerado_Por_Funcao_Classificatorias } from "./args.ts";

export interface Comput_Fixo {
  // metodologias: Metodologias
  linguagem: string
  dado: Dado
  tipo: Tipo
  funcao_gera_dado: Dado_Gerado_Por_Funcao_Classificatorias
  ferramentasComputacionais: FerramentasFuncionais
}

export interface Metodologias {
  metodologia_desenho_de_objeto: Metodologia_Desenho_de_Objeto
}

export interface Metodologia_Desenho_de_Objeto {
  metodologia_Args_e_Fixos: string // criar subObjetoArgs para entradaPersonal e subObjetoFixo para dadosFixos
}

export interface Dado {
  temNaLinguagem: Habilitado
  conceito: Conceito
  valor: string
  parteDado: string
  dado: string
}

export interface PalavrasChaveReferencia {
  temNaLinguagem: Habilitado
  mudavel: string
  naoMudavel: string
}

export interface Declaracao_Referencia {
  temNaLinguagem: Habilitado
  sintaxe_padrao: string
  referencia_mudavel: string
  referencia_nao_mudavel: string
  funcao: string
  metodo_de_novo_tipo: string
  array: string
}

export interface Tipo {
  temNaLinguagem: Habilitado
  conceito: Conceito
  possiveis: string[]
  origem: any //ENUM: primitivo - naoPrimitivo - Personalizado
  nome: string
  representacao: string
  sintaxe_modo_de_tipar: string
  exemplo: Exemplo
}

enum TiposEnum {
  PRIMITIVO = 'PRIMITIVO',
  NAO_PRIMITIVO = 'NAO_PRIMITIVO',
  PERSONALIZADO_CLASS = 'PERSONALIZADO_CLASS',
}

export interface FerramentasFuncionais {
  temNaLinguagem: Habilitado
  atribuicao: Atribuicao
  operacoes: Operacao_em_Funcao
}

export interface Operacao_em_Funcao {
  temNaLinguagem: Habilitado
  atribuicao: Atribuicao
  comparacao: Comparacao
  castingConversao: string
  aritmeticos: string[]
  controle_de_fluxo: Controle_De_Fluxo
}

export interface Comparacao {
  temNaLinguagem: Habilitado
  conceito: Conceito
  unitaria: ComparacaoUnitaria
  mutipla: ComparacaoMultipla
}

export interface ComparacaoUnitaria {
  temNaLinguagem: Habilitado
  conceito: Conceito
  exemplo: Exemplo
}
export interface ComparacaoMultipla {
  temNaLinguagem: Habilitado
  conceito: Conceito
  exemplo: Exemplo
}

export interface Atribuicao {
  temNaLinguagem: Habilitado
  acumulativa: string
  auto_operavel_Unitariamente: string
  exemplo: Exemplo
}

export interface Controle_De_Fluxo {
  temNaLinguagem: Habilitado
  conceito: Conceito
  checagem_if_else: Checagem
  checagem_switch: Checagem
  ternaria: Checagem
}

export interface Checagem {
  temNaLinguagem: Habilitado
  conceito: Conceito
  sintaxe: string
  exemplo: Exemplo
}
