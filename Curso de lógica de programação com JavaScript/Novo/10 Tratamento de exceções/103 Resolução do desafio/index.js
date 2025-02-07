function calcularAreadaCircunferencia(raio) {
  if (typeof raio !== 'number' || raio <= 0) {
    throw new Error('O raio deve ser um número maior que zero.')
  }else {
      return Math.PI * raio ** 2;
  }
}

try {
  console.log(calcularAreadaCircunferencia(2));
} catch (error) {
  console.log(error.message);
}