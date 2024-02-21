const arr = [1, 2, 3]
const obj = {
  nome: 'Mariana',
  idade: '28',
  email: 'mariana@server.com'
}

for (let prop in obj) {
  console.log(prop)
  console.log(obj[prop])   
}

for (n of arr) {
  console.log(n)
}
