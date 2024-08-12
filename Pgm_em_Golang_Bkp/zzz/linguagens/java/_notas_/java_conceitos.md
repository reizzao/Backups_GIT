
Biblioteca padrao : javax foi descontinuada era da classe Java EE agora os modulos tem que importar da mais noba libPadrao jakarta ex: jakarta.funcionalidade
obs: todas funcoes que tinha no javax agora é só mudar para jakarta.

PLATAFORMA : SPRING BOOT
doc : https://spring.io/projects/spring-boot

beneficios: [
a estrutura do obj é configurada tudo na classe da padrao linguagem, onde adicionando os @Anottations ja fazem os trabalhos de ligacoes com outros servicos sem precisar prepara-los.,


]

# Codigo Limpo
inferencia_de_tipo: add apartir do java 10, usar a keyword var, somente onde esta inicializando dando valor a uma variavel.
funcao_de_implementacao_interface_de_unico_metodo: Lambda , [tutorial: ](https://www.youtube.com/watch?v=lbCYLgoVpfQ&t=215s)

string_template: add apartir do java 21, tutoriais: [
  artigo: https://www.baeldung.com/java-21-string-templates,
  video: https://www.youtube.com/watch?v=_Daq1CrxgPU,
]

# Modulos_Anottations :

- para_Classe:

@Entity , vai ser a entidade objeto com campos ,

@Table(name= "tb_NomeTabela_Ex_User"), transforma-a em tabela no BD, age como um ORM mapeando o obj da entidade da linguagem em tabela no BD.

gerar_getters_setters : @Data // importar do Lombock

setar_args:  @AllArgsConstructor : gera construtor com os argumentos baseado nas props que a classe tem  // importar do Lombock.

construtor_vazio: @NoArgsConstructor : cria construtor vazio para facilitar instanciar sem argumentar // importar do Lombock,

para_classe_Controller: @RestController , digo que esta classe vai responder por requisicoes rest.

classe_servico para ser injetada no controller : @Service

@RequestMapping(value = "/user") qual sera o caminho endpoint que este controlador vai responder.

Para_classe_de_servico: @Service


- para_props:
Para id : @Id , mapeia o campo para chave primaria no BD
e @GeneratedValue(strategy = GenerationType.IDENTITY) vai gerar valor incremental para o id.

- para_parametro :
Rest:
@PathVariable para ligar o param recebido com o enviado via rest

@RequestBody quando for receber o corpo do  obj inteiro da requisicao
Autorizado a usar interface : @Autoriwed




- para_Metodos:

implementar ou sobreescrever metodos de interfaces : @Overrider
Metodos_Rest_Crud: mapeia para acoes no server rest @GetMapping, @PostMapping,

@PutMapping, @DeleteMapping

@Test , para metodos de classe de test.
- para_parametros:


LIBS
da_plataforma :
Iniciar servidor rest : starter web que dara reload no server a cada modificao no codigo,

Banco_de_dados: data_jpa,

Banco_de_dados_em_memoria: h2,

Testes : jnuit para testes unitarios,
- ja vem incluso o starter test conferir no pom.


TESTS
espero_que_esteja_preenchido_com_valor_valido: assert.NotNull

Ver no console as props do obj : https://stackoverflow.com/questions/22334496/how-to-get-data-from-properties-object/22334548#22334548

rotas : os @Rest Recurso , o server vai procurar esses @Rest Recurso para definir as rotas.


