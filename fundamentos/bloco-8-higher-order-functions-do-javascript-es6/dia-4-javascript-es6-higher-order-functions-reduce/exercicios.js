// 1 - Dada uma matriz, transforme em um array.

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//   return arrays.reduce((acc, curr) => acc.concat(curr)
// ,[])};

// console.log(flatten());

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

// const expectedResult =
//   'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';

// function reduceNames() {
//   return books.reduce((acc, nome, indice, array ) => {
//     if (indice === array.length - 1) return acc +=`${nome.author.name}.`;
//     return acc +=`${nome.author.name}, `;
//   }, '');
// }

// console.log(reduceNames());

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// const expectedResult = 43;

// function averageAge() {
//   return books.reduce((acc ,livro ) => acc += (livro.releaseYear - livro.author.birthYear),0)/books.length
//   };

// console.log(averageAge());

// 4 - Encontre o livro com o maior nome.

// function longestNamedBook() {
//   return books.reduce((acc, livro) => acc.length < livro.name.length?livro : acc)
// }

// console.log(longestNamedBook());

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


function containsA() {
  return names
      .reduce((acc, palavra) => acc += palavra.split('')
      .reduce((ac, letra) => {
        if (letra === 'a' || letra === 'A') return ac + 1 ;
         return ac;
      }, 0),0);
}

console.log(containsA());


// const containsA = () => names.join(',').split('').filter((i) => i === 'a' || i === 'A').length

// console.log(containsA());