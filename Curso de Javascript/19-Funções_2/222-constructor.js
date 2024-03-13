function Cachorro(name){
  let posição = 0

  this.name = name

  this.latir = function () {
    console.log(this.name, 'está latindo')
  }

  this.andar = function(distancia){
    posicao += distancia
    console.log(this.name, 'andou ', distancia, ' m')
    console.log("A posição atual é", posicao, 'm')
  }
}

const rex = new Cachorro('rex')
const toto = new Cachorro('toto')

console.log(rex)
rex.latir()
rex.andar(5)
rex.andar(10)
toto.andar(3)

const laica = new Cachorro('Laica')
laica.latir()
laica.andar(2)
laica.andar(-16)