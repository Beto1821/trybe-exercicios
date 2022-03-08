//Exercicio 1 
// let a = 20;
// let b = 5;

// let soma = a + b;
// console.log(soma);

// let sub = a - b;
// console.log(sub);

// let mult = a * b;
// console.log(mult);

// let div = a / b;
// console.log(div);

// let modulo = a % b;
// console.log(modulo);

//Exercicio 2

// let a = 10;
// let b = 30;

// if (a > b) {
//     console.log("O valor A é Maior que o B.");
// }
// else {
//     console.log("O valor de B é maior que o A.");
// }

//Exercico 3

// let a = 60;
// let b = 72;
// let c = 55;

// if (a > b && a > c) {
//     console.log("O numero de A é o maior.");
// }

// else if (b > a && b > c) {
//     console.log("O numero de B é o maior.");
// }

// else {
//     console.log("O numero de C é o maior.");
// }

//Exercicio 4

// let valor = -1;

// if (valor < 0) {
//     console.log("Valor negativo.");
// }
// else if (valor > 0)("Valor positivo.");
// }
// else {
//     console.log("Valor igual a zero.");
// }

//Exercicio 5

// let ladoA = 45;
// let ladoB = 75;
// let ladoC = 65;
// soma = ladoA + ladoB + ladoC

// if (ladoA < 0 || ladoB < 0 || ladoC < 0) {
//     console.log("ERRO");
// }

// else if (soma >= 0  && soma < 180 || soma > 180 ) {
//     console.log("False");
// }
// else if (soma === 180) {
//     console.log("True");
// }

//Exercicio 6

// var peca = window.prompt("escolha uma peça de xadrez").toLowerCase();



// if (peca === "peão" ) {
//     document.write("Movimenta para frente e diagonal");
// }
// else if (peca === "torre") {
//     document.write("Movimento para frente e para o lado");
// }
// else if (peca === "cavalo") {
//     document.write("O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”. ");
// }
// else if (peca === "rainha") {
//     document.write("Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. ");
// }

// //Exercicio 7

// var nota = window.prompt("Qual foi sua nota em %: ");

// if (nota >= 90) {
//     document.write("Conceito A");
// }
// else if (nota >= 80) {
//     document.write("Conceito B");
// }
// else if (nota >=70) {
//     document.write("Conceito C");
// }
// else if (nota >= 60) {
//     document.write("Conceito D");
// }
// else if (nota >= 50) {
//     document.write("Conceito E");
// }
// else {
//     document.write("Conceito F");
// }

//Exercicio 8

const n1 = 5;
const n2 = 3;
const n3 = 7;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 ===0) {
    console.log("True");
}
else {
    console.log("False");
}
