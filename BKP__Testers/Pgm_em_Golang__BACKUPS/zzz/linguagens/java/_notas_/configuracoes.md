
versao_da_linguagem : ano: 2023, versao_LTS: 21,
[Doc_LTS_linguagem: java : ](https://www.oracle.com/br/java/technologies/java-se-support-roadmap.html)
[informacao_da_jdk_LTS_standard_Edition: ](https://www.oracle.com/java/technolog)

### BAIXAR JDK JAVA

### CONFIGURACOES BASH PARA JAVA
# VAR DE AMBIENTE JAVA #
# definir a variavel JAVA_HOME e add o bin/ do jdk em uso no PATH do linux
# obs: tem que remover as outras pastas java e openjdk que nao vai usar em : /usr/lib/jvm/ exemplo:
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH=$PATH:/usr/lib/jvm/java-21-openjdk-amd64/bin/

# CONFIGURAR NO SETTINGS DO VSCODE : obs: no momento nao precisa:
# "java.jdt.ls.java.home": "/usr/lib/jvm/java-21-openjdk-amd64", // CAMINHO VAR AMBIENTE JAVA

# MAVEN - dizer que Path recebe o Path : diretorio onde esta o binario mvn do maven
export PATH=$PATH:/home/rzj/maven/bin/

config_java_compilador_no_coderunner:
OBS: no momento nao precisa o vscode ja o tem por default: `"java": "cd $dir && javac $fileName && java $fileNameWithoutExt",`

### se for instalar manual :
[baixar_openjdk_para_linux: ](https://jdk.java.net/21/) // obs: no linux escolher: a versao do java desejado e para o sistema operacional: Linux/x64
> apos baixar descompacte e insira os arquivo em [/usr/lib/jvm/] e indique o caminho na var JAVA_HOME -- apontada no bash: .run_java personalizado
ver_versao_java: `java -version`


extensoes_java_spring_para_vscode:
para_o_java: Extension Pack for Java , da microsoft
para_spring_boot: Spring Boot Extension Pack da VMmwre.com: ja vem 3 extensoes nele o spring Initializr, Spring tools, Spring Dashboard


para_funcionar_lombok: extensao no vscode : Lombok Annotations Support for VS Code obs: #melhor usar o record do java ao inves do lombok,

criar_projeto:
spring_via_vscode_extensao_pacotes_spring : nao precisa fazer no site do initialzr , pela extensao entao:[ paleta de comandos, spring initialzr maven project, especificar a versao do spring, nomeInvertido com.empresa, nome artefato pacote principal, tipo arquivo build final : jar, versao do java, escolher dependencias plugins que vai usar, escolher a pasta workspace que ficar o projeto]
[tutorial: ](https://www.youtube.com/watch?v=mhLkn84qp6k&list=PLk4L0Yd2ljy4vVl1JsEEgA-zCtKjV6zxY&index=12)

adicionar_dependencPlugin_n_projeto: [caixa de comando, maven, add dependencia, nome da dependencia]


no pom.xml
adicionar_plugins:
plugin do maven para evitar conflito de versao do maven
`
// obs: na tag release insira a versao do java em uso no caso aqui esta para java 21.

<plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
                <configuration>
                    <release>21</release>
                    <compilerArgs>
                        <arg>--enable-preview</arg>
                    </compilerArgs>
                </configuration>
            </plugin>

            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.0.0-M4</version>
                <configuration>
                    <argLine>--enable-preview</argLine>
                </configuration>
            </plugin>
`

adicionar_dependencias:
`para funcionar dependencias lombok
<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>
`