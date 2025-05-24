class QuickSort{
  constructor(array){
    this.array = array;
  }

  sort(){
    this.quickSort(0, this.array.length - 1);
    return this.array;
  }

  quickSort(start, end){
    if(start < end){
      let pivotIndex = this.partition(start, end);
      this.quickSort(start, pivotIndex - 1);
      this.quickSort(pivotIndex + 1, end);
    }
  }

  partition(start, end){
    const middleIndex = parseInt((start + end) / 2);
    const pivotValue = this.array[middleIndex];

    let i = start;
    let j = end;

    while(i <= j){
      while(this.array[i] < pivotValue){
        i++;
      }

      while(this.array[j] > pivotValue){
        j--;
      }
      
      if(i <= j){
        this.swap(i, j);
        i++;
        j--;
      }
    }
    return i - 1;
  }

  swap(i, j){
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }
}

const numeros = [34, 7, 23, 32, 5, 62, 78, 43];
const sorter = new QuickSort(numeros);

console.log(`Números desordenados: ${numeros}`);
console.log(`Números ordenados: ${sorter.sort()}`);
// QuickSort tem complexidade O(n log n) no pior caso, O(n log n) no melhor caso e O(n^2) no caso médio.
// O algoritmo QuickSort é um algoritmo de ordenação eficiente e amplamente utilizado.
// Ele é baseado na técnica de divisão e conquista, onde o array é dividido em subarrays menores e ordenados recursivamente.
// O algoritmo QuickSort é geralmente mais rápido do que outros algoritmos de ordenação, como o Bubble Sort.
// No entanto, ele pode ser menos eficiente em casos de arrays já ordenados ou quase ordenados.