function calcularIMC(peso, altura, callback) {
  if (peso === undefined || altura === undefined) {
    throw Error("need two parameters: weight and height")
}
let imc = peso / (altura * altura)
if (typeof callback === "function") {
    return callback(imc)
}
return imc
}

function classificaIMC(imc) {
if (imc <= 16.9) {
    return 'muito abaixo do peso';
} else if (imc <= 18.4) {
    return 'abaixo do peso';
} else if (imc <= 24.9) {
    return 'normal';
} else if (imc <= 29.9) {
    return 'acima do peso';
} else if (imc <= 34.9) {
    return 'obesidade 1';
} else if (imc <= 40) {
    return 'obesidade 2';
} else {
    return 'obesidade 3';
}
}

let imc = calcularIMC(80, 1.65)
let imc2 = calcularIMC(80, 1.65, classificaIMC)
console.log(imc)
console.log(imc2)