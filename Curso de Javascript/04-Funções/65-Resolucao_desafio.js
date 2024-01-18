(function () {
  function calculaMedia() {
    let total = 0
    let qtd = arguments.length;
    
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== "number") {
        throw Error('only numbers')
      }

      total += arguments[i]      
    }

    return (total / qtd) || 0
  }

  let media = calculaMedia(2, 3, 4)
  console.log(media)
})()