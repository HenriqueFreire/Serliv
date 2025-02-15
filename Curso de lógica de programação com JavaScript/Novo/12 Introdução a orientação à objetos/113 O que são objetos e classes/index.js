// introdução à orientação a objetos

class Produto {
  constructor(nome, preco, quantidade, desconto) {
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
    this.desconto = desconto
  }
}

const produto = new Produto('Camiseta', 20, 3, 0.1)