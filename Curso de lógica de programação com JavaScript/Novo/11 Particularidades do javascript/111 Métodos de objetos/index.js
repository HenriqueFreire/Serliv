// Métodos de objetos
const pessoa = {
    nome: 'Luiza',
    sobrenome: 'Miranda',
    idade: 30,
    fala() {
        console.log(`${this.nome} está falando oi...`);
    },
    apresentar() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos de idade.`);
    }
  }

  pessoa.fala()
  pessoa.apresentar()