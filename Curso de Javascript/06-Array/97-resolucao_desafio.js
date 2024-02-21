function sum() {
  const numbers = Array.from(arguments)
  return numbers.reduce(function(sum, atual) {
    return sum + atual
  }, 0)
}

function average() {
  return sum(...arguments) / arguments.length   
}

let media = average(1, 2, 3, 4, 5)