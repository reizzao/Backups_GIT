import {
  Base_Linguagem
} from "../../struct.Base_Linguagem.ts";
import {
  BaseLinguagemTypes, Propriedade
} from "../../types.Base_Linguagem.ts";

const propriedade_via_construtor_TS: Propriedade = {
  tem_que_ter_a_propriedade: true,
  a_propriedade_pode_ser_criada_no: 'construtor',
  popularAPropriedade: {
    receber: 'recebo a propriedade de fora a ser criada via parametro',
    atribuir_a_propriedade_existente: 'dou para esta this.propriedade da classe a propriedade recebida de fora'
  },
  devolver: 'no construtor nao precisa devolver a propria atribuicao ja devolve.'
}

const propriedade_via_metodo_TS: Propriedade = {
  tem_que_ter_a_propriedade: true,
  a_propriedade_pode_ser_criada_no: 'no construtor digo que vai ter a propriedade privada mas nao configuro seu valor no construtor. essa atribuicao faço no metodo.',
  popularAPropriedade: {
    receber: 'no metodo o metodo tem que ser public e static: recebo a propriedade de fora a ser criada via parametro',
    atribuir_a_propriedade_existente: 'dou para esta this.propriedade da classe a propriedade recebida de fora'
  },
  devolver: 'retorno a instanciacao da classe com o que recebeu'
}

const typescript: BaseLinguagemTypes = {
  linguagem: "typescript",
  precisa_funcao_main: false,
  gerador_novo_objeto: {
    viaConstrutor: {
      propriedade: propriedade_via_construtor_TS
    },
    viaMetodo: {
      propriedade: propriedade_via_metodo_TS
    }
  },
  debugger: {
    via_console: {
      observacoes: "somente com console.log já é possivel.",
      metodo_mostrar_no_console: "console.log( o_que_vai_mostrar )",
      em_pasta_personal: {
        compilar: "nao precisa compilar",
        mostrar_no_console: "somente com console.log",
        detalhes: '#NAO_USA'
      },
      no_mesmo_local: {
        compilar: "nao precisa compilar",
        mostrar_no_console: "nao precisa compilar",
        detalhes: "#NAO_USA"
      },

    }
  },
  tipos: {
    texto: {
      aceita_somente_aspas_duplas: false,
      template_literals_para_aceitar_interpolacao: "precisa de string formada por CRAZES ao inves de aspas duplas ou simples",
      interpolar_texto_com_variavel: "inserir dentro da string de CRAZES : `textoQualquer ${ nomeDaVariavel }`",
      interpolar_texto_com_variavel_objeto: "inserir dentro da string de CRAZES : ${ varivelObjeto.propriedade }, a diferença é que acrescenta as chaves depois do $ para abrir as props do objeto",
    }
  },
  funcao: {
    keyword_funcao: {
      funcao_isolada: "function",
      funcao_isolada_abreviada: "arow function :: atribui uma funcao anonima a uma variavel ex: const nomeFuncao = () => {}",
      funcao_metodo_em_estrutura: "nao precisa",
    },
  }
};

const typescript_base = new Base_Linguagem(typescript);

console.log(typescript_base);
