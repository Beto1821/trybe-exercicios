const readLine = require('readline-sync')

console.log("Calculo IMC")
const peso = readLine.questionInt("Digite peso(kg): ")
const altura = readLine.questionInt("Digite altura(m): ")


const resp = peso/(altura/100)**2

    if (resp < 18.5) {
      console.log('Abaixo do peso (magreza)');
    }

    if (resp >= 18.5 && resp < 25) {
      console.log('Peso normal');
    }

    if (resp >= 25 && resp < 30) {
      console.log('Acima do peso (sobrepeso)');
    }

    if (resp >= 30 && resp < 35) {
      console.log('Obesidade grau I');
    }

    if (resp >= 35 && resp < 40) {
      console.log('Obesidade grau II');
    }

    if (resp > 40) {
      console.log('Obesidade grau III e IV');
    } 

        console.log(`Seu indice IMC é de : ${resp.toFixed(2)}`);
        
