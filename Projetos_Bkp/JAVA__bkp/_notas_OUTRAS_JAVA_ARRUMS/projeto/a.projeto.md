# Projeto

*1. projeto com maven no vscode :*
  1. create java project / maven / no Architype sem tipo de arquitetura
  2. inserir no .vscode do projeto o endereço do worskspace/principalSRC
  3. EX: em .vscode/settings.json add >>> "java.project.sourcePaths": [ "basejava/src/" ]
  4. pacotes modularizar novas pastasDeCategoria dentro da java/com/site dentro desta site coloque as novas pastas assim não precisa colocar no .vscode os caminhos d enovos pacotes e fica modulos na sequencia partindo do mesmo package com.nomeSITE/ <novaCATEGORIA>

# MODULARIZAÇÃO_PACOTES
1. Pacotes:
  1. modularizacao: pacotes, namespace , é uma categoria, conceito para se criar um pense: É UM NOVO ASSUNTO.
  2. Pacotes são criados dentro da pasta src/ , obs: manter a app/ no mesmo nivel ou superior a todos outros pacotes. , da app sairá o main principal para subir o programa.


# COMPILAÇÃO
1. Compilação
  1. autoCompilacao: com o javac é feita a auto compilação
  2. combinacao_Pastas_Compiladas_Com_as_do_Projeto: a cada compilação ele ajusta a combinação de Pastas do projeto com as Compiladas na pasta bin/ , então se deletar alguma pasta ele atualiza com as compiladas.