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
