let multi = 2
let n = 0

console.log('while')
while (n < 10) {
  console.log(`${multi} X ${n} = ${multi * n}`)
  n++
}

n = 0

console.log('')

console.log('do while')
do {
  if (n > 5) {
    break // interronpe o loop
  }
  console.log(`${multi} X ${n} = ${multi * n}`)
  n++
} while (n < 10);

console.log('')

console.log('for')
for (let i = 0; i < 10; i++) {
  if (i == 6) {
    continue // pula a iteração do loop
  }
  console.log(`${multi} X ${i} = ${multi * i}`)
}