const calculadora = (number1, operador, number2) => {
  return operador(number1, number2)
};

const soma = (a1, a2) => a1 + a2;

const sub = (s1, s2) => s1 - s2;

const mult = (v1, v2) => v1 * v2;

const div = (d1, d2) => d1 / d2;

console.log(calculadora(2, soma, 4));
console.log(calculadora(12, sub, 4));
console.log(calculadora(4, mult, 4));
console.log(calculadora(121, div, 11));
