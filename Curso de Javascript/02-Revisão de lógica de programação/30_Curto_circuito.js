let n = 0
n = n || 10
console.log(n)

let isValid = false
isValid && console.log('é válido com &&') // executa quando isValid é true
isValid && console.log('é válido com ||') // executa quando isValid é false