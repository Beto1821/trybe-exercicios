const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurno = (objeto, key, keyValor ) => objeto[key]= keyValor;
addTurno(lesson2, 'turno', 'noite');
//console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (objeto) => Object.keys(objeto);
//console.log(listKeys(lesson1)); 

// Crie uma função para mostrar o tamanho de um objeto.
const lengthObject = (objeto) => Object.keys(objeto).length;
//console.log(lengthObject(lesson2));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valorList = (objeto) => Object.values(objeto);
//console.log(valorList(lesson1));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const alllessons = Object.assign({}, {lesson1, lesson2, lesson3});
//console.log(alllessons);

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const students = (objetos) => {
  let soma = 0;
  const lessons = Object.keys(objetos);
  console.log(lessons);
  for (i in lessons) {
    soma += objetos[lessons[i]].numeroEstudantes
  }
  return soma;
}
//  console.log(students(alllessons));

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const valorKey = (objeto, pos) => Object.values(objeto)[pos];
//console.log(valorKey(lesson1, 0));

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyPair = (objeto, key, valor ) => {
  const entrada = Object.entries(objeto)
  //  console.log(entrada);
  let igual = false;  
  for(let i in entrada) {
    if(entrada[i][0] === key && entrada[i][1] === valor) igual = true;
  }  
  return igual;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
