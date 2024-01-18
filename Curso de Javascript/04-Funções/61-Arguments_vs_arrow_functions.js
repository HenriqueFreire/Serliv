const soma = () => { // arguments não funciona em arrow fnctions
  let total = 0

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total
}

console.log(soma(1, 23, 62, 78))