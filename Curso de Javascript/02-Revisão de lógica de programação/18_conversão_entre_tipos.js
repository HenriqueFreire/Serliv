let n1 = 10
let n2 = '2'

let n3 = n1 * n2 // exemplo conversão implicita de n2 para number para este cálculo
console,log(n3, typeof n1, typeof n2)

n3 = n1 + n2 // neste exemplo não houve uma conversão implicita, mas uma concatenação
console,log(n3, typeof n1, typeof n2)

/*
  converter para número
  parseInt para números inteiros
  parseFloat para números decimais
  number() se o primeiro caractere for um numero
*/