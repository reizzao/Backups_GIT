# Modelagem Dados

# DADO_DEFINICOES
1. como_definir_que_sera_um_dado:
  1. atraves_de_rascunho_de_requerimento: Quero fazer uma soma entre 2 numeros >> então teras que implementar o metodo soma(), e o que quér com o verbo será as variaveis: 2 numeros represente como numero1, numero2, e retorne uma configuracao capaz de sempre fazer este objetivoPedido: a soma entre 2 numeros.

  2. caracteristicas_props:
    #TEM : <texto | numero>
    #PODE_ESTAR : <logico > [
    #ELE_É:  <enum>
    #RESULTADO_COMPUTADO_ELE_TEM: <texto | numero>

2. cicloParaFormarDado: em POO para formar e filtrar os dados eles cumprem um cicloComMetodosEspeciais :
  1.cicloComMetodosEspeciais:
    1. [
      {paramsViaConstrutor : dadoVemDinamicoDeFora},
      {getter: regraParaVer},
      {setter : regraValidaPreenchimento, e daí vai para a propAtributo: dadoProtegidoeValidado}
    ]


# uso_artefato
  1. uso_artefato: sempre quando chama um artefato, Pergunte e expresse QUEM É ESTE?, computacional apartir do seu valor, mando fazer alguma #Acao.


# VISIBILIDADES
1. visibilidades:
  1. possiveis: [ + público, # privado, - protegido ]
  2. paraUso_Cliente: público
  3. paraUso_Sistema: [privado(quando a mesma classe vai implementar), ou protegido(quando outras classes vão implementar)]


# REPRESENTACOES
1. dadoFixo : "literal magico"

1. dadoMutavel : "vem de atribuições de funções e metodos que recebem parametros os params que deixam a configuradora dinamica podendo mudar conforme quem precisa usar.",

1. dadoArgumento: É o preenchimento com valor ou indicacao que resulta em valor feita pelo utilizador Client ou Codigo.", narracao: PREENCHO DAR VALOR AO QUE PEDI, ex: Preencho a string, preencho o objeto, etc...


# ACESSOS
1. modificadores_de_acesso_emClasses:
  1. #modificadorDeAcesso protected /protegido da acesso direto sem ter e set as props do Pai somente para as classes que herdam.

# CONSTRUCAO DE VALOR
1. construcao_de_valor_dentro_de_bloco: é uma #sequenciaLogica, vai #contruindo #valor de acordo com o #tipo do artefato que se formou seu valor que esta trabalhando no momento e encaixando as peças de forma #logica que faz #sentido.


# INFORMACAO_MUDAVEL_DINAMICO
1. valor_dinamico_em_configurada :
  1. conceito:  o #valor passivel de mudança use como #parametro, se uma única COISA vai mudar use #Parâmetro no lugar para a escolha no uso  ser #valorDinamico ,  se essa mudança for type use #paramGeneric

1. prepararParaReceberDiversos_DoMesmoTipo_ViaParams:
  1. em_Java:
    * VarArgs: VarArgs é um sintaxSugar com 3 pontos APÓS a declaracao do tipo, para nao precisar declarar : tipo[] , faz então tipo...3pontos #novaReferenciaDoArray
    * declaracao: o (tipo... variavelQueGuardara_e_SeraReferencia)
    * vantagem: varArgs sintax sugapara receber array em metodo e na chamada poder passar objReferencia ou items soltos.ex: (1, 2, 3, 4).
    * obs: o parametro varArgs sempre tera que ser o primeiro, ele nao pode vir em outra posicao.


# INFORMACAO OBRIGATORIA
informacao_Obrigatoria: "em #poo vc pede o valorObrigatorio para se cadastrar na criaçao no #construtor, pergunte se: _ Quando criar está Entidade tenho que ter está OUTRA? se sim ela é obrigatória, construa na criaçao se não não use na criaçao. #relacionamento, #associacao",

# CONFIGURADORAS_CARACTERISTICAS_CAMPOS
  1. valor_em_Classe_Atributo_Prop:
    1. conceito: "#supremo #poo Campos atributos representam propriedades de algo do mundo real em código."
  1. diversos_valores_Objeto: "#artefatos 1 informacao usa variavel pra guardar, mais que uma informacao use objeto para guarda, por que são conjunto de variaveis e metodos [membros] ",

  2. parametro:
    1. conceito: parametro é um futuro valor um contrato substituidor ... uma variavel que será reescrita conforme quem vai usar obs: tem que ser do mesmo tipo do contrato a inserção de quem vai usar.
    2. aplicabilidade: "#parametros #valor, quando precisamos de params é quando o valor vai vir pelo cliente, quando o valor vai ser pego na memória já existe gravado atribuído não precisos pega-lo por param"

# ARTEFATOS
1. valor : [ literalMarretado, dinamicoViaParams, dinamicoPorPosicao, capturado,  ]
2. artefato : [ preenchidoPRONTO, referenciaGeradora_DE_PRONTO ]
3. tipo : [ tiposPrimitivos, tiposPrimitivosObjeto, tiposPersonalizados_GeradoPorClasses ]

# LIÇÕES ESTRUTURA MODELO DE DADOS

- objetivo: gerar instancias de objeto que tenha características e comportamentos, usar Estrutura_Dado : classe

- declaracao: cada artefato para estar no objeto final tem que ser declarado, declaracao é igual seja onde o artefato estiver sendo definido seja em posição de [ variavel, atributo, método, ], o que pode mudar são adições de elementos chave : [ visibilidade, regra: [mutavel, constante, construcao, staticos: constante_Imutavel_PoloUnico,  ]] #guardaNoCoracao.

- comportamentos_Metodos: se  é algo que precisas fazer já é um verbo e sendo um verbo é um metodo.

- o_this: dentro da classe representa a instancia criada fora da classe. ex: dentro da classe é this.campo -- o mesmo fora é instancia.campo


# computaveis:
1. conceito_em_js: camposComputaveis podem ser computados via Args este é o #melhorDosMundos porque da pra atribuir await/async OU via this.campo  destantagem: só não dá pra atribuir await/async.",


