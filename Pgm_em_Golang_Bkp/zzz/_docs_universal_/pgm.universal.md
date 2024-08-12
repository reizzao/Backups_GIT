# linguagem UNIVERSAL

---

valor_dinamico : é quando o valor vai vir de fora e personalizado,vem de parametro de funcao,  peça por parametro para o utilizador preencher ao seu modo o valor [ se for numa classe peça pelo construtor, se for em uma funcao peca por argumento ]

valor_fixo: ou vem MARETADO literal, se for em uma estrutura classe decalramos o com valor fixado no ponto alto da classe.

definir_campos_de_objeto_via_estrutura_classe :
no topo da classe e no construtor definimos os campos que tera o objeto no topo os de valor fixo que nao mudará, e no construtor os dinamicos que mudara conforme o utilizador.

entidades :
# Tudo que entidades precisam
- estrutura em objeto
- computar campos do seu objeto (em um campo ter valor que vem de operacoes dos outros campos proprios)

Algumas linguagem como o [java, ] permite ter mais que 1 construtor se permitir entao crie um vazio sem params, isso é util para instancia-la sem argumentar, ou senao crue um metodo statico wue instancia a classe.

Associacao: TEM UM, na estrutura faco uma prop. receber outra classe, isso resultara em objeto aninhado, onde um campo do obj sera um objeto ao inves de tipo primitivo final,
Exemplo: obj pessoa tera um campo perfil com os dados do perfil aninhado.

auxilio_composicao: faça o rasculho de como vai usar o objeto instanciado e veja onde sera substituivel alguns dos compartimentos para assim depois implementar.

- Composicao : é o uso de um objeto operario sob contrato com metodo QUE FAÇA A ACAO para o objeto que o compos, sendo assim [ substituivel, cumpridor de acao, polo unico, metodo mascara de libs externas ]
exemplos : [ carro. Motor. ligar() > aqui carro depende do motor que sera injetado - qualquer intancia de motor vai servir para fazer a acao de ligar() que o carro precisa, ]

- Composicao_Dupla : para gerar opcionais, ex: pagamento  .via <este com os atributos que serao opcoes > e cada um destes camposCompostos serao Compostos por objetos com o metodo de contrato pagar (). Cada objeto podem ter seus campos diferentes o que é obrigatorio é ter o metodo em comum que a classe de autonivel vai usar que é o pagar() exemplo : pagamento.  formaPag < viaCartao | viaPix | viaDinheiro > .pagar() , exemplo tbm serve para ClienteFisico e Juridico.

- Para ter objeto entidade, antes criamos metodos CRUD create, ler um e todos, update , deletar , cada metodo deste pode ser divido em servico e controle, o controle é a ponte de entrada para informacao que vem de fora via metodos de api (ex: graphql , rest)

- Objeto entidade de Configuracao : alimentado pelo ADM
nao fazer singleton objeto unico, porque pode-se querer pesquisar estados anteriores desta informacao, entao esta informacao_atual tem que vir da ultima posicao de uma colecao de informações deste contexto inserido.

- valores de objADM na criacao voce pode cria-los com valores default, e modificar somente via api

- Ordem entidade Prototype com acoes computadas entre seus campos, onde VALIDAMOS OS ARGUMENTOS, Defimos Acoes UseCase
- _Crud (Dividido entre Service e Controller), este controller alimentara a api.

- Repositorios por entidade serao administrado por objeto_AdmDEV nele posso definir onde em qual base de dados sera guardada a informacao da entidade especifica.

- Composicao
  - objeto administravel por partes ou todo : Se quisesse gerar 1 obj só com todos campos instanciava só pelo construtor, mas como quero gerar este objeto por partes independentes faço os metodos para isso.

- autoInstanciao : instancie o obj internamente via metodo factoryMethod, evita outras formas de instanciacao por todo codigo.
Faca um metodo semelhante ao construtor, retornando uma new PropriaClasse como se estivesse instanciando fora.

para validadores criar classes Text, Number, Rule , que recebem objeto com campos :: length, ou value

PLATAFORMAS RUN TIME
Conceito: as lingusgem antigas tem suas ferramemtas somente para aplicacoes internas ou web, nao tem por padrao ferramentas para servidor onde se constroem microservicos internos e externosque precisam se comunicar como apis, comunicacao banco de dados, por isto elas usam suas plataformas ex: js usa o node, deno, java usa o spring boot, quarkus, etc...

versoes: utlize sempre a versao LTS que é a mais garantida.

Gerenciador de Dependencia
Conceito: toda plataforma tem seu gerenciador de dependencia para buscar e baixar na internet as ďependencias usadas no projeto na bersao correta.
No caso do spring utilizo em 2024 o maven

