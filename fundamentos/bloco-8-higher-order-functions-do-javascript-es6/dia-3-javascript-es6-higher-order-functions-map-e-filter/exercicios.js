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

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

// const criaArray = () => books.map((livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`);

//    console.log(criaArray());

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort

function nameAndAge() {
  return books
    .map((livro) => ({
      age: livro.releaseYear - livro.author.birthYear,
      author: livro.author.name,
    }))
    .sort((livro1, livro2) => livro1.age - livro2.age);
}
console.log(nameAndAge());

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter ;

// function fantasyOrScienceFiction() {
//   return books.filter(
//     (livro) =>
//       livro.genre.includes('Ficção Científica') ||
//       livro.genre.includes('Fantasia')
//   );
// }

// console.log(fantasyOrScienceFiction());

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

// function oldBooksOrdered() {.sort((livro1, livro2) => livro1.author.name - livro2.author.name);
//   return books
//     .filter((livro) => new Date().getFullYear() - livro.releaseYear > 60)
//     .sort((livro1, livro2) => livro1.releaseYear - livro2.releaseYear);
// }

// console.log(oldBooksOrdered());.sort((livro1, livro2) => livro1.author.name - livro2.author.name);

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

// function fantasyOrScienceFictionAuthors() {
//   return books
//     .filter(
//       (livro) =>
//         livro.genre === 'Fantasia' || livro.genre === 'Ficção Científica'
//     )
//     .map((livro) => livro.author.name)
//     .sort();
// }
// console.log(fantasyOrScienceFictionAuthors());

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  return books
  .filter((livro) => new Date().getFullYear() - livro.releaseYear > 60)
  .map((livro) => livro.name)
}
console.log(oldBooks());

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

function authorWith3DotsOnName() {
  return books.filter((livro) => (
    livro.author.name[1] === '.'
    && livro.author.name[4] === '.'
    && livro.author.name[7] === '.'
  ))[0].name;
}

console.log(authorWith3DotsOnName());