function getRandomNunber(inicio = 0, fim = 10, integer = true) {
  let R = Math.random() * (fim - inicio) + inicio
  return integer ? parseInt(R) : R
}

console.log(getRandomNunber(1, 3, false))