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

// const n1 = 5;
// const n2 = 3;
// const n3 = 7;

// if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 ===0) {
//     console.log("True");
// }
// else {
//     console.log("False");
// }

//Exercicio 9

// const n1 = 3;
// const n2 = 4;
// const n3 = 2;

// if (n1 % 2 != 0 || n2 % 2 != 0 || n3 % 2 !=0) {
//     console.log("True");
// }
// else {
//     console.log("False");
// }

//Exercicio 10

// let valorCusto = 1000;
// let valorVenda = 2000;
// impostoSobreOCusto = valorCusto * 0.2 ;

// let valorCustoTotal = valorCusto + impostoSobreOCusto;
// let lucro = valorVenda - valorCustoTotal;

// let lucroTotal = lucro * 1000;
// console.log(lucroTotal);

//Exercicio 11

let salario = 3000.00;


// INSS
if (salario <= 1556.94) {
    salario = salario - ( salario * 0.08 );   
}
else if (salario > 1556.94 && salario <= 2594.92) {
    salario = salario - ( salario * 0.09 ); 
}
else if (salario > 2594.92 && salario <= 5189.82) {
    salario = salario - ( salario * 0.11 ); 
}
else {
    salario = salario - 570.88 
}
//console.log(salario);
// IR
if (salario > 1903.98 && salario <= 2826.65) {
    salario = (salario -((salario * 0.075)- 142.8));
}
else if (salario > 2826.65 && salario <= 3751.05 ) {
    salario = (salario -((salario * 0.15)- 354.8));
}
else if (salario > 2826.65 && salario <= 3751.05 ) {
    salario = (salario -((salario * 0.15)- 354.8));
}
else if (salario > 3751.05 && salario <= 4664.68 ) {
    salario = (salario -((salario * 0.225)- 636.13));
}
else if (salario > 4664.68) {
    salario = (salario -((salario * 0.275)- 869.36));
}

console.log(salario);