// Exercício 2: Escreva uma função que recebe por parâmetro um array de números e retorna a soma dos números pares. Se nenhum número for par, ou o array for vazio a soma deve ser zero. ( dica: já fizemos uma função que verificar se o número é par)

const numPares = (array) => {
let soma = 0;
  for (i in array) {
    if (array[i] % 2 == 0){
      soma += array[i]
    }else {
      'A função não contém numeros pares ou esta vazia)'
    }
  } 
  return soma
}

console.log(numPares([2, 3, 4, 5, 6, 7]));