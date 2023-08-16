import { msg } from "@admSystem"

interface ISetMInMaxAgeCliente {
  minAge: number
  feedbackMin?: () => string
  maxAge: number
  feedbackMax?: () => string
}

const setMinMaxAgeCliente: ISetMInMaxAgeCliente = {
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
  setMinMaxAgeCliente,
  type ISetMInMaxAgeCliente,
}