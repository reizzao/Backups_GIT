import { msg } from "@admSystem"
import type { ISetMinString } from "@helpers"

interface ISetObjectValuesADM {
  two_minString: ISetMinString
  tree_minString: ISetMinString
  // -- posso scalar para a quantidade que desejar de minString há disponibilizar. --
}

const setObjectValuesScalarADM: ISetObjectValuesADM = {
  two_minString: {
    minLetters: 2,
    messageException: msg.exceptions.minText,
    feedbackException(this: ISetMinString) {
      return `${this.messageException} ${this.minLetters!}`
    },
  },
  tree_minString: {
    minLetters: 3,
    messageException: msg.exceptions.minText,
    feedbackException(this: ISetMinString) {
      return `${this.messageException} ${this.minLetters!}`
    },
  },
}

// -- #PoloUnico -> este set esta sendo usado pela entidade e tests --

export {
  setObjectValuesScalarADM,
}