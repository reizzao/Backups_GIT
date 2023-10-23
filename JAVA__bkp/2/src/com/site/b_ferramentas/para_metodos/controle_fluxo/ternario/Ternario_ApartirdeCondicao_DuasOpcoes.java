package com.site.b_ferramentas.para_metodos.controle_fluxo.ternario;

public class Ternario_ApartirdeCondicao_DuasOpcoes {
  public static void main(String[] args) {
    String input = "verdadeiro2";

    String result = (input == "verdadeiro") ? "OK..o fluxo veio para o VERDADEIRO." : "OPS..o fluxo veio FALSO";

    System.out.println(result);
  }
}