const numeros = [1, 3, 4, 1, 5, 3, 5, 8, 9]

const numerosUnicos = numeros.reduce(function(numerosUnicos, numeroAtual){
  if (numerosUnicos.indexOf(numeroAtual) < 0) {
    numerosUnicos.push(numeroAtual)
  }
  
  return numerosUnicos
}, [])