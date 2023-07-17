// // deno-lint-ignore-file no-explicit-any no-unused-vars
// import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
// import {
//   firstname,
//   objSetFirstname,
//   type ObjSet
// } from "./lib.ts";
// import { setsSystem } from "../../../_roots/deps/systemReplicas.local.deps.ts";

// const sut = firstname

// Deno.test({
//   name: "[fail] { test objSetFirstname - usado na configuracao da funcionalidade firstname como 2 o minSet } deve retornar na promessa de erro o {feedback correto} ao passar string menor que o setado no miniPontual deste test.",
//   only: false,
//   async fn() {
//     const input = 'f' // enviando propositalFail 1 caracter.
//     const miniPontual = objSetFirstname?.setMin! // configurado na producao como 2 o minSet letters

//     const objSetPontual: ObjSet = objSetFirstname

//     const res = async () => {
//       try {
//         return await sut(input, objSetPontual)
//       }
//       catch (err: any) {
//         return err.message
//       }
//     }

//     // console.log('>>>>>>>>>>>>>', await res())

//     expect(await res()).toEqual(objSetPontual?.feedback?.(miniPontual)!)
//   },
// });

// Deno.test({
//   name: "[fail] { test objSetFirstname - miniString setado como 2 } deve retornar na promessa de erro o {feedback correto} ao passar string menor que o setado no miniPontual deste test.",
//   only: false,
//   async fn() {
//     const input = 'f' // enviando propositalFail 1 caracter.
//     const miniPontual = 2

//     const objSetPontual: ObjSet = {
//       setMin: miniPontual,
//       feedback: (minSet: number = miniPontual) => {
//         return `Ops... as letras não podem ser menor que ${minSet}`
//       }
//     }

//     const res = async () => {
//       try {
//         return await sut(input, objSetPontual)
//       }
//       catch (err: any) {
//         return err.message
//       }
//     }

//     // console.log('>>>>>>>>>>>>>', await res())

//     expect(await res()).toEqual(objSetPontual?.feedback?.(miniPontual)!)
//   },
// });

// Deno.test({
//   name: "[fail] { test objSetFirstname - miniString setado como 5 } deve retornar na promessa de erro o {feedback correto} ao passar string menor que o setado no miniPontual deste test.",
//   only: false,
//   async fn() {
//     const input = 'aeio' // enviando propositalFail 4 caracteres.
//     const miniPontual = 5

//     const objSetPontual: ObjSet = {
//       setMin: miniPontual,
//       feedback: (minSet: number = miniPontual) => {
//         return `${setsSystem.msgExceptionLessThan()} ${minSet}`
//       }
//     }

//     const res = async () => {
//       try {
//         return await sut(input, objSetPontual)
//       }
//       catch (err: any) {
//         return err.message
//       }
//     }

//     console.log('>>>>>>>>>>>>>', await res())

//     // expect(await res()).toEqual(objSetPontual?.feedback?.(miniPontual)!)
//   },
// });

// Deno.test({
//   name: "[ok] deve retornar o mesmo input que entrou.",
//   only: false,
//   async fn() {
//     const inOneLetter = 'sucess'
//     const action: any = sut(inOneLetter).then((d: any) => d);
//     const assertion = inOneLetter
//     expect(await action).toEqual(assertion)
//   },

// });

// export default 1;