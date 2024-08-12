
# PROJETO JAVA COM MAVEN
subir_server_e_estabilizar_novas_configs: `mvn spring-boot:run` comandos apartir da execucao da pasta .mvn -- refeito no bash como: `RunSpring`
subir_server_opcao_2: `./mvnw spring-boot:run` // se quiser subir direto no arquivo mvn
maven versao : `mvn --version` // mesmo colocando no pom a versao 3.1.0 deu certo mesmo o maven atual ser outro .
maven baixar dependendias do arquivo pom : `mvn install` // mesmo em projeto spring ou depois de adicionar novas deps.

verificar_depencias : `mvn verify`

---

# PROJETO JAVA TESTER SEM FRAMEWORKS
comandos : [
  rodar_arquivo_java: compila e roda: {
    exemplo: `cd "/home/rzj/x/_github_rz_/java/base/src/" && javac App.java && java App`,
    explicando: `cd "/CAMINHO ABSOLUTO ATE/PASTA" && javac ARQUIVO_ALVO_COM_EXTENSAO.java && java ARQUIVO_ALVO_SEM EXTENSAO`,
    detalhes: No botao run do vscode no arquivo desejado por default ele vai compilar para .class e vai mostrar no console o print mandado.
  }

  tem_que_ter_classe_main_no_arquivo_para_printar: sim
]
