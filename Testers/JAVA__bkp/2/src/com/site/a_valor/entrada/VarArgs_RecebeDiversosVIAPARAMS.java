package com.site.a_valor.entrada;

public class VarArgs_RecebeDiversosVIAPARAMS {
  public static int execute(int... numeros) {
    int soma = 0;
    for (int num : numeros) {
      soma += num;
    }
    return soma;
  }

  public static void main(String[] args) {
    System.out.println(
      "varArgs_SomandoDiversosParamsRecebidos: " +
      VarArgs_RecebeDiversosVIAPARAMS.execute(100, 200, 200)
      );
  }

}


