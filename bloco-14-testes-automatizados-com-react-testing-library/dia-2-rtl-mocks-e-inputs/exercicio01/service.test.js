let { randon } = require('./service');

describe('testando função' , () => {
  randon = jest.fn().mockReturnValue(10);
  it('Se a função foi chamada', () => {
    randon();
    expect(randon).toHaveBeenCalled();
  });
    it('Qual seu retorno', () => {
    expect(randon()).toBe(10);
  });
    it('Quantas vezes foi chamada', () => {
      randon();
    expect(randon).toHaveBeenCalledTimes(3);
  });
});
