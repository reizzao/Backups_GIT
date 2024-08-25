import { PrecoViajemByPassageiro } from "@actions";
import { DataPrecoViajemFactory } from "../../../data/_index.ts";


export const PrecoViajembyPassageiroFactory = async () => {
  const dataPrecoViajem = await DataPrecoViajemFactory()

  const actionPrecoViajemByPassageiro = new PrecoViajemByPassageiro(dataPrecoViajem)

  const publics = await actionPrecoViajemByPassageiro
  return await publics
}