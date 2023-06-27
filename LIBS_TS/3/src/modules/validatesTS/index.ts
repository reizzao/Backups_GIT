import { minString, type IMiniStringFN } from "./minString/uniques/depsEntity/depsEntity.deps.ts"
import { maxString, type IMaxStringFN } from "./maxString/uniques/depsEntity/depsEntity.deps.ts"
import { isStartStringValid, type IIStartStringValidFN } from "./isStartStringValid/uniques/depsEntity/depsEntity.deps.ts"

interface ISuperValidateTS {
  minString: IMiniStringFN
  maxString: IMaxStringFN
  isStartStringValid: IIStartStringValidFN
}

const superValidateTS: ISuperValidateTS = {
  minString,
  maxString,
  isStartStringValid,
}

export {
  superValidateTS,
  type ISuperValidateTS
}
