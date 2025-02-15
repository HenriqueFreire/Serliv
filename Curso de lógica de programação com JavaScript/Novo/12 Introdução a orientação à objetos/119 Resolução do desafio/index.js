class Contador{
  #contagem
  constructor(){
    this.contagem = 0
  }

  incrementar(){
    this.#contagem++
  }

  decrementar(){
    this.#contagem--
  }

  valorAtual(){
    return this.#contagem
  }
}

const contador = new Contador()
console.log(contador.valorAtual())
contador.incrementar()
console.log(contador.valorAtual())