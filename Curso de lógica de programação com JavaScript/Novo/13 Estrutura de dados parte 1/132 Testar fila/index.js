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

// Testando a fila

let fila = new Fila()
console.log(fila.estaVazia()) // true
fila.enfileirar(1)
fila.enfileirar(2)

fila.imprimir() // 1, 2
console.log(fila.tamanho()) // 2
console.log(fila.estaVazia()) // false
console.log(fila.frente()) // 1
fila.desenfileirar()
fila.imprimir() // 2
console.log(fila.frente()) // 2
fila.desenfileirar()
fila.imprimir() // fila vazia
console.log(fila.estaVazia()) // true
console.log(fila.tamanho()) // 0