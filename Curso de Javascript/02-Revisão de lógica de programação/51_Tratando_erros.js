function soma(n1, n2) {
  if (typeof n1 != 'number' || typeof n2 != 'number') {
    throw new Error('Informe apenas números')
  }
  return n1 + n2
}

let sum = null

try {
  sum = soma(3, 'a')
  console.log(sum)
} catch (error) {
  console.log(error.message)
}