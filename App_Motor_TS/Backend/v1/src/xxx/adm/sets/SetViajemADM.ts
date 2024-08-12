export interface ISetViajemADM {
  setMinViajem: (minimoCorrida: number) => Promise<number>
  setValorMinutoViajem: (valorMinuto: number) => Promise<number>
}


export class SetViajemADM
// implements ISetViajemADM
{

  static async setMinViajem(minimoCorrida: number = 8.00) {
    return await minimoCorrida
  }

  static async setValorMinutoViajem(valorMinuto: number = 1.00) {
    return await valorMinuto
  }

}