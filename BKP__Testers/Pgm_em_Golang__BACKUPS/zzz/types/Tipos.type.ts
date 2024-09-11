export interface Tipos {
  texto: Texto
}

interface Texto {
  aceita_somente_aspas_duplas: boolean
  template_literals_para_aceitar_interpolacao: string
  interpolar_texto_com_variavel: string
  interpolar_texto_com_variavel_objeto: string
}