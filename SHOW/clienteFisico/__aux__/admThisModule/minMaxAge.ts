import { msg } from "@admSystem"

interface ISetMInMaxAgeCF {
  minAge: number
  feedbackMin?: () => string
  maxAge: number
  feedbackMax?: () => string
}

const setMinMaxAgeCF: ISetMInMaxAgeCF = {
  minAge: 18,
  feedbackMin() {
    return `${msg.exceptions.permissionMin} ${this.minAge}`
  },

  maxAge: 120,
  feedbackMax() {
    return `${msg.exceptions.permissionMax} ${this.maxAge}`
  },

}

export {
  setMinMaxAgeCF,
  type ISetMInMaxAgeCF,
}