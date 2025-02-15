class Produto {
  #estoque  
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = 0;
  }

  comprar(quantidade) {
    if (quantidade < this.#estoque) {
      this.#removerDoEstoque(quantidade)
      console.log(`Você comprou ${quantidade} ${this.nome}s. Total: R$${(quantidade * this.preco).toFixed(2)}`)
      console.log(`Estoque: ${this.#estoque}`)
    }
    else {
      console.log('Quantidade solicitada fora de estoque')
    }
  }

  #removerDoEstoque(quantidade) {
    this.#estoque -= quantidade
  }

  adicionarAoEstoque(quantidade) {
    this.#estoque += quantidade
  }
}

const caneta = new Produto('Caneta', 1.20)
caneta.adicionarAoEstoque(100)
caneta.comprar(2)