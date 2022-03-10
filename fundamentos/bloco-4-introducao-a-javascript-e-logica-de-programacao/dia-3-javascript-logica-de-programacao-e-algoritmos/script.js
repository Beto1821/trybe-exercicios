//Exercicio 1

// let valor = 10;
// let num = 1;

// for (let i = valor; i > 0; i -= 1) {
//   num *= i;
//   console.log(num);
// }
// console.log(num);

//Exercicio 2

// let word = 'tryber';
// let revWorld = '';

// for (let i = word.length - 1; i >= 0; i -= 1 ) {
//     revWorld += word[i];
// }

// console.log(revWorld);

//Exercicio 3

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maior = '';
// //let tamMaior = 0;
// let menor = array[0];
// //let tamMenor = array[0].length;

// for (let i = 0; i < array.length; i += 1 ) {
//     if (array[i].length > maior.length) {
// //        tamMaior = array[i].length;
//         maior = array[i];
//     }
//     if (array[i].length < menor.length) {
// //        tamMenor = array[i].length;
//         menor = array[i];
//     }
// }
// console.log('A palavra de maior valor é :',maior);
// console.log('A palavra de menor tamanho é :', menor);

//Exercicio 4

// function primeNumber(num) {
//     for (let divisor = 2; divisor < num; divisor++)
//     if (num % divisor == 0) return false;
//     return true;let maiorPrimo = 0;
// let arrayBase = [];
// let arrayPrimos = [];
// div = 0;
// for (let i = 0; i <= 50; i += 1_) {

// }
// }

let maiorPrimo = 0;
let arrayPrimos = [];
div = 0;
for (let i = 0; i <= 50; i += 1) {
  div = 0;
  for (let z = 1; z <= i; z += 1) {
    if (i % z === 0) {
      div += 1;
    }
  }
  if (div === 2) {
    maiorPrimo = i;
    arrayPrimos.push(maiorPrimo);
  }
}
console.log(arrayPrimos);
console.log(maiorPrimo);
