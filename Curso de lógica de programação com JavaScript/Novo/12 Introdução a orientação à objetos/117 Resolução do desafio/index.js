class Aluno{
  constructor(nome, curso){
    this.nome = nome;
    this.curso = curso;
    this.notas = [];
  }

  adicionarNotas(n1, n2, n3, n4){
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;
    this.n4 = n4;
    this.notas = [n1, n2, n3, n4];
  }

  calcularMedia(){
    let soma = 0;
    for (const nota of this.notas){
      soma += nota;
    }

    return soma / this.notas.length;
  }

  mostrarMedia(){
    const media = this.calcularMedia();
    console.log(`A média do aluno ${this.nome} é ${media}`);
  }
}

const aluno1 = new Aluno('Henrique', 'Programação');
aluno1.adicionarNotas(10, 8, 9, 7);
aluno1.mostrarMedia();