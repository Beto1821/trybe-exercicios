const verifica = (n, callback) => {
  if (n === callback()) {
    return 'Acertou'
  }
  return 'errou!'
}

const sorteio = () => (Math.ceil(Math.random()*5)); 


console.log(verifica(4, sorteio));


