class pilha {
  constructor(tamanhoLimite) {
    if (tamanhoLimite && typeof tamanhoLimite !== 'number' && tamanhoLimite <= 0) {
        throw new Error("O limite da pilha deve ser um número maior que zero")
      
    }  
      this.dados = []
      this.limite = tamanhoLimite || null
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

const minhaPilha = new pilha(5);

try {
    for (let i = 0; i < 10; i++) {
        minhaPilha.adicionar(i);
        console.log(`Adicionado: ${i}`);
    }
} catch (error) {
    console.error(error.message); // A pilha está cheia
}