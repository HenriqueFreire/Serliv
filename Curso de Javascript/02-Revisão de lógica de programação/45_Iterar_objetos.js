const pessoa = {
  nome: 'João',
  idade: 32,
  email: 'jao@email.com'
}

for(const prop in pessoa){
  console.log(prop, pessoa[prop])
}