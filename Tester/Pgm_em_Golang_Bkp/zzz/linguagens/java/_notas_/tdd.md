# Tests com Spring

tdd com spring :
[doc: ](https://spring.io/guides/gs/testing-web)

conceito: apartir de 2024 nao precisa instalar o mockito, junit, para usar os tests no spring, eles ja vem no pacotao spring-boot-starter-test

as anotacoes personal de test tem que ficar no diretorio test/ e dentro da pasta de projeto_principal soltos.

configuracao_vscode: [rodar cada suite de test , inserir no settings.json do projeto: ](https://github.com/georgewfraser/java-language-server/blob/master/.vscode/settings.json)

comando_rodar_todos_tests_spring: mvn test

comando_rodar_suite_separada_no_vscode: mvn test -Dtest=PROJETO.CLASSE_HA_TESTAR#METODO_DO_TEST
exemplo:  mvn test -Dtest=com.empresa.projetoum.ProjetoumApplicationTests#contextLoads