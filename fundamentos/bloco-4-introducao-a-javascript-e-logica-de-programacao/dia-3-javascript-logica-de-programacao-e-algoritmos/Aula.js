// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.
// let valor = 50;
// let soma = 0;

// for ( let i = valor; i <= 100; i += 1 ) {
//     soma += i;
//     console.log(soma);
// }
// console.log('A soma de 50 a 100 é :', soma);

// {
//   let soma = 0;

//   for (let i = 50; i <= 100; i += 1) {
//     soma += i;
//   }

//   console.log(`A soma de 50 a 100 é: ${soma}`);
// };


// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.
// let cont = 0;

// for ( let i = 1; i <= 125; i += 1) {
//     if ( i % 3 === 0) {
//         cont += 1;
//     }
// }
// console.log('A quantidadde de números divisiveis por 3 são:', cont);
// if (cont === 50) {
//     console.log('Mensagem secreta');
// }

// {
//   let quantosDivisiveis = 0;

//   for (let i = 1; i <= 125; i += 1) {
//     if (i % 3 === 0) {
//       quantosDivisiveis += 1;
//     }
//   }

//   console.log(`Temos ${quantosDivisiveis} números divisiveis por 3;`);
//   if (quantosDivisiveis === 50) {
//     console.log('Valar Murghulis.');
//   }
// };

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

// let p1 = 'papel';
// let p2 = 'papel';

// if (p1 === 'pedra'&& p2 === 'papel') {
//     console.log('Pessoa 2 ganha');
// }
// else if (p1 === 'pedra' && p2 === 'tesoura') {
//     console.log('Pessoa 1 ganha');
// }
// else if (p1 === 'pedra' && p2 === 'pedra') {
//     console.log('Empate');
// }
// else if (p1 === 'papel' && p2 === 'tesoura') {
//     console.log('Pessoa 2 ganha');
// }
// else if (p1 === 'papel' && p2 === 'pedra') {
//     console.log('Pessoa 1 ganha');
// }
// else if (p1 === 'papel' && p2 === 'papel') {
//     console.log('empate');
// }
// else if (p1 === 'tesoura' && p2 === 'tesoura') {
//     console.log('Empate');
// }
// else if (p1 === 'tesoura' && p2 === 'pedra') {
//     console.log('Pesoa 2 ganha');
// }
// else if (p1 === 'tesoura' && p2 === 'papel') {
//     console.log('Pessoa 1 ganha');
// }

// copia
 
// {
//     let jogador1 = 'pedra';
//     let jogador2 = 'pedra';
  
//     if (jogador1 === jogador2) {
//       return console.log('Empate');
//     }
  
//     if (jogador1 === 'papel' && jogador2 === 'pedra') {
//       return console.log('Jogador 1 venceu');
//     }
  
//     if (jogador1 === 'tesoura' && jogador2 === 'papel') {
//       return console.log('Jogador 1 venceu');
//     }
  
//     if (jogador1 === 'pedra' && jogador2 === 'tesoura') {
//       return console.log('Jogador 1 venceu');
//     }
  
//     console.log('Jogador 2 venceu');
//   };

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.

// let idade = 10;

// if (idade >= 18) {
//     console.log('A pessoa é maior de idade!');
// }
// else {
//     console.log('A pessoa é menor de idade!');
// }



// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.


    // 18 = Marcela; 28 = Carlos; 19 = Camila;
    const array = [18, 28, 19];
  
    let menorIdade = array[0];
    for (let i = 1; i < array.length; i += 1) {
      if (array[i] < menorIdade) {
        menorIdade = array[i];
      }
    }
  
    switch (menorIdade) {
      case array[0]:
        console.log('Marcela é a mais nova;');
        break;
      case array[1]:
        console.log('Carlos é o mais novo.');
        break;
      case array[2]:
        console.log('Camila é a mais nova');
        break;
      default:
        console.log('Ocorreu um erro');
    }
  