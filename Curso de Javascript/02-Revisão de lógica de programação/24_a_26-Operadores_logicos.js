// + = * / % **

let n1 = 3
let n2 = 2

// Operadores Aritméticos
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 / n2)
console.log(n1 * n2)
console.log(n1 % n2)
console.log(n1 ** n2)

// Operadores de Atribuição
let n3 = 25

// n3 = n3 + 2
n3 += 2
console.log(n3)

// Incremento e Decremento
let i = 0

++i
console.log(i)

i++
console.log(i)

--i
console.log(i)

i--
console.log(i)

// Operadores de Comparação

/*
 igualdade de valor ==
 igualdade de valor e tipo ===
 <, >, <=, >=
 != valores diferentes
 !== valores e tipos diferentes
*/

console.log(n1 != "10");
console.log(n1 !== "10");

// OPERADORES LÓGICOS
/*
Para uma pessoa viajar para o exterior:
- precisa ser maior de 18 anos
OU
Acompanhado com os pais
E
ter comprado bilhete
*/
let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`);


console.log(n1, n2, n3);
n1 = 6
n2 = 8
let media = (n1 + n2) / 2
console.log(`media: ${media}`);
console.log((3 * 2) ** 2)