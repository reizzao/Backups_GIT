// import { setsAdm } from "@sets"
import { msgSets } from "./messages.sets.ts"

interface ObjectValuesSets {
  firstnameSets: SetsFirstname
}

interface SetsFirstname {
  setsMinString: SetMinString
}

interface SetMinString {
  minLetters: number
  messageException: string
  feedbackException?: () => string
}

// todo nao to entendendo esta re-exportacao a de baixo que queria nao funciona.
const msgExceptionMinString = msgSets.validatorsText.min.exception
// const msgExceptionMinString = setsAdm.messages.validatorsText.min.exception

const objectsValuesSets: ObjectValuesSets = {
  firstnameSets: {
    setsMinString: {
      minLetters: 2,
      messageException: msgExceptionMinString,
      feedbackException(this: SetMinString) {
        return `${this.messageException} ${this.minLetters!}`
      }
    },
  }


}

// setMinString: {
//   minLetters: 2,
//   messageException: setsAdm.messages.validatorsText.min.exception,
//   feedbackException(this: SetMinString) {
//     return `${this.messageException} ${this.minLetters!}`
//   }
// },
// }

export { objectsValuesSets }