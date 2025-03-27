// vetores vs listas ligadas

// vetores são mais rápidos para acessar elementos porque são armazenados em posições contíguas na memória
// porém são mais lentos para inserir ou remover elementos no meio, pois é necessário deslocar todos os elementos

// listas ligadas são mais lentas para acessar elementos, pois não são armazenados em posições contíguas na memória 
// porém são mais rápidas para inserir ou remover elementos no meio, pois não é necessário deslocar todos os elementos

// vetores são mais indicados quando a quantidade de elementos é conhecida e não vai mudar
// listas ligadas são mais indicadas quando a quantidade de elementos é desconhecida ou vai mudar

let lista = {
    valor: 1,
    proximo: {
        valor: 2,
        proximo: {
            valor: 3,
            proximo: null
        }
    }
}

console.log(lista.valor)
console.log(lista.proximo.valor)
console.log(lista.proximo.proximo.valor)

let arr = [1, 2, 3]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])