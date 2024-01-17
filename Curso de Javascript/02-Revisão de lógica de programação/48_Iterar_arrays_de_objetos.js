const pessoas = [
  {
    nome: 'João',
    idade: 32,
    email: 'jao@email.com'
  },
  {
    nome: 'José',
    idade: 45,
    email: 'je@email.com'
  },
  {
    nome: 'Pedro',
    idade: 39,
    email: 'pedro@email.com'
  }
]

for(let i = 0; i < pessoas.length; i++){
  let msg = ''

  for (const prop in pessoas[i]){
    msg += ` - ${prop}: ${pessoas[i][prop]}`
  }

  console.log(msg)
  msg = ''
}