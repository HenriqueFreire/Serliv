function sum() {
  const parameterArray = Array.from(arguments)
  const total = parameterArray.reduce(function(counter, element) {
    return counter + element
  })

  return total
}

function average() {
  const total = sum(...arguments)
  const average = total / arguments.length 
  console.log(`Média: ${average.toFixed(1)}`)
}

average(4, 5, 6, 7, 7, 5)
