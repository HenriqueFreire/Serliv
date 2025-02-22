class pilha {
  constructor() {
      this.dados = []
  }

  adicionar(dado) {
      this.dados.push(dado)
  }

  estaVazia() {
      return this.dados.length === 0
  }

  remover() {
      if (this.estaVazia()) {
          throw new Error("A pilha está vazia");
          
      }
      return this.dados.pop()
  }

  exibeTopo() {
      if (this.estaVazia()) {
          return null
      }
      return this.dados[this.dados.length - 1]
  }

  limpar() {
    this.dados.length = 0
  }
}

const minhaPilha = new pilha()
minhaPilha.adicionar(1)
minhaPilha.adicionar(2)
minhaPilha.adicionar(3)
console.log(minhaPilha.estaVazia()) // false
console.log(minhaPilha.exibeTopo()) // 3
minhaPilha.remover()
console.log(minhaPilha.exibeTopo()) // 2
minhaPilha.limpar()
console.log(minhaPilha.estaVazia()) // true

