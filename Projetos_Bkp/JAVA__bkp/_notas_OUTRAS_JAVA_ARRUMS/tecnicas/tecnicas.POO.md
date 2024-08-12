# POO
significados_partes_do_objeto:
  é_uma : [ coisa material ou abstrata É UM ]
  características: [ partesDoCorpoQue_CompoemAlgo, propriedades, campos, atributos, variáveis ,  ]
  comportamento: ações que ele pode fazer são os métodos.
  stado: comoEleEstaNoMomento: passado, presente, futuro, ex: está ligando, está ligado, desligado.

- #objeto tudo que tiver características, comportamento e stado é um objeto. Cada instância vinda da mesma formaCasse tem características iguais e stado, valores diferentes personalizados.

- classificar_no_mode_do_futuro_objeto:
  [
  - TEM(props), narração: TEM,
  -
 -  COMO_ESTA(metodo), narração: ESTA?, ELE É?, os valores de stado na maioria é boleano ou Enum, mudaveis por um setter().
 -
-  FAZ(metodos) , narração: PODE ... VERBO, ex: pode fazer, pode escrever
  ]

  obs: tudo que for mudavel disponibilizar em métodos get e set

  

  staticos é o mesmo que constante #poloUnico mas só demarca acesso a [ clas, atributo, método ]

modificadorConstante: conceito: quando o artefato for demarcado como constante, não deixa sobreescrever variáveis, métodos, e a classe ser herdada,  quando criadas uma vez setada nunca muda e tem que ser inicializada , palavra chaves [ em Java <final>, em JS: const ] convenção nomenclatura: TUDO_MAIUSCULA para variável.

constante_em_classe : garante que aclasse não poderá ser extendida, e assim não podem sobreescrever seus membros., ex: Class String, em Java usa modificador final

Enum: conceito: valor alternativo em texto constante que não muda demarca prefixa é o É um: [ em Java é uma classe com os valores CONSTANTES A SER ESCOLHIDOS no uso em campos.

Contratos:
  1. paraClasse:
     1.  opcaoClass_Abstract , palavraChave: abstract conceito: é um contrato um template para classes extender em e cumprir implementando, diferença para interface é que podem iniciar valor m campos atributos, mas os métodos são somente sem corpo só o modelo.
     2. . opcao_Interface: palavraChave: interface, conceito:  só demarca propriedade com o tipo que terá, não dá pra definir contante porque tem que ser implementanda tem que se dar um valor, não precisa explicitar em membros se é public ou abstract pois assim já são por padrão debaixoDosPanos.
     3. classes por implementar mais que uma interface.

# Tutoriais
tutorial: byGuanabara https://youtu.be/aR7CKNFECx0?si=ABU3-eO6RmLmMeL0

