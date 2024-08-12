import {
  Base_Linguagem
} from "../struct.Base_Linguagem.ts";
import {
  BaseLinguagemTypes, Propriedade
} from "../types.Base_Linguagem.ts";

const propriedade_via_construtor_kotlin: Propriedade = {
  tem_que_ter_a_propriedade: true,
  a_propriedade_pode_ser_criada_no: 'construtor',
  popularAPropriedade: {
    receber: 'recebo a propriedade de fora a ser criada via parametro',
    atribuir_a_propriedade_existente: 'TODO'
  },
  devolver: 'TODO'
}

const propriedade_via_metodo_kotlin: Propriedade = {
  tem_que_ter_a_propriedade: true,
  a_propriedade_pode_ser_criada_no: 'TODO',
  popularAPropriedade: {
    receber: 'TODO',
    atribuir_a_propriedade_existente: 'TODO'
  },
  devolver: 'TODO'
}

const kotlin: BaseLinguagemTypes = {
  linguagem: "kotlin",
  precisa_funcao_main: true,
  gerador_novo_objeto: {
    viaConstrutor: {
      propriedade: propriedade_via_construtor_kotlin
    },
    viaMetodo: {
      propriedade: propriedade_via_metodo_kotlin
    }
  },
  debugger: {
    via_console: {
      observacoes: "tem 2 formas de debuggar o arquivo.kt, são os .class e os .jar, a diferenca é que o .jar podemos compilar para pasta personalizada.",
      metodo_mostrar_no_console: "println( o_que_vai_mostrar )",
      em_pasta_personal: {
        compilar: "kotlinc arquivo.kt -include-runtime -d dist/arquivoDestino.jar",
        mostrar_no_console: "kotlin dist/arquivo.jar",
        detalhes: 'para primeiro compilar é o kotlinc - e para mostrar é o kotlin arquivo -- quando compila para pasta personal cria um arquivo .jar com este script'
      },
      no_mesmo_local: {
        compilar: "kotlinc endereco/arquivo.kt",
        mostrar_no_console: "kotlin endereco/Main.kt && kotlin MainKt.class",
        detalhes: "para primeiro compilar é o kotlinc - e para mostrar é o kotlin arquivo -- quando compila para mesmo local cria um nomeArquivo Kt.class com este script"
      },

    }
  },
  tipos: {
    texto: {
      aceita_somente_aspas_duplas: true,
      template_literals_para_aceitar_interpolacao: "Não precisa somente indica a variavel com cifrao ou se for objeto $cifraoNomeObjeto.propriedade.",
      interpolar_texto_com_variavel: "inserir dentro da string de aspas duplas : $nomeDaVariavel",
      interpolar_texto_com_variavel_objeto: "inserir dentro da string de aspas duplas : ${ varivelObjeto.propriedade }, a diferença é que acrescenta as chaves depois do $ para abrir as props do objeto",
    }
  },
  funcao: {
    keyword_funcao: {
      funcao_isolada: "fun",
      funcao_isolada_abreviada: "TODO",
      funcao_metodo_em_estrutura: "fun",
    },
  }
};

const kotlin_base = Base_Linguagem.criar(kotlin);

console.log(kotlin_base);
