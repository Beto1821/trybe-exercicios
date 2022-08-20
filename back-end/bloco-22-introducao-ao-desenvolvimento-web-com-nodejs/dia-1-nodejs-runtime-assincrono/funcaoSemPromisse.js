function divisao(num1, num2) {
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  const resultado = num1 / num2;

  return resultado
}

try {
  const resultado = divisao(2,0);
  console.log("resultado: %s", resultado);
}catch (Error) {
  console.log("erro: %s", Error.message);
}

