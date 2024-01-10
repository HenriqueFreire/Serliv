let n = 'global'
function mostraN() {
  let n = 'local'
  console.log(n)
}

mostraN()
console.log(n)