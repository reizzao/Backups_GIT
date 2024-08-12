
# TOPICOS ESPLICADOS BASE PGM

# Tipos Decalracoes Representacoes
2. declaracoes
    1. declaracao_Tipagem_Estatica_FIXA
    2. declaracao_Tipagem_Dinamica_INFERIDA

3. tipos
   conceito: todos tem que ser declarados no recipiente em usoe posteriormente iniciados com suas representacões
    1. Primitivos
        1. numero_INTEIRO, representacoesLiterais: 10
        1. numero_DECIMAL, representacoesLiterais: 10.11
        2. cadeia de caracteres foram uma string , representacoesLiterais: char: 'M', obs: unica letra com delimitador em aspasSimples.

    2. Objeto
        1. String colecao de char ,o texto é objeto por causa de seus membros disponiveis para manipular sua coleção de caracter char. , representacoesLiterais: "Meutexto"

    3. Literal
        1. logico boleano

4. casting: convertendo determinado tipo para caber no espaço reservado para outro, após a atribuição indique qual é o novo tipo entre parenteses.

5. atribuicao_e_Reatribuicao_Normal_e_reatribuicoes_EleMesmo_Aritmeticas
    * conceito: no espaço em memoria opera ele mesmo na operacao escolhida com o valor passado.
    * possiveis: [ "atribuicao_e_Reatribuicao_Normal com = igual", "reatribuicoesEleMesmoAritmeticas: += -= *= %= "]
    * reatribuicoesEleMesmoAritmeticas aproveitando o valor que ja tem:
    += acrescentando(mais igual), -= diminuido(menos igual), *=, multiplicado(vezes igual), %= aumentar resto(resto igual)

6. valoresZeroPorDefault:
    1. referencias: null, se nada for preenchido. [String, objeto]
    2. numeros: 0, se nada for preenchido.
    3. boleano: false, se nada for preenchido

7. demarcacao_retornaNada: tipo: void vazio, dentroDeBloco: somente return somente return na ultima linha o seu tipo de retorno será void. obs: se voce fez uma atribuicao a um campo dnetro do bloco não precisa retornar nada somente o return sozinho no fim do bloco.

