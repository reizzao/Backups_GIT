package com.site.a_valor.tipos;

public class TiposPrimitivos {
  // tipagem_estatica_fixa
  public static String textoSempreEntreAspasDuplas = "Reinaldo";
  public static byte byteAte127 = 127;
  public static short shortAte32767 = 128;
  public static int numeroInteiro = 10;
  public static long numeroGiganteLongo = 10_000_000L;
  public static float floatDecimalAntigo = (float) 10.11;
  public static double doubleDecimalIdeal = 20.20D;
  public static boolean verdadeiroTrue_Ou_Falso_False = true;
  public static char caractereUnicoEntreAspasSimples = 'M';


  public static void main(String[] args) {
    System.out.println("textoSempreEntreAspasDuplas: " + TiposPrimitivos.textoSempreEntreAspasDuplas);
    System.out.println("byteAte127: " + TiposPrimitivos.byteAte127);
    System.out.println("shortAte32767: " + TiposPrimitivos.shortAte32767);
    System.out.println("numeroInteiro: " + TiposPrimitivos.numeroInteiro);
    System.out.println("numeroGiganteLongo: " + TiposPrimitivos.numeroGiganteLongo);
    System.out.println("floatDecimalAntigo: " + TiposPrimitivos.floatDecimalAntigo);
    System.out.println("doubleDecimalIdeal: " + TiposPrimitivos.doubleDecimalIdeal);
    System.out.println("verdadeiroTrue_Ou_Falso_False: " + TiposPrimitivos.verdadeiroTrue_Ou_Falso_False);
    System.out.println("caractereUnicoEntreAspasSimples: " + TiposPrimitivos.caractereUnicoEntreAspasSimples);

  }

}

 // tipagem_dinamica_inferida : var : somente usar em metodos.
  // var dinamica = 110.11;
