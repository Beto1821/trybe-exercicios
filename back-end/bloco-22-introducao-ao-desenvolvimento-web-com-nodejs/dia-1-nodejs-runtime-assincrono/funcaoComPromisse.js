function divisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(Error("Não pode dividir um número por zero"));

    const resultado = num1 / num2;
    
    resolve(resultado);

});

return promise;

}

divisao(2,0)
  .then((result) => console.log(result))
  .catch((error) => console.log("error: %s", error.message))