package com.site.b_ferramentas.para_metodos.controle_fluxo.if_else;

public class TomadaDecisaoIFELSE {
  public static void main(String[] args) {
    String request = "any";

    if(request == "any") {
      System.out.println("OK :: BLOCO_ACERTO...o fluxo veio para este bloco >>> o que fazer aqui dentro que vai ser a saida para o client.");
    } else {
      System.out.println("Ops :: BLOCO_ERRO...o fluxo veio para este bloco >>> o que fazer aqui dentro que vai ser a saida para o client.");
    }
  }

}
