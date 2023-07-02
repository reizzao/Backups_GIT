import { IIStartStringValidFN } from "./isStartStringValid/uniques/mod/mod.ts"
import { IMaxStringFN } from "./maxString/uniques/mod/mod.ts"
import { IMiniStringFN } from "./minString/uniques/mod/mod.ts"
import { minString } from "./minString/feature.ts"
import { maxString } from "./maxString/feature.ts"
import { isStartStringValid } from "./isStartStringValid/feature.ts"

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
