function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

const array = selectionSort([5, 3, 8, 4, 2]);
console.log(array); // saída: [2, 3, 4, 5, 8]
// Complexidade de tempo: O(n²)
// Complexidade de espaço: O(1)
// O algoritmo de ordenação por seleção (selection sort) tem complexidade de tempo O(n²) no pior caso,
// pois ele percorre o array várias vezes para encontrar o menor elemento e movê-lo para a posição correta.
// A complexidade de espaço é O(1) porque não utiliza espaço adicional proporcional ao tamanho do array.
// O selection sort é um algoritmo de ordenação in-place, o que significa que ele ordena os elementos
// no próprio array sem precisar de espaço extra significativo.
// No entanto, ele não é o algoritmo mais eficiente para grandes conjuntos de dados,
// pois sua complexidade de tempo quadrática o torna lento em comparação com algoritmos mais eficientes,
// como o quicksort ou o mergesort, que têm complexidade de tempo O(n log n) no pior caso.