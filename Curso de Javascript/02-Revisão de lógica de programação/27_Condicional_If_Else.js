let idade = 21
let paisPresentes = false
let podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

console.log(`Pode viajar: ${podeViajar}`)

if (!comprouBilhete) {
  console.log('Não comprou o bilhete')
} else {
  if (idade >= 18) {
    console.log('Pode viajar')
  } else {
    console.log('Não pode viajar')
  }
}

let n1 = 6
let n2 = 8
let media = (n1 + n2) / 2
console.log(`media: ${media}`)

if (n1 === 0 || n2 === 0) {
  console.log('Reprovado')
} else if(media < 7){
  console.log('Reprovado, mas há como recuperar')
}else{
  console.log('Aprovado')
}