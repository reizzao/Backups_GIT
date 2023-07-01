// deno-lint-ignore-file ban-types


// const pipeFNGeneric = <T>(a: T, array: Function[]): T =>
//   array.reduce((acc: T, fn: Function) => fn(acc), a);

const pipeFNGeneric = <T extends unknown>(a: T, array: Function[]): T =>
  array.reduce((acc: unknown, fn: Function) => fn(acc), a);

export { pipeFNGeneric }