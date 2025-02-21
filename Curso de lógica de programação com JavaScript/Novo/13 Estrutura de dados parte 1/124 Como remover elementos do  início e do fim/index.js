const umaArray = [1, 2, 3, 4]

// inserir um elemento no final da array
umaArray.push(5)
console.log(umaArray) // [1, 2, 3, 4, 5]

// inserir um elemento no início da array
umaArray.unshift(0)
console.log(umaArray) // [0, 1, 2, 3, 4, 5]

// remover um elemento do final da array
umaArray.pop()
console.log(umaArray) // [0, 1, 2, 3, 4]

// remover um elemento do início da array
umaArray.shift()
console.log(umaArray) // [1, 2, 3, 4]