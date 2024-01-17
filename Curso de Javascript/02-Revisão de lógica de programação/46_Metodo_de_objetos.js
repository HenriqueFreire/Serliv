const produto = {
  nome: 'caneta',
  preco: 2,
  qtd:100,
  comprar(n){
    if(n > this.qtd){
      return 'Quantidade não disponível'
    }
    this.qtd -= n
  }
}

produto.comprar(101)
console.log(produto)