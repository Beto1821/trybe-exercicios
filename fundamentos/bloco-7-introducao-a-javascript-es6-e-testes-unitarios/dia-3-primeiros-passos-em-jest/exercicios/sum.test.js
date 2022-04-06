const sum = require('./sum.js');

describe('Testes função sum', () => {
  test('verificar se resposta de soma(4,5) é igual a 9', () => {
    expect(sum(4, 5)).toEqual(9);
  })
  
  test('verificar se resposta de soma(4,5) é igual a 9', () => {
    expect(sum(0, 0)).toEqual(0);
  })
});