// exemplo de implementação de fila 

class Fila {
  constructor() {
    this.itens = []
  }
  // adiciona um novo item na fila
  enfileirar(elemento) {
    this.itens.push(elemento)
  }

  // remove um item da fila
  desenfileirar() {
    return this.itens.shift()
  }
  // retorna o primeiro item da fila
  frente() {
    return this.itens[0]
  }

  // retorna se a fila está vazia
  estaVazia() {
    return this.itens.length === 0
  }

  // retorna o tamanho da fila
  tamanho() {
    return this.itens.length
  }

  // imprime a fila
  imprimir() {
    console.log(this.itens.toString())
  }
}