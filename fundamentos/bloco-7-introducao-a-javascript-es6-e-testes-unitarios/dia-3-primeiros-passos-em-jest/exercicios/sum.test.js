const {sum, myRemove, myFizzBuzz, encode, decode} = require('./sum.js');

describe('Testes função sum', () => {
  test('verificar se resposta de soma(4,5) é igual a 9', () => {
    expect(sum(4, 5)).toEqual(9);
  })
  
  test('verificar se resposta de soma(4,5) é igual a 9', () => {
    expect(sum(0, 0)).toEqual(0);
  })

  test('verificar se resposta de soma(4,"5") gera erro', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError();
  })

  test('Parametros deve ser numeros', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError('parameters must be numbers');
  })
});

describe('Testes função Myremove', () => {
  test('Teste de array retirando o valor 3', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toContain(3);
  })

  test('Teste de array vazio', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, [1, 2, 3, 4])).not.toContain([1, 2, 3, 4]);
  })

  test('Teste de array retirando o valor 3', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 5)).not.toContain(5);
  })

});

describe('Teste função FizzBuzz', () => {
  test('Teste se a função recebe o valor 15 e retorne "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toEqual("fizzbuzz");
  })

  test('Teste se a função recebe o valor 9 e retorne "fizz"', () => {
    expect(myFizzBuzz(9)).toEqual("fizz");
  })

  test('Teste se a função recebe o valor 10 e retorne "buzz"', () => {
    expect(myFizzBuzz(10)).toEqual("buzz");
  })

  test('Teste se a função recebe um valor não divisivel nem por 3 e nem por 5 e retorne "fizzbuzz"', () => {
    expect(myFizzBuzz(17)).toBe(17);
  })

  test('Teste se a função recebe o valor que não é um número e retorne "false"', () => {
    expect(myFizzBuzz("a")).toEqual(false);
  })
});

describe('Testes das funções encode e decode', () => {
  test('Teste se encode é uma funções', () => {
    expect(typeof encode).toEqual('function');
  })

  test('Teste se decode é uma funções', () => {
    expect(typeof decode).toEqual('function');
  })

  test('Teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5 na função encode', () => {
    const vogais = 'aeiou';
    expect(encode(vogais)).toEqual('12345');
  })

  test('Teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5 na função encode', () => {
    const vogais = 'aeiou';
    expect(encode(vogais)).toEqual('12345');
  })

  test('Teste se os números 1, 2, 3, 4, 5 são convertidas nas vogais a, e, i, o, u na função encode', () => {
    const num = '12345';
    expect(decode(num)).toEqual('aeiou');
  })
  test('Teste se as letras não vogais são convertidas em 1, 2, 3, 4 e 5 na função encode', () => {
    const vogais = 'bcdf';
    expect(encode(vogais)).not.toContain('12345');
  })

  test('Teste se os números 6, 7, 8, 9 não são convertidas nas vogais a, e, i, o, u na função encode', () => {
    const num = '6789';
    expect(decode(num)).not.toContain('aeiou');
  })
  
  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const vogais = 'aeiou';
    expect(encode(vogais).length).toEqual(5);
  })

  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const num = '12345';
    expect(decode(num).length).toEqual(5);
  })
});