LIBS
funcoes Sync sao assincronas tem que esperar com await na frente, funcoes sem o sync tem que passar callback uma funcao anonima pra fazer algo depois que ela acabar de fazer a tarefa antes.

---

Anotacoes de Decoradores  ideal para desaclopar codigo, posso concentrar em polo unico neles, criando anotacoes personalizadas concentrando anotacoes de outros e codigos de libs em um polo unico e uso estas personalizadas no core ds dominio da app.

Todos frameworks e libs externos podem ser concentrados neste polo unico ex: [
server, orm, run time,
]

Converter criacao do objeto entidade de csmpos separados de valores primitivos para um objeto fechado : tem que criar uma estrutura DtoMapper para isso onde ela tsra um metodo que recebe o objeto entidade e devolve uma new intamcia do objeto recebido assim usamos este mapper fechado dai pra frente.


DTOobjetivo: entregar o objeto pro client com somente as props que desejamos que sejam publicas,
implementacao:  metodo que instancia a entidade e entrega só o necessario para publico.

Injecao de dependencia  delega a contratos sua composicso dd subObjeto ou servicais, e usa tbm inversao de controle dentro de uma factory de polo unico que vai instanciar qual a implementação do contrato que sera o de uso.
Tutorial: aula do nelio alves

Adaptador: entrega pro service, fazer metodo adapter que recebe o objeto como precisa pra criar a entidade ou recebe de alguma ouyra forma de campos de api externa e devolve no formato que quer deixar publico pro service

computados: nao precisa de um campo novo com valor de computados, só gerar um emtodo na estrutura que devolve este valor computado e quem precisar desse resultado acesse pelo metodo, senao fica duplicado a funcionalidade sem precisao.

precisa_de_nova_acao: manda uma nova funcao fazer e usa esta nova guncao que faz.

Estrategias_Arquitetura
um : [
entidade : recebe e devolve o argumento,

service : delega como vai devolver obj completo,

factory : monta os delegados do service e entrega ao controle,

controle : recebe a factory completa e usa o repositorio para salva no BD


]

Fluxo_Entidade_App_em_camadas :

entity : fabrique o objeto final desde o inicio,
aula: solid rocket https://youtu.be/vAV4Vy4jfkc?si=Wv1nlIwJbK1_z233


fluxo: [ Entidade, Repositorio_Acoes, UseCaseService, UseCaseController, UseCaseServerRota ]

conceitos:
Entidade : [
- declarar campos
- acao auxiliar prepara para acao instanciar ( recebe os campos individuais e devolve o obj fechado pra ser recebido por quem vai usa-lo)
- acao publica para se auto instanciar
- acoes publicas que computam campos
]

prototype : sempre adicionar metodos prototype EM CADA PARTE do obj, assim cada subObjeto composto tera seu proprio proto, disponiblizando suas especificas acoes pra quem precisar usar, assim evita o risco ds ficar proto descontinuado esquecido na entidade final.

Repositorio_Acoes : contrsto de metodos para persistir os dados no bd.

UseCaseService : metodo que aplica as regras necessarias pra validar o recebido da entidade e salva  persiste com a acao desejada  no repositorio.

UseCaseController : recebe a acao do servico e devolve para a rota que detina ao Consumidor.

Estrategias_Repositorios_Testaveis: [
em_Ling_que_recebe_param_por_default :
 utilizar no codigo real o repo inUso , onde no metodo real  recebe por default o repoInuso , e no test argumentamos o repoInMemoria,

]

transformar_campo : no ambiente que esta configurando a criacao do obj , vc ainda nao consegue transformar um campo porque ele ainda nao foi criado sua geracao, somente depois desta funcionalidade executada sim,
em classes no  controller ou em funcional depois de uma funcao prepare que gera o artefato vc consegue transformar as props.

Regras de Negocio
estrategia_definir_valor_de_um_campo_via_Client: apartir da entrada codigoPromocional do client fazer no codigoFonte uma RegraDeNegocio com condicional pra preencher o campo desejado.
Aplicabilidades : [ composicao de perfil, ]

Usar constantes e enums em vez de literais: o uso de constantes e enums em vez de literais ajuda a tornar o código mais legível e evita a necessidade de escrever o mesmo valor literal várias vezes no código.

Nao mandar o servico salvar no repo ... assim testar somente o servico onde estao as regras ao inves de controle.

Camadas_Entidade_Negocio : [ args, entity, service, save, controller, server ]


Top_Nomes: [

atual:[  Case , State,  ]
mudar: [ Transform, Define,  ]
arrumar : [ Resolver,  ]

]

Rotas Api
- toda informacao que precisa vir do Client sera uma rota
- para ser uma rota - no minimo precisa da estrutura da entidade - e dela uma funcao que recebera ou devolvera informacoes na rota para preenchimento do solicitante Client






