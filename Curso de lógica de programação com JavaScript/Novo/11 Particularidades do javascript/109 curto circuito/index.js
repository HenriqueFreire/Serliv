// curto circuito
// É uma técnica que consiste em interromper a execução de uma expressão booleana
// caso o resultado da mesma seja previsível
// Exemplo:

const a = 0
const b = null
const c = 'Teste'
console.log(a || b || c)

// Se a fosse true, o código pararia na primeira expressão
// Como a é false, o código segue para a segunda expressão
// Como b é null, o código segue para a terceira expressão
// Como c é 'Teste', o código para aqui

let n = 0
n = n || 10
console.log({ n })
// curto circuito também pode ser usado para atribuir valores padrão