// // todo: esta dando erro no uso em implementashow >> se uso aqui na lib o importMap
// // import { setsSystem } from "@systemReplicas"

// import { setsSystem } from "../_roots/sets/setSystem/setsSystem.ts"

// interface SetMinString {
//     minText: number
//     feedback: (minText: number) => string
// }

// const setMinStringLocal: SetMinString = {
//     minText: setsSystem.minString,

//     feedback(this: SetMinString, minText: number = this?.minText) {
//         return `${setsSystem.msgExceptionLessThan()} ${minText!}`
//     }
// }

// const minString = async (targetString: string, setMinString = setMinStringLocal) => {
//     if (targetString.length < setMinString.minText) {
//         throw new Error(setMinString?.feedback?.(setMinString.minText))
//     }
//     return await targetString
// }

// export {
//     minString,
//     setMinStringLocal,
//     type SetMinString
// }
