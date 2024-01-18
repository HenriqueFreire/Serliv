const soma = function(){
  let total = 0

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total
}

console.log(soma(1, 23, 62, 78))
console.log(soma.name) // Aponta para o nome da função