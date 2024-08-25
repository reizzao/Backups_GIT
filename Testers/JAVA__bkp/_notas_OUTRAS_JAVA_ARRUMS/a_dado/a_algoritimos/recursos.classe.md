# Recursos Classe

# MODELADORAS
1. classe_classificadora :
  2. representacoes
    1. representa_os_futuros_objetos_THIS: o #this é o proprio objeto em que ele esta inserido, por isto com ele somente dentro de metodo temos acesso as props do objeto...vc pode conferir dentro do metodo dar um console.log(this) vai retornar o objeto.

    2. representa_a_ClassePAI: props e metodos staticos.


1. poloUnico:
  1. classe_e_Membros_como_PoloUnico: não permitir extensão: quando vc permite extensaoHeranca vc permite polimorfismo nós métodos, então para evitar este clone, em Java add keyword final na declaração da classe, ex: classe String não permite uma extensão.
    1.aplicabilidade: classesObjetoUnico, obs: se marcar como poloUnico a classe também já protege os métodos, ou se preferir pode deixar livre a classe e demarcar como poloaUnico somente alguns membros.

# Relacionamento_de_Entidades
agregacaoDeClassesPARTICIPA: um ModeloAutor PARTICIPA? do que <a resposta é o nome da classe que vai usa-lo , ex: Lutador participa de Luta Luta então será o nome da classe PARTICIPA> computacionalmente assim estará usando como valor um valor abstrato de dado ou seja atribuindo a uma variável um objeto de outra classe.