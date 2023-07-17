// // deno-lint-ignore-file no-explicit-any no-unused-vars
// import { setsSystem } from "../../../_roots/sets/setSystem/setsSystem.ts"
// import { minString, setMinStringLocal } from "../../../minString/lib.ts"

// interface ObjSet {
//   setMin?: number,
//   feedback?: (minSet: number) => string,
// }

// const objSetFirstname: ObjSet = {
//   setMin: 2,

//   feedback(this: ObjSet, minSet: number = this?.setMin!) {
//     return `${setsSystem.msgExceptionLessThan()} ${minSet}`
//   },
// }

// const firstname = async (targetString: string, objSet: ObjSet = objSetFirstname) => {
//   try {
//     return await minString(targetString, objSet = setMinStringLocal)
//   }
//   catch (err: any) {
//     throw await err
//   }
// }

// export {
//   firstname,
//   objSetFirstname,
//   type ObjSet,
// }