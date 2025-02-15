class Produto {
  constructor(nome, quantidadeEstoque, preco) {
      this.nome = nome
      this.quantidadeEstoque =  (this.quantidadeEstoque < 0) ? 0 : quantidadeEstoque
      this.preco = preco
  }
  comprar(quantidade) {
    if (quantidade > this.quantidadeEstoque) {
          console.log('Quantidade indisponível em estoque')
          return null
      }
      this.quantidadeEstoque -= quantidade
      console.log(`A compra de ${quantidade} ${this.nome}(s) foi realizada com sucesso`)
  }
  adicionnarEstoque(quantidade) {
    if (quantidade < 0) {
          console.log('Quantidade inválida')
          return null
      }
      this.quantidadeEstoque += quantidade
  }
  verificarEstoque(nome) {
    console.log(`O estoque de ${this.nome} é de ${this.quantidadeEstoque}`)
  }
}

const caneta = new Produto('Caneta', 30, 1.99)

console.log(caneta)
caneta.comprar(10)
console.log(caneta)
caneta.adicionnarEstoque(10)
console.log(caneta)