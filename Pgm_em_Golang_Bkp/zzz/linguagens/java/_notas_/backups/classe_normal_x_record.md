# CRIAR CAMPOS DA ENTIDADE

// CAMPOS DA ENTIDADE : VIA CLASSE NORMAL
public class EntidadeUm  {
  private String nome;
  private String sobrenome;
  public ParteA parteA = new ParteA(null, null);

  public EntidadeUm() {}
  public EntidadeUm(String nome, String sobrenome, ParteA parteA) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.parteA = parteA;
  }

  public String getNome() {
    return this.nome;
  }
  public String getSobrenome() {
    return this.sobrenome;
  }
  public ParteA getParteA() {
    return this.parteA;
  }


  public static EntidadeUm instance(String nome, String sobrenome, ParteA parteA) {
    return new EntidadeUm(nome, sobrenome, parteA);
  }

}

// CAMPOS DA ENTIDADE : VIA RECORD

/*
 * diferencas para a entidade em record: na classe normal tenho que criar getters e setters, atribuir parametros do construtor as props da classe, criar metodo toString para visualizar no console o objeto criado -  no record nao preciso criar tudo isto e tenho esses recursos a disposicao de brinde!
*/

---

// CLASSE EM RECORD

public record EntidadeUm (String nome, String sobrenome, ParteA parteA) {

  public static EntidadeUm instance(String nome, String sobrenome, ParteA parteA) {
    return new EntidadeUm(nome, sobrenome, parteA);
  }

}

/*
   * CONTEM :
   * composicao: contem composicao de outro objeto, para ter campo de obj aninhado.
   * autoIntancia : contem metodo estatico que o instancia, para evitar propagacao de muitos new pelo codigo - quem precisar usar esta classe nao precisa instancia-la.
  */