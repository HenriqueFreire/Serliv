const teste = (function (n){
  return function testeInferno() {
    console.log('testeInterno', ++n)
    return 'retorno de testeInterno' + n
  }
})(10)

let str = teste()
teste()
teste()
let str2 = teste()
console.log(str)
console.log(str2)