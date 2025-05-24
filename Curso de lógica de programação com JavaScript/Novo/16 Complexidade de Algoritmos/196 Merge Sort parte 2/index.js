class MergeSort{
  constructor(array){
    this.array = array;
  }

  sort(){
    this.array = this.mergeSort(this.array);
    return this.array;
  }

  mergeSort(array){
    if(array.length <= 1){
      return array;
    }

    const middle = parseInt(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge(left, right){
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
      if(left[leftIndex] < right[rightIndex]){
        result.push(left[leftIndex]);
        leftIndex++;
      }else{
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    
    while(leftIndex < left.length){
      result.push(left[leftIndex]);
      leftIndex++;
    }

    while(rightIndex < right.length){
      result.push(right[rightIndex]);
      rightIndex++;
    }

    return result;
  }
}

const numeros = [34, 7, 23, 32, 5, 62, 78, 43];
const sorter = new MergeSort(numeros);

console.log(`Números desordenados: ${numeros}`);
console.log(`Números ordenados: ${sorter.sort()}`);
// Merge Sort é um algoritmo de ordenação eficiente que utiliza a técnica de divisão e conquista. 
// Ele divide o array em subarrays menores, ordena esses subarrays e depois os combina para formar o array ordenado final. 
// A complexidade de tempo do Merge Sort é O(n log n) no pior caso, melhor caso e caso médio, 
// tornando-o um dos algoritmos de ordenação mais eficientes disponíveis.