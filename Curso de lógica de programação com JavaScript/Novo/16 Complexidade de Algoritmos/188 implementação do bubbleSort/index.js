
function bubbleSort(arr) {
  let n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const array = bubbleSort([5, 3, 8, 4, 2]);
console.log(array); // [2, 3, 4, 5, 8]
// O algoritmo Bubble Sort tem complexidade O(n^2) no pior caso e no caso médio, e O(n) no melhor caso (quando o array já está ordenado).
// No entanto, o Bubble Sort não é eficiente para grandes conjuntos de dados e não é recomendado para uso em produção.
// Existem algoritmos de ordenação mais eficientes, como Quick Sort, Merge Sort e Heap Sort, que têm complexidade O(n log n) no pior caso.
// O Bubble Sort é um algoritmo de ordenação simples, mas ineficiente para grandes conjuntos de dados.