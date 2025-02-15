class ContaBancária{
  #saldo
  constructor(saldoIncial){
    this.#saldo = saldoIncial
  }

  get saldo(){
    return `O saldo atual é de R$ ${this.#saldo.toFixed(2)}`
  }

  set depositar(valor){
    if(valor <= 0){
      console.log('Valor inválido para depósito')
      return
    }
    this.#saldo += valor
  }

  set sacar(valor){
    if(valor > this.#saldo && valor <= 0){
      console.log('Saldo insuficiente')
      return
    }
    this.#saldo -= valor
  }  
}

const conta = new ContaBancária(110)

console.log(conta.saldo) // 110
conta.depositar = 50
console.log(conta.saldo) // 160
conta.sacar = 20
console.log(conta.saldo) // 140