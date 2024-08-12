# Comportamento Metodo Funcao

1. conceito: uma funcao é uma configuradora de acao comportamento, utiliza variaveis de preferencia privadas para encapsular o retorno de um resultado manipulado, utilizando estruturas de controle de dado, formulas com logicas, repeticoes com loops, assim vai gerando pequenos subResultados que servem de input para evoluir o input até chegar a configuracao do resultado final.

1. como_definir_que_sera_um_metodo: escreva em rascunho o requerimento do client, o que identificar como VERBO será provavelmente um metodo. ex: desafio: Quero fazer uma soma entre 2 numeros >> então teras que implementar o metodo soma(), e o que quér com o verbo será as variaveis: 2 numeros represente como numero1, numero2, e retorne uma configuracao capaz de sempre fazer este objetivoPedido: a soma entre 2 numeros de forma dinamica variavel qcom qualquer entrada desde que seja do tipo numero.

1. narracao: [ PODE FAZER, É o que uma entidade/assunto PODE_FAZER, ]

1. significados: [ comportamento, acao, funcao, dentro de classe é um metodo, encapsulador de variaveis privadas, manipulador, escrita, leitura, consumer consumidor, ]

1. compoem_metodo:
  1. contrato_de_declaracao: [ visibilidade, local, tipoRetorno, nome, valor: [DelimitadorVariaveis,BlocoManipulacaoVariaveis] ]


2. tecnicas_de_Metodos
  1. getters_e_setters: são para proteger as propsTem de inserções indesejadas.
    1. getter: retorna a propTem
    2. setter: recebe o parâmetro e atribui a propTem, devolveVazio.


1. retornos_metodo
  1. vazio_sem_return: se um metodo não devolve, seu retorno é vazio, setters não devolvem que faz o trabalho de devolver são os getters.

  2. de_acordo_com_variaveis_de_entrada: o tipo de retorno dos métodos é o mesmo das propriedadesAtributos utilizados como aprams de entrada variaveis, se singular é <Primitivo> ou se plural é composto que formara um <tipoPersonalComposto de primitivos>, utilizando a dinamica de entradas variaveis por params evita efeitosColaterais não muda variaveis de fora.


