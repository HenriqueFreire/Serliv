function somarOsQuadrados(arr) {
  let lista = Array.from(arr);

  if (lista.length === 0) {
    return 0;
  }

  const primeiroElemento = lista.shift();
  return primeiroElemento * primeiroElemento + somarOsQuadrados(lista);
}

const numeros = [3, 4, 1, 3, 0];
console.log(`Soma dos quadrados: ${somarOsQuadrados(numeros)}`);
console.log(numeros);