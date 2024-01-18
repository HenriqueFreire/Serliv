(function mostraIMC(peso, altura) {
  if (typeof peso !== 'number' && typeof altura !== 'number') {
    return "Erro: São válidos somente números"
  }

  function calculaIMC() {
    return peso / altura ** 2
  }

  function catalogaIMC(){
    let imc = calculaIMC()
    imc = imc.toFixed(2)

    if (imc < 16.9) return `Seu IMC é de ${imc} e você está muito abaixo do peso.`
    if (imc < 18.5) return `Seu IMC é de ${imc} e você está abaixo do peso.`
    if (imc < 25) return `Seu IMC é de ${imc} e você está com o peso normal.`
    if (imc < 30) return `Seu IMC é de ${imc} e você está acima do peso.`
    if (imc < 35) return `Seu IMC é de ${imc} e você está com obesidade grau I.`
    if (imc < 40.1) return `Seu IMC é de ${imc} e você está com obesidade grau II.`
    if (imc > 40 ) return `Seu IMC é de ${imc} e você está com obesidade grau III.`  
  }

  console.log(catalogaIMC())
}

)(90, 1.79)