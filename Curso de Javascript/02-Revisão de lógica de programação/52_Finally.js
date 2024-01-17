function soma(n1, n2) {
  if( typeof n1 != 'number' || typeof n2 != 'number'){
    throw new Error('Informe apenas valores numéricos')
  }
  return n1 + n2
}

let sum = null
try {
  sum = soma(3, 'a')
} catch (error) {
  console.log(error.message)
}finally{
  console.log(sum)
}