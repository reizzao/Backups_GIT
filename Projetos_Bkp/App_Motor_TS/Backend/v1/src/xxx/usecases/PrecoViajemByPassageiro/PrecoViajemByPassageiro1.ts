import { IPedidoViajem } from "@types";
import { IPrecoViajemData } from "../../../data/_index.ts";


export class PrecoViajemByPassageiro {

  constructor(
    private readonly dataPrecoViajem: IPrecoViajemData,
  ) { }

  async execute(pedidoViajem: IPedidoViajem) {
    const totalMinutos = pedidoViajem.embarque.tempo + pedidoViajem.desembarque.tempo
    const precoViajemForTime = await totalMinutos * await this.dataPrecoViajem.valorMinutoViajem()
    return await precoViajemForTime
  }

}