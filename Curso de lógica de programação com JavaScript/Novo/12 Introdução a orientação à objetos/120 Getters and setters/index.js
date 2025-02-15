// getters e setters são métodos especiais que permitem a leitura e a escrita de atributos de um objeto

// getters são métodos que retornam o valor de um atributo de um objeto
// exemplo de getter

const sequencia = {
    _valor: 1, // convenção para dizer que é um atributo privado
    get valor() { return this._valor++ } // o get é uma função que é chamada quando tentamos acessar o valor de um atributo
}

console.log(sequencia.valor) // 1
console.log(sequencia.valor) // 2

// setters são métodos que alteram o valor de um atributo de um objeto
// exemplo de setter

const sequencia2 = {
    _valor: 1,
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia2.valor) // 1
sequencia2.valor = 1000