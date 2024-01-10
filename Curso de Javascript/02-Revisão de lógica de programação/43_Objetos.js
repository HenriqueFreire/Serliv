const pessoa = new Object()
pessoa.nome = 'Henrique'
pessoa.idade = 29
console.log(pessoa)

let prop = 'nome'

console.log(pessoa[prop])
console.log(pessoa['idade'])

const pessoa2 = {
  nome: 'Camila',
  idade: 28
}