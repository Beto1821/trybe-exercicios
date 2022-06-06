let { randon } = require('./service');


// //  exercicio 1
// describe('testando função' , () => {
//   randon = jest.fn().mockReturnValue(10);
//   it('Quantas vezes foi chamada', () => {
//     randon();
//   expect(randon).toHaveBeenCalledTimes(1);
//   });
//   it('Se a função foi chamada', () => {
//     randon();
//     expect(randon).toHaveBeenCalled();
//   });
//     it('Qual seu retorno', () => {
//     expect(randon()).toBe(10);
//   });
// });


//exercicio 2

// describe('Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez' , () => {
//   randon = jest.fn().mockImplementationOnce((a, b) => a / b);
//   it('Quantas vezes foi chamada', () => {
//     randon();
//   expect(randon).toHaveBeenCalledTimes(1);
//   });
//   it('Se a função foi chamada', () => {
//     randon();
//     expect(randon).toHaveBeenCalled();
//   });
//     it('implementação de divisão foi aplicada', () => {
//     expect(randon(10, 2)).toBe(5);
//   });
//     it('Qual seu retorno', () => {
//     expect(randon).toHaveBeenCalledWith(10, 2);
//   });
// });

// Exercicio 3

describe('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros' , () => {
  randon = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  it('Quantas vezes foi chamada', () => {
    randon();
  expect(randon).toHaveBeenCalledTimes(1);
  });
  it('Se a função foi chamada', () => {
    randon();
    expect(randon).toHaveBeenCalled();
  });
    it('implementação de divisão foi aplicada', () => {
    expect(randon(10, 2)).toBe(5);
  });
    it('Qual seu retorno', () => {
    expect(randon).toHaveBeenCalledWith(10, 2);
  });
});