const {sum, myRemove} = require('./sum.js');

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