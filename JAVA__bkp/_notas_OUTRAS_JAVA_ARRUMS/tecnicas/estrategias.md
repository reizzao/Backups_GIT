# Estrategias

### composicao_poo:
1. #estrategiaComposicaoPOO :: 1 classe delegadora (#controller) que só manda agrupa todos métodos que ela vai precisar...e várias classes (#servicos) para realmente fazer o que foi delegado nos métodos da delegadora. ",

1. "estrategiaComposicaoPOO implementação controller agrupa os cases e delega ao service Case específico....os services Cases dividir em cases."

1. "#estrategiaRepositorioCadaMetodo_UmaClasse , nomear Class Entidade Cases | Actions | Events::  implementação: 1- types dos métodos,  2 - implementar todos métodos em um unico repositório,  3 - uma classe serviço para cada método, 4 - uma classe delegadora  para usar cada serviço,  ou uma agrupadora  que usará todos serviços por métodos em única classe.",


# solid
1. tipar_args: "#tipar os #args de um #model que proverá variações em separado, assim fica definido o contrato há cumprir para somente argumentos.",

1. repositorio: "POO_Solid quem tem o items (todas instâncias gravadas da entidade é sempre o Repositório.)",

1. dependencias_classe: "sempre fazer as #dependencias serem propriedade da classe com #contrato type, de preferência via construtor.",

1. delegacoes: "#POO #dependencias precisa deletar quem resolve #injeta no contrutor classes que façam sob contrato, precisa de formato peça via param tipado nos métodos. ",

1. objetoSetEntidade: "#Entidade_Master_Com_Ramos fazer um objSet Master  para todos ramos se espelhar em, porque tem fonteMaster que será fonte para todos seus ramos então tem que buscar fontes do master...principalmente: [ persistência de dados, ].",

1. poloUnico: "#objeto master faça somente um para alimentar seus dependentes com #poloUnico",

"no #objMaster setar somente o que for valor de #production , o que for para Test ex: [ objMemory, objIntact ]  não colocar no objMaster busque nos Test direto do objeto fonte.",

"#Espelhamento de set entre setMaster e setRamoEspelhado :: posso dizer que o meu setRamoEspelhado é a #copiaImutavelSpreed do setMaster, assim quando quiser mudar algum valor, desencandeio a propAlvo e sobre escrevo somente nesta nova criação..",

"o set via param nas classes usar somente como formato, seu real valor em objeto será dado quando alguém usar o objeto da classe final controller.",

"o set tem que ser obrigatório via param assim posso tornar dinâmico o que será configurado memory ou producao, sem paramDefault para não correr o risco de ter um teste salvo onde seria só produção.
por isto o set é só formato para o uso.",

"para não ficar complexo , fazer um contrato para cada tipo de entidade que seria genérica nte de repositório. ",