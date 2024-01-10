let multi = 2
let n = 0
console.log('WHILE')

while (n < 10) {
  console.log(`${multi} X ${n} = ${multi * n}`)
  n++
}

n = 0

console.log('')

console.log('DO WHILE')
do { // "do while" garante que mesmo a expressão seja falsa, o bloco será executado ao menos uma vez
  console.log(`${multi} X ${n} = ${multi * n}`)
  n++
} while (n <10);

console.log('')

console.log('FOR')
for (let i = 0; i < 10; i++) {
  console.log(`${multi} X ${i} = ${multi * i}`)  
}