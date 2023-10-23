import { Dado_Gerado_Por_Funcao_Classificatorias } from "../types/args.ts";
import { Comput_Fixo, Dado, FerramentasFuncionais, Metodologias, Tipo } from "../types/comput.type.ts";

export class PgmComputUniversal implements Partial<Comput_Fixo> {

  public static metodologias: {
    metodologia_desenho_de_objeto: { metodologia_Args_e_Fixos: "", }
  };

  public static linguagem: "Universal";

  public static dado: Dado = {
    temNaLinguagem: { habilitado: true, },
    conceito: {
      conceito: "",
    },
    valor: "string",
    parteDado: "string",
    dado: "string",
  };

  public static tipo: Tipo = {
    temNaLinguagem: { habilitado: true },
    conceito: {
      conceito: "",
    },
    possiveis: ['', ''],
    origem: "any", //ENUM: primitivo - naoPrimitivo - Personalizado
    nome: "string",
    representacao: "string",
    sintaxe_modo_de_tipar: "string",
    exemplo: { exemplo: "Exemplo" },
  };

  public static funcao_gera_dado: Dado_Gerado_Por_Funcao_Classificatorias = {
    temNaLinguagem: { habilitado: true },
    conceito: {
      conceito: "",
    },
    via_Classe: {
      temNaLinguagem: { habilitado: true },
      conceito: {
        conceito: "",
      },
      construtor: "string",
    },
    via_Struct: {
      temNaLinguagem: { habilitado: true },
      conceito: {
        conceito: "",
      },
      modelagem: "string",
      exemplo: { exemplo: "Exemplo" }
    },

    exemplo: { exemplo: "Exemplo" }
  };

  public static ferramentasComputacionais: FerramentasFuncionais = {
    temNaLinguagem: { habilitado: true },
    atribuicao: {
      temNaLinguagem: { habilitado: true },
      acumulativa: "",
      auto_operavel_Unitariamente: "",
      exemplo: { exemplo: "" },
    },

    operacoes: {
      temNaLinguagem: { habilitado: true },
      atribuicao: {
        temNaLinguagem: { habilitado: true },
        acumulativa: "string",
        auto_operavel_Unitariamente: "string",
        exemplo: { exemplo: "", }
      },

      comparacao: {
        temNaLinguagem: { habilitado: true, },
        conceito: {
          conceito: "",
        },
        unitaria: {
          temNaLinguagem: { habilitado: true, },
          conceito: {
            conceito: "",
          },
          exemplo: { exemplo: "" },
        },
        mutipla: {
          temNaLinguagem: { habilitado: true, },
          conceito: {
            conceito: "",
          },
          exemplo: { exemplo: "" },
        },
      },

      castingConversao: "",

      aritmeticos: ["",],


      controle_de_fluxo: {
        temNaLinguagem: { habilitado: true, },
        conceito: {
          conceito: "",
        },

        checagem_if_else: {
          temNaLinguagem: { habilitado: true, },
          conceito: {
            conceito: "",
          },
          sintaxe: "sintaxe",
          exemplo: { exemplo: "" },
        },

        checagem_switch: {
          temNaLinguagem: { habilitado: true, },
          conceito: {
            conceito: "",
          },
          sintaxe: "sintaxe",
          exemplo: { exemplo: "" },
        },

        ternaria: {
          temNaLinguagem: { habilitado: true, },
          conceito: {
            conceito: "",
          },
          sintaxe: "sintaxe",
          exemplo: { exemplo: "" },
        },
      },
    },
  };

  static create() {
    return new PgmComputUniversal()
  }

}