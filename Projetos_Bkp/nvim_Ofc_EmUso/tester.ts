
function MyFunctionFoo() {
  return `Ola mundo!`
}

function two() {
  return `Ola mundo funcionando auto pairs`
}

class MyClasseFoo {
  constructor(private a: string, private b: number) {}

  metodo() {
    return `${this.a} e ${this.b}`
  }
}

interface Foo {
  campo1: string
  campo2: boolean
}

type TipoFoo = { campo3: Foo, campo4: number }
const objFoo: TipoFoo = { campo3: 'foo', campo4: 10 } 

const falso = false
const verdade = true

const fooConstante = 'bar'

console.log(MyFunctionFoo())
console.log(objFoo)
console.log(two())

const instancia1 = new MyClasseFoo('oi', 10)
console.log(instancia1)
