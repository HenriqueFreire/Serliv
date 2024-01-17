let arr = []

function generateNumber(max) {
  return parseInt(Math.random() * max)
}

while (arr.lenght < 20){
  let number = generateNumber(50)
  
  if (arr.indexOf(number) == -1) {
    arr.push(number)
  }else console.log(number)
}

console.log(arr)