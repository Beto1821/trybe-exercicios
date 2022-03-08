//Exercicio 1 
// let a = 20;
// let b = 5;

// let soma = a + b;
// document.write(soma);

// let sub = a - b;
// document.write(sub);

// let mult = a * b;
// document.write(mult);

// let div = a / b;
// document.write(div);

// let modulo = a % b;
// document.write(modulo);

//Exercicio 2

// let a = 10;
// let b = 30;

// if (a > b) {
//     document.write("O valor A é Maior que o B.");
// }
// else {
//     document.write("O valor de B é maior que o A.");
// }

//Exercico 3

// let a = 60;
// let b = 72;
// let c = 55;

// if (a > b && a > c) {
//     document.write("O numero de A é o maior.");
// }

// else if (b > a && b > c) {
//     document.write("O numero de B é o maior.");
// }

// else {
//     document.write("O numero de C é o maior.");
// }

//Exercicio 4

// let valor = -1;

// if (valor < 0) {
//     document.write("Valor negativo.");
// }
// else if (valor > 0)("Valor positivo.");
// }
// else {
//     document.write("Valor igual a zero.");
// }

//Exercicio 5

// let ladoA = 45;
// let ladoB = 75;
// let ladoC = 65;
// soma = ladoA + ladoB + ladoC

// if (ladoA < 0 || ladoB < 0 || ladoC < 0) {
//     document.write("ERRO");
// }

// else if (soma >= 0  && soma < 180 || soma > 180 ) {
//     document.write("False");
// }
// else if (soma === 180) {
//     document.write("True");
// }

//Exercicio 6

var peca = window.prompt("escolha uma peça de xadrez").toLowerCase();



if (peca === "peão" ) {
    document.write("Movimenta para frente e diagonal");
}
else if (peca === "torre") {
    document.write("Movimento para frente e para o lado");
}
else if (peca === "cavalo") {
    document.write("O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”. ");
}
else if (peca === "rainha") {
    document.write("Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. ");
}

//Exercicio 7

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