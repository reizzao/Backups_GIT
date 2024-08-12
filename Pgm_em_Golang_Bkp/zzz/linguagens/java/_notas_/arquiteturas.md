# CRIACIONAL

### criar dados da entidade com record
diferencas para a entidade em record: na classe normal tenho que criar getters e setters, atribuir parametros do construtor as props da classe, criar metodo toString para visualizar no console o objeto criado -  no record nao preciso criar tudo isto e tenho esses recursos a disposicao de brinde!

# ARQUITETURA_DEV_SPRING

arquivo_de_entrada: na pasta principal deixa sem pasta como um index o arquivo principal de entrada da aplicacao com spring ex: NomeDoProjetoApplication. java

exemplos: [
  [tdd_spring_byDani](https://github.com/danileao/youtube-tdd-java/tree/v_result)

]

> INICIO
1_controller: { 1x1 para cada caso de uso 1 controller } : começar pelo @RestController do Spring Web - o server para respostas http vai procurar primeiramente essa anotacao e dela a @RequestMapping que vai dar o valor da url da resposta http