8.  condicionaisChecagens: tomada de decisao: [#umaChecagem_if, #maisQUeUmaChecagem_else_if, #diversasChecagens_switch ,#chegagem2Respostas_ternario,]

    1. ternario: sintaxe: ternario >> resultado = (condicao <fazer logica do pedido>) ? verdadeiroResposta : falsoResposta;
    // obs: o resultado temq ue ser do emsmo tipo das 2 opções de resposta
    exemplo: String resultado = (salario > 5000) ? msgCasoDoar : msgCasoNaoDoar;
    2. resumo_ternario: #sintaxSugar #ternario tomada de decisao, 2 possiveis resposta - entrega 1 resposta se verdade ou outra se for falso.

9.  OperadoresLogicosERelacionaisFormarExpressaoBoleana: operadores logicos e relacionais sempre resultam em expressaão boleana veradeiro ou falso.
   1. expressoes: são operacoes que retornam um valor de resultado, que tem que ser capturado em uma variavel e esta variavel conterá um valor do tipo boleano (SIM ou NÃO) para uso.,

  1.  relacionaisPergunta: para expressar PERGUNTA <comparacoes entre operandos>, retorna boleano SIM ou NÂO
  * #nomeclatura: utilize prefixo de pergunta: is: é, has: tem, are: são
  * comparacao_E_igualouNao: ==
  * menor_que: < alusão a um 4. menor_igual: <=
  * maior_que: > alusão a um 7. maior_igual: >=
  * diferente: != .

  1. logicosAPerguntaValeOuNaoVale: operadores: E &&, OU ||, NEGACAO !
  conceito: utiliza o resultado das PERGUNTAS(relacionais), o que for sim vale o que for nao nao vale.
  * E-AND(&&): valeSoSeTodosExistirForemSIm,
  * OU-OR(||): valeQualquerUmQueForSimOuNao,
  * NEGACAO(!): o interrogacao antes da variavel inverte seu valorBoleano se era true, agora é false e vice e versa.


1. array: espaço na memoria onde dentro deste espaço se divide em outropequeno pedaços para items guardarem seus valores.
    * iniciar array : a diferença é que preenchemos os valores com {} chaves e nao [] colchetes.


2.  loops:
    * loopsPossiveis: [ #loopwhile_Enquanto, #loopFor_ #loopForeach_para_itemDeArray ]
    * aplicabilidade: "dentro do bloco do loop coloco a instrução que quero que se repita, quantas vezes a estruturaAlvo tiver de tamanho.

    * loop_conceito: loop é como um CONTADOR ,com uma variavelIteradora tenho acesso a tudo que sempre preciso saber 1- #inicializador(iteradora inicializada), 2-  #condicaoParaque_Chegue_ao_FIM_limite_proLoop_terminar(iteradoraTamanhoDoIterado), 3- #transformacaoInicializadorNasRodagem_ParaChegarAoLimite_e_FinalizarRodagem(iteradora incrementando ou decrementando) : esta variavelIteradora faz toda contagem e fingir ser a cada rodagem o item do iterado para ser manipuladado a cada rodagem pelo [indice, posicao que se encontra tambem capturado por variavelIndice]

    * no_loop_FOR: (faço manual este #inicializador, #condicaoParada, #transformacaoInicializadorNasRodagem)

    * no_loopForeach_SemIndice: passo ao for uma variavelIteradoraItems do tipo que terá os items no array, e posso usar esta variavelIteradoraItems para algo. obs: só nao tenho o indice para manipular, sua utilidade é para não me preocupar com o tamanho do array ele ja faz a contagem e transformacao da iteradora explicitamente.
    * sintaxe:
    ```
    for (type var : array) {
        statements using var;
    }
    ```

1. Ferramentas:
    * loopRecursos:
    1. #break_parar_loop_sobChecagem
    2. #Continue_ARodagem_MasSemUsar_OEspressado_NaChecagem
      1. * Loop a cada interacao posso usar o valor da variavelIteradora que se faz passar a variavelAlvoIteradaAfetada.
      * clausula continue : a cada rodagemDoLoop pula/ignora nao usa o que foi expressado/checado na checagem do if estipulado.
      * locaisDeUso: clasula puleContinue: usar somente dentro de loops e em bloco de checagem.
      * resumo: a cada rodagem :: O Que Espressar Nao Use , mas CONTINUE sem usar isto expressado!




2. poo:
    1. pastasPacote : a cada categoria faça outras categorias e dentro de cada pastaModelosClasse e pastaExecutaModeloClasse para cada arquivoModeloClasse faça outro arquivo para testa-lo instanciar-lo.
    2. instanciacao_referencia_test_uso_modelo: a instanciação é para criar uma referencia da classe modelo e testar suas funcionalidades criando assim instancias comportamentais e não só de modelo , toda instanciação e tests tem que ser ser feitos dentro da funcaoPrincipal main da classe de testInstanciaReferencia para ter acesso ao escopo das variaveis .

    3. construtor: recebe o emsmo nome da classe, não tem marcação de retorno, expressa que o this.campoDaClasse receberá a referencia do parametro com a informação vinda do construtor enviada pelo utilizador ao chamar criar nova instancia deste objeto.

    4. sobrecargaDeConstrutor: "sobrecarga é criar um metodo ou artefato igual e no priemiroOriginal chamar onovo com suas diferenças, aplicabilidade: somente #provisorio para dar tempo de quem esta usando versao antiga se atualizar", obs: para chamar o novo construtor dentro do construtor original use o this() porque o this é quem representa o objeto chamar e this(params) e como funcao executando-o com params pedindo as novidade

    5. obs: sobrecarga de construtor tem que criar o novo construtor para novidades mas este novo tem que receber a mesma assinatura de parametros do originals e executar na primeira linha o this(paramsDoOriginal), e o original tem que executar na primeira linha o this() vazio sem aprams que vai chamar o o construtor #SomenteDeApoio, e por fim fim adicionar seus apparams novos e alem disto no ultimo constriutor vazio ele é vazio mesmo sem campos ou params #SomenteDeApoio.


2. objeto
    1. modelagemDoFormato_comClasse: arquivo somente modelar o formato do objeto com classe seus campos e comportamentosMetodos, possodeclarar os campos sem iniciar valor, se iniciar valor aqui eles serão default padraão appara todas as instancias desta classe modelo assim tod objetos terão este valor e poderam serem reescritos depois.
    2. executarModeloDoObjeto: arquivo de classe com metodo main ou outro para instanciar o Modelo obs: nao precisa preencher na instanciacao por não ter usado construtor, pode ser após enfim preencher os campos da instancia do objeto
    3. Ao imprimir o objetoInteiro no console devolve NomeDoPacote@7ad041f3 : que quér dizer hash_IdentificacaoDaMemoriaAlocada.