interface MsgSets {
  validatorsText: ValidatorsText
}

interface ValidatorsText {
  min: { exception: string }
}


const msgSets: MsgSets = {
  validatorsText: {
    min: {
      exception: 'Ops... as letras não podem ser menor que',
    }
  }
}

export {
  msgSets,
}