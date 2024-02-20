let arr = [4, 5, 10, 20, 35, 4, 5]

console.log(arr.indexOf(5))
console.log(arr.lastIndexOf(5))
console.log(arr.includes(4))
console.log(arr.find(function(element) {
  return element > 10
}))
console.log(arr.findIndex(function(element) {
  return element > 10
}))
