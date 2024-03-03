function formatarNome(nomeCompleto) {
  let nomesAsArray = nomeCompleto.split(' ')
  if (nomesAsArray.length === 1) {
    return nomeCompleto
  }

  let primeiroNome = nomesAsArray.shift()
  return nomesAsArray.join(' ') + ', ' + primeiroNome
}

console.log(formatarNome("Letícia")) 
console.log(formatarNome("Letícia França"))
console.log(formatarNome("Letícia Marília de França"))