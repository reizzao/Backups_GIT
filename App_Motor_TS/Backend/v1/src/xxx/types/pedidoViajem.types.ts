export interface IPedidoViajem {
  info_passageiro: InfoPassageiro
  embarque: EmbarqueDesembarqueType
  desembarque: EmbarqueDesembarqueType
}

interface InfoPassageiro {
  id_passageiro: string
  nome: string
}

interface EmbarqueDesembarqueType {
  km: number
  tempo: number
  endereco: string
}

export interface CartViajemMotorista {
  precoViajemByMotorista: number
  pedidoViajem: IPedidoViajem
}