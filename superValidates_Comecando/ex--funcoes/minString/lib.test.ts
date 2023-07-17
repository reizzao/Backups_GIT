// // deno-lint-ignore-file no-explicit-any
// import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
// import {
// 	minString,
// 	type SetMinString,
// } from "@miniString";
// import { fakesSystem, setsSystem } from "@systemReplicas";

// const sut = minString
// const stubSetsSystem = setsSystem

// Deno.test({
// 	name: "[ FAIL { minText : 2 } ] deve retornar feedback correto no caso de receber input menor que o setado.",
// 	only: false,
// 	async fn() {
// 		const target = fakesSystem.caracteres.one

// 		const pontualMinTextNumber = fakesSystem.numbers.two

// 		const objSetMinStringTester: SetMinString = {
// 			minText: pontualMinTextNumber,

// 			feedback(this: SetMinString, minText: number = this?.minText) {
// 				return `Ops... as letras não podem ser menor que ${minText!}`
// 			},
// 		}

// 		const res: any = sut(target, objSetMinStringTester).catch((d: any) => d.message)
// 		console.log('>>>>>>>>>> ', await res)
// 		expect(await res).toEqual(objSetMinStringTester.feedback(fakesSystem.numbers.two))
// 	},
// });

// Deno.test({
// 	name: "[ FAIL { minText : 5 } ] deve retornar feedback correto no caso de receber input menor que o setado.",
// 	only: false,
// 	async fn() {
// 		const target = fakesSystem.caracteres.one

// 		const pontualMinTextNumber = fakesSystem.numbers.five

// 		const objSetMinStringTester: SetMinString = {
// 			minText: pontualMinTextNumber,

// 			feedback(this: SetMinString, minText: number = this?.minText) {
// 				return `${stubSetsSystem.msgExceptionLessThan()} ${minText!}`
// 			},
// 		}

// 		const res: any = sut(target, objSetMinStringTester).catch((d: any) => d.message)
// 		console.log('>>>>>>>>>> ', await res)
// 		expect(await res).toEqual(objSetMinStringTester.feedback(fakesSystem.numbers.five))
// 	},
// });

// export default 1;