# EXECUCAO DE ARQUIVOS


comando_executa_arquivo:
  1. java
    1. emArquivo_Java: java <enderecoArquivo.java>
    2. compilado_Para_Byte_ArquivoJava: javac <enderecoArquivo.java> vai criar o byte.class
    3. executar_Compilado: java <enderecoArquivo> rodar sem o .class


rodar_arquivo_no_console
  1. pelo terminal ir até pasta do arquivo e rodar o comando que executa o arquivo

# Compilacao Arquivos Linguagens
1. java
  2. compilar: até a versao 9 + ou - precisava dar um javac para compilar os arquivos .java para .class para poder executar ver no console agora 2023 não precisa mais.
  3. deixar_saida_terminal_limpa:
    1. na extensão Debugger for Java, ir em "settings de extensão" , clicando na engrenagem >> troca a opção IntegratedTerminal para InternalConsole. ou add no settings: "java.debug.settings.console": "internalConsole" , OBS: DESTA FORMA a saida será no Debugger_Console e não no terminal e derepente o terminal não abrirá aytomaticamente com o Run então abra manual o terminal e de o Run.