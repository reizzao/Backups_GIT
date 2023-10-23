package com.site.b_ferramentas.para_estruturas_de_dados.para_array_string_object.repeticao.loop_for_in_array;

public class For_In_Array {
  public static int[] array = { 10, 20, 100 };

  public static void loopForInNumeros() {
    int soma = 0;
    for(int posicao=0; posicao < For_In_Array.array.length; posicao++) {
      soma += array[posicao];
    }
    String resultado = "O resultado da soma no loopFor é: " + soma;
    System.out.println(resultado);
  }

  public static void main(String[] args) {
    For_In_Array.loopForInNumeros();
  }
}
