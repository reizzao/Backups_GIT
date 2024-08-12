package com.site.a_valor.tipos;

public class TiposPrimitivosClasseModerno {
  // texto
  public static String textoSempreEntreAspasDuplas = "Reinaldo";
  public static char caractereUnicoEntreAspasSimples = 'M';

  // numeros
  public static Byte byteAte127 = 127;
  public static Short shortAte32767 = 128;
  public static int numeroInteiro = 10;
  public static Long numeroGiganteLongo = 10_000_000L;
  public static Double doubleDecimalIdeal = 20.20D;
  public static Float floatDecimalAntigo = (float) 10.11;

  // logico
  public static Boolean verdadeiroTrue_Ou_Falso_False = true;

  public static void main(String[] args) {
    System.out.println("String textoSempreEntreAspasDuplas: " + TiposPrimitivosClasseModerno.textoSempreEntreAspasDuplas);
    System.out.println("char caractereUnicoEntreAspasSimples: " + TiposPrimitivosClasseModerno.caractereUnicoEntreAspasSimples);
    System.out.println("Byte byteAte127: " + TiposPrimitivosClasseModerno.byteAte127);
    System.out.println("Short shortAte32767: " + TiposPrimitivosClasseModerno.shortAte32767);
    System.out.println("int numeroInteiro: " + TiposPrimitivosClasseModerno.numeroInteiro);
    System.out.println("Long numeroGiganteLongo: " + TiposPrimitivosClasseModerno.numeroGiganteLongo);
    System.out.println("Float floatDecimalAntigo: " + TiposPrimitivosClasseModerno.floatDecimalAntigo);
    System.out.println("Double doubleDecimalIdeal: " + TiposPrimitivosClasseModerno.doubleDecimalIdeal);
    System.out.println("Boolean verdadeiroTrue_Ou_Falso_False: " + TiposPrimitivosClasseModerno.verdadeiroTrue_Ou_Falso_False);
  }

}
