/*
Tipos de daods primitivos

string = texto
number = números inteiros e decimais
boolean = verdadeiro ou false
*/

let numberExample1 = 5.5
let numberExample2 = 3
let stringExample1 = 'texto'
let stringExample2 = "texto"
let stringExample3 = `texto`
let booleanExample1 = true
let booleanExample2 = false

// concatenação
stringExample1 += 'mais' + numberExample1

// template literals
stringExample2 += `mais ${numberExample2}`

console.log(stringExample1)
console.log(stringExample2)

// verificar o tipo de dados
console.log(typeof numberExample2)
console.log(typeof stringExample2)
console.log(typeof booleanExample2)