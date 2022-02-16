let  letra = 'abc'
console.log(letra)

function getCores (cor) {
  return {
    red: ()=> {
      return console.log('af00')
    },
    black: ()=> console.log('#000'),
    white: ()=> console.log('#fff')
  }[cor ?? 'default']()
}

//* ??=> testa se o valor é null ou undefined
