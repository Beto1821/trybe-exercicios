//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1

// for (let i = 0 ; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }

//exercicio 2

// let soma = 0
// for (let i = 0 ; i < numbers.length; i += 1) {
//     soma = soma + numbers[i];
// }
// console.log(soma);

//Exercicio 3

// let soma = 0
// let i = 0
// for (i ; i < numbers.length; i += 1) {
//     soma = soma + numbers[i];"nenhum valor ímpar encontrado"

// }
// let media = (soma/i)"nenhum valor ímpar encontrado"
// console.log(media);

//Exercicio 4

// let soma = 0
// let i = 0
// for (i ; i < numbers.length; i += 1) {
//     soma = soma + numbers[i];

// }
// let media = (soma/i)
// console.log('A media dos numeros é :',media);

// if (media > 20) {
//     console.log("O valor maior que 20.");
// }
// else {
//     console.log("O valor menor ou igual a 20.");
// }

//Exercicio 5

// let maior = numbers[0];

// for (i = 0; i < numbers.length; i += 1) {
//     if (maior < numbers[i]) {
//         maior = numbers[i];
//     }
// }
// console.log('O maior número é ', maior);

//Exercicio 6

// let cont= 0;

// for (i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 !== 0) {
//         cont += 1;
//     }
// }
// console.log('Foram encontrados', cont ,'valores impares.' );
// if (cont === 0) {
//     console.log("nenhum valor ímpar encontrado");
// }

//Exercicio 7

// let menor = numbers[0];

// for (i = 0; i < numbers.length; i += 1) {
//     if (menor > numbers[i]) {
//         menor = numbers[i];
//     }
// }
// console.log('O menor número é ', menor);

//Exercicio 8
// let limite = 25;

// let arrayNumeros = []

// for (let i = 1; i <= limite; i += 1) {
//     arrayNumeros.push(Math.ceil(Math.random() * 25));
// }

// console.log(arrayNumeros);


//Exercicio 9

// let limite = 25;

// let arrayNumeros = []

// for (let i = 1; i <= limite; i += 1) {
//     arrayNumeros.push((Math.ceil(Math.random() * 25))/2);
// }

// console.log(arrayNumeros);

//Bonus

//Exercicio 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

//   console.log(numbers);

//Exercicio 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
// console.log(numbers);

//Exercicio 3

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let arrayNumbers = []

// for (i = 0; i < numbers.length; i += 1) {
//     if (i === (numbers.length - 1)) {
//     arrayNumbers.push(numbers[i]*2);
// }
// else {
//     arrayNumbers.push(numbers[i] * numbers[i + 1]);
// }
// }
// console.log(arrayNumbers);



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayNumbers = []

for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i + 1]) {
    arrayNumbers.push(numbers[i] * numbers[i + 1]);
  }
else {
    arrayNumbers.push(numbers[i] * 2);
  }
}
console.log(arrayNumbers);

