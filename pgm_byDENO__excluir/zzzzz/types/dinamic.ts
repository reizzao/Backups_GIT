import { Diferencias_da_Linguagem, Exemplo } from "../helpers/types/aux.types.ts";
import { Conceito } from "../helpers/types/aux.types.ts";
import { Habilitado } from "../helpers/types/aux.types.ts";
import { Declaracao_Referencia, PalavrasChaveReferencia } from "./comput.type.ts";

export interface Args_Dinamico {
  temNaLinguagem: Habilitado
  linguagem: string
  dadoViaFuncao: Dado_Gerado_Por_Funcao_Classificatorias
  referencia: Referencia
  metodo_Para_NovosTipos: Metodo_Para_Novos_Tipos
  tipo_personal_Novo: Tipo_Personal_Novo
  ferramentas_Operacoes: Ferramentas_Operacoes
}

export interface Dado_Gerado_Por_Funcao_Classificatorias {
  temNaLinguagem: Habilitado
  conceito: Conceito
  via_Classe: Classe
  via_Struct: Struct
  exemplo: Exemplo
}

export interface Classe {
  temNaLinguagem: Habilitado
  conceito: Conceito
  construtor: string
}

export interface Struct {
  temNaLinguagem: Habilitado
  conceito: Conceito
  modelagem: string
  exemplo: Exemplo
}

export interface Referencia {
  palavrasChaveReferencia: PalavrasChaveReferencia
  declaracaoReferencia: Declaracao_Referencia
  exemplo: Exemplo
}

export interface Tipo_Personal_Novo {
  temNaLinguagem: Habilitado
  conceito: Conceito
  criar_estrutura: string
  criar_acoes_metodos: string
  uso_em_escopo_de_uso: string
  diferenciais: Diferencias_da_Linguagem
  exemplo: Exemplo
}

export interface Metodo_Para_Novos_Tipos {
  acionar_via: string
}

export interface Ferramentas_Operacoes {
  temNaLinguagem: Habilitado
  devolve_texto: Devolve_Texto
}

export interface Devolve_Texto {
  return_texto: string
  texto_interpolado_com_variavel: string
}

