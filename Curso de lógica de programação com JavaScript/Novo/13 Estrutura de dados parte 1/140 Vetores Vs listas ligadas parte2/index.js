// exemplo de node em lista ligada

let no1 = {
    valor: 10,
    proximo: null
}

console.log(no1)

// head é o primeiro nó da lista
let head = no1

// adicionando um novo nó
let no2 = {
    valor: 20,
    proximo: null
}

// ligando o no1 ao no2
no1.proximo = no2

// também podemos adicionar um novo nó diretamente
no2.proximo = {
    valor: 30,
    proximo: null
}

// tail é o último nó da lista
let tail = no2

