const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

console.log(numbers.find(findDivisibleBy3And5));

//console.log(findDivisibleBy3And5());

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
// Copiar
// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   // Adicione seu código aqui:
//   return names.find((name) => name.length === 5);
// }

// console.log(findNameWithFiveLetters());

// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
// Copiar
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic =(id) => musicas.find((musica) => musica.id === id);


console.log(findMusic('31031685'))