# EstruturaDados : Caneta

classe Caneta
  publico modelo: Caractere
  privado ponta: Real

metodo construtor( m: caractere, c: Caractere, p: Real )
  setModelo(m)
  instancia.setCor(c)
  instancia.setPonta(p)
  instancia.tampar()
  destampar()

  publico getModelo() retorne modelo
  publico getCor() retorne cor
  publico getPonta() retorne ponta

  publico setCor(c: caractere) cor = c
  publico setPonta(p: Real) ponta = p

  Metodo statusObjeto()
    Escreva ("Modelo: " + instancia.modelo)

//  --- Servico ---

 c1 = nova Caneta ("BIC", "Azul", 0.5,)

Escreva( c1.getModelo())
Escreva( c1.getPonta())