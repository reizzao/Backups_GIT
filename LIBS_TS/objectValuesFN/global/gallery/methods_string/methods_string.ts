// deno-lint-ignore-file no-unused-vars

export const methods_string = {
  isString(s: string) {
    const regex = /^[A-Za-z][\s+\w]+[A-Za-z]+$/;
    const res = regex.test(s);
    return res;
  },
};

/* TESTERS *************************************************** */
// tester_isString
function show_isString() {
  console.log(methods_string.isString("fooFOO")); // true
  console.log(methods_string.isString("123")); // false
  console.log(methods_string.isString("aA_#*$%@({")); // false
  console.log(methods_string.isString("a  bddd dddd")); // true - todo: pode ter 1 espaço entre o texto - ta aceitando variios ainda
}
// show_isString();
