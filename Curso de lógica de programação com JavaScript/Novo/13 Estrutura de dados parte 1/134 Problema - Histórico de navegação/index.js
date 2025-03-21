class FilaCircular {
  constructor(tamanho) {
    this.tamanho = tamanho;
    this.fila = new Array(tamanho);
    this.frente = -1;
    this.tras = -1;
  }

  estaCheia() {
    return (this.tras + 1) % this.tamanho === this.frente;
  }

  estaVazia() {
    return this.frente === -1;
  }

  enfileirar(elemento) {
    if (this.estaCheia()) {
      this.frente = (this.frente + 1) % this.tamanho; // Move a frente para a próxima posição
    }
    this.tras = (this.tras + 1) % this.tamanho;
    this.fila[this.tras] = elemento;
    if (this.frente === -1) {
      this.frente = this.tras;
    }
  }

  desenfileirar() {
    if (this.estaVazia()) {
      return null;
    }
    const elemento = this.fila[this.frente];
    if (this.frente === this.tras) {
      this.frente = -1;
      this.tras = -1;
    } else {
      this.frente = (this.frente + 1) % this.tamanho;
    }
    return elemento;
  }

  obterFila() {
    if (this.estaVazia()) {
      return [];
    }
    let resultado = [];
    let i = this.frente;
    while (true) {
      resultado.push(this.fila[i]);
      if (i === this.tras) {
        break;
      }
      i = (i + 1) % this.tamanho;
    }
    return resultado;
  }
}

// Exemplo de uso:
const historico = new FilaCircular(5);
historico.enfileirar('Página 1');
historico.enfileirar('Página 2');
historico.enfileirar('Página 3');
historico.enfileirar('Página 4');
historico.enfileirar('Página 5');
historico.enfileirar('Página 6');
historico.enfileirar('Página 7');

console.log(historico.obterFila()); // ['Página 3', 'Página 4', 'Página 5', 'Página 6', 'Página 7']