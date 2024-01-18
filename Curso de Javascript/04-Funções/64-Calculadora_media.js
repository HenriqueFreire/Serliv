function calculaMedia() {
  let totalDosParametros = 0

  for (let i = 0; i < arguments.length; i++) {
    totalDosParametros += arguments[i];
  }

  if (arguments.lenght === 0) {
    return 0
  }

  if (isNaN(totalDosParametros)) {
    return 'Erro: Todos os parametros precisam ser números'
  }
  return totalDosParametros / arguments.length
}

console.log(calculaMedia(5, 5, 9))