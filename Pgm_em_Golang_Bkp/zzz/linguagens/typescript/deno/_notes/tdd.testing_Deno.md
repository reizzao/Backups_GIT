
doc: deno testing : https://docs.deno.com/runtime/manual/basics/testing/assertions

link lib completa asserts deno : https://deno.land/std/assert/mod.ts

lib_Deno_Assert
modulo_assertThrows : é uma funcao que testa funcoes configuradas para possivelmente lançar erro com throw.
uso: na funcao assertThrows (
   1º param: insira uma funcao anonima () => { onde dentro dela voce executa a funcaoAlvo },
   2º param: o tipo de instancia do erro a ser lançado,
   3º param: a mensagem configurada no erro lançado,

modulos_afirmacao_de_igualdade_ou_nao
assertEquals() ::se é igual,
assertNotEquals() ::se não é igual
assertStrictEquals() ::se é totalmente igual semelhante ao ===, só nao acerta instancia mas o tipo sim ex: é objeto tambem, mas nao sei de que instancia para isso uso o assertInstanceOf(variable, Date).


modulo_assertEquals :compara se é igual o primeiro e o segundo param.
aplicabilidade: serve para avaliar qualquer tipo de dado primitivo, objeto, etc...
na funcao assertEquals( parametros:
  1º alvo,
  2º alvo a ser comparado se é igual o do 1º param,
  3º "String com mensagem personal para caso quebre e mostre no console CLI")

modulo_verificar_instancia : assertInstanceOf
ex: assertInstanceOf(variable, Date)

contem_no_array :
Existem dois métodos disponíveis para afirmar que um valor contém um valor assertStringIncludes()e assertArrayIncludes().