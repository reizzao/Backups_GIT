
# TECNICAS -> CODIGO LIMPO : BOM

1. bom:
    1. bom: ter coesão no artefato para fazer somente uma coisa especifica e relacionadas a si ex: podeSeFazEspecificamenteSomente: [ falarsomenteDeSi_NaoOutrasEntidades, representar_OMundoReal_NoCodigo_CriarPropriedades, mostrar,  ].
    2. bom: proteger entrada de dados com private ou protected assim evita entrar dados sujos invalidos.

    3. Uma classe/em_arquivo cria entidade propriedades, outra classe/em_arquivo test invoca e executa #importante essa execução ocorre sempre dentro do metodo principal main().
    4. chegagens:
        1. comparacao_entre_valores:
            1. mesmoValor: ""não compare um valor consigo mesmo. Se você precisar de um comportamento constante, use os literais booleanos true e false, em vez de codificá-los obscuramente como ou similares. ex: 1 == 1 prefira : true == false",


2. refactor_refatore:
    1. metodos que usam um valor fixoMarretado no codigo, pode #refatorar e fazer deste valorFixo uma propriedade protegida com valor default para uso na classe.


1. ruim
    1. ruim: [artefato não ter coesao, fazer mais que uma tarefa, deixar campos publicos vulneraveis a entrada de dados sujos, ]



