import { SetViajemADM } from "@adm";

export interface IPrecoViajemData {
  minValorViajem: () => Promise<number>
  valorMinutoViajem: () => Promise<number>
}


export class PrecoViajemData implements IPrecoViajemData {

  async minValorViajem(): Promise<number> {
    return await SetViajemADM.setValorMinutoViajem()
  }

  async valorMinutoViajem(): Promise<number> {
    return await SetViajemADM.setMinViajem()
  }

}