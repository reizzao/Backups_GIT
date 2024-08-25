
# MAVEN
gerenciador_de_dependencias:
maven :
[doc:](https://maven.apache.org/)
pasta_provedora_de_comandos: /.mvn
ver_versao: mvn -version


repositorio_add_manualmente_deps: https://mvnrepository.com/

---
comandos_maven: [
Limpando os arquivos de build gerado no projeto : `mvn clean`
Instalando as dependências listadas no pom.xml : `mvn install`
Compila o projeto : `mvn compile`
Empacotando o projeto, esse comando gera todos os artefatos de build. : `mvn package`
Executando todos tests : `mvn test`
Executando test especifico : `mvn test -Dtest="NomeDaSuaClasse"`

O Maven também lhe permite verificar as dependências do seu projeto, assim como realizar um scan para procurar por dependências especificas, lembrando que não é porque vocẽ não instalou uma dependência, que ela não esteja instalada, bibliotecas podem ter outras bibliotecas como dependências, então mesmo que não tenha instalado pode ser que ela esteja no seu projeto.

Verificando as dependências do projeto. : `mvn verify`

Escaneando o projeto para verificar o uso de uma biblioteca especifica.
 `mvn dependency:tree -Dverbose -Dincludes="<nome-da-biblioteca>"`

]

---
principais_dependencias_iniciar_api : [
  Spring Web : para usar os metodos e anotacoes Rest
  Spring Boot Devtools : spring-boot-devtools
  Spring Data JPA : para persistir dados SQL com Spring Data e hibernate
  H2 Database : para criar banco de dados em memoria para testes
  Lombok : para anotacoes de classes get e set automeaticos , instanciar configurar construtor auxiliar vazio.
]

---
