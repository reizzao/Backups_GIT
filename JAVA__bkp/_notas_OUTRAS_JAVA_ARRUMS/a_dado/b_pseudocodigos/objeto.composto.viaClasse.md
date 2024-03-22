# Objeto Composto via Classe

classe ModeloDadosCompostos
  // *caracteristicas_props*
  #TEM : <texto | numero>
  #PODE_ESTAR : <logico > [
  #ELE_É:  <enum>
  #RESULTADO_COMPUTADO_ELE_TEM: <texto | numero>

  // metodo_de_construcao_ao_executar_nova_instancia
  +construtor( setClient, setClient, setClient )
  +setTem (setClient)
  +define_PodeEstar_PADRAO ()

  // *metodos_acessores_de_membros*
  // Props que não deseja visualizar nem alterar o valor fora NÃO fazer Getter_Setters.

  +getters_TEM() : <aplicabilidade quando deseja que possam visualizar fora com alguma condição>
  +setters_TEM() : <aplicabilidade quando desejar que alterem o valor fora>

  +define_Pode_Estar_INVERSO_DO_PADRAO ()
  // convencao_nomen: em getters Pode_Estar : [  is, has, hasten ]

  +aux_Status_Instancia ()
  Escreva ( cada campo ) // pode tentar em loop ou manual

---

# Servico : estrutura_delegada_para_encapsulamento
1. *estrutura_de_implementacoes*
  1. executa a ModeloDados gera novas instancias
  2. utiliza operacoes
  3. encapsula a implementação para uso de uma constroladora.

