const arr = [1, 5, 10, 'olá', true]

let sohNumeros = arr.every(function(el) {
  return typeof el === 'number'
})
console.log(sohNumeros)

let soNumeros = arr.some(function(el) {
  return typeof el === 'number'
})
console.log(soNumeros)

const arrNumber = arr.filter(function (element, index, _arr) {
  return typeof element === 'number'
})
console.log(arrNumber)

arr.forEach(function(element, index, _arr) {
  console.log(index, element)
});

let arr2 = arrNumber.map(function(element, index, _arr) {
  return element ** 2
})

console.log(arrNumber)
console.log(arr2)