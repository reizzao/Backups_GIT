import { feedbacksMinString } from "./uniques/feedbacks/feedbacks.ts"
import { setMinText } from "./uniques/sets/sets.ts"

type IMiniStringFN = (d: string, minText?: number) => Promise<string>

/**
 * @description setar minimo em numero de string permitido.
 * @param param0  (s: string, minText: number) :: 1º target, 2º o numero que permitirá de string para o target
 * @returns string || exceção com feedback
 */

const minTextLocal = setMinText
const feedbackLocalFailMiniString = `${feedbacksMinString.feedLettersMinValid}${minTextLocal}`

const minString = async (targetString: string, minText = minTextLocal, feedback: string = feedbackLocalFailMiniString) => {
    if (targetString.length < minText) {
        throw new Error(feedback)
    }
    return await targetString
}

export {
    minString,
    type IMiniStringFN
}
