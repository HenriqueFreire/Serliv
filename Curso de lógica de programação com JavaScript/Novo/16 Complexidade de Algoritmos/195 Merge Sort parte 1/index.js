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
    
  }
}

const numeros = [34, 7, 23, 32, 5, 62, 78, 43];
const sorter = new MergeSort(numeros);

console.log(`Números desordenados: ${numeros}`);
console.log(`Números ordenados: ${sorter.sort()}`);