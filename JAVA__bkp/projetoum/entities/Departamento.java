package com.empresa.projetoum.entities;

import lombock.Data;

@Entity
@Table(name = "tab_departamento")
@AllArgsConstructor
@NoArgsConstructor

@Data;
public class Departamento {
  private Long id;
  private String nome;

  public Departamento() {}

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }


}