import { IClienteFisicoModel } from "@clienteFisico";

class ModelPipeCF {
  public items = [this.todo1,]

  async perform(args: IClienteFisicoModel) {
    return await this.items.reduce(async (acc: any, fns: Function) => await fns(acc), args)
  }

  async todo1(args: IClienteFisicoModel) {
    return await args
  }

}

export const modelPipeCFMaker = new ModelPipeCF()