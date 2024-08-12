import { PrecoViajemData } from "../../data/_index.ts";

export const DataPrecoViajemFactory = async () => {
  const dataPrecoViajemData = new PrecoViajemData()

  const publics = await dataPrecoViajemData
  return await publics
}