function fn(cb) {
  console.log('executar callback')
  typeof cb === 'function' && cb()
}

function callback() {
  console.log('função passada por parâmetro')
}

fn(callback)

function fn2(n1) {
  return function (n2){
    return n1 * n2
  }
}

const funcao2 = fn2(10)
const multi = funcao2(5)

console.log(multi)