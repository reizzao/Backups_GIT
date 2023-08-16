import { IClienteModel, ClienteSeedsONE, ClienteSeedsTWO, IClientesFisicoRepository } from '@cliente'

export class ClienteRepositoryProduction implements IClientesFisicoRepository {

  public items: IClienteModel[] = [ClienteSeedsONE, ClienteSeedsTWO]

  async exist(args: IClienteModel) {
    return await this.items.some((i) => i?.ID === args?.ID)
  }

  async create(args: IClienteModel) {
    await this.items.push(args)
    return await args
  }

  async list() {
    return await this.items
  }

  async getbyID(ID: string) {
    const found = await this.items.find((i) => i.ID === ID)
    return await found!
  }

}

export const makeClienteRepositoryProduction = new ClienteRepositoryProduction


// import { ClienteRepositoryMemory } from "@cliente";


// TODO: POR ENQUANTO AINDA SEM PRDUCAO REAL O PRODUCTION SERA COPIA DO MEMORY -- FUNCIONA OK PARA TDD ASSIM:

// export const makeClienteRepositoryProduction = new ClienteRepositoryMemory

// new ClienteRepositoryProduction