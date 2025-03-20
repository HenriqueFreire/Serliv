// Fila com limite

class FilaComLimite {
  constructor(tamanho) {
    this.tamanho = (tamanho && tamanho > 0) ? tamanho : tamanho = null;
    this.fila = [];
  }

  enfileirar(valor) {
    if( typeof this.tamanho === 'number' && this.fila.length === this.tamanho) {
      console.log('A fila está cheia');
      return;
    }

    this.fila.push(valor);
  }

  desenfileirar() {
    if(this.fila.length === 0) {
      console.log('A fila está vazia');
      return;
    }

    this.fila.shift();
  }

  mostrar() {
    console.log(this.fila);
  }
}

const fila = new FilaComLimite(3);
fila.enfileirar(1);
fila.enfileirar(2);
fila.enfileirar(3);
fila.enfileirar(4);
fila.mostrar();
fila.desenfileirar();
fila.mostrar();