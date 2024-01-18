function somar() {
  let total = 0

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }

  return total
}

console.log(somar(1, 23, 62, 78))