const readLine = require('readline-sync')

console.log("Calculo IMC")
const peso = readLine.questionInt("Digite peso(kg): ")
const altura = readLine.questionInt("Digite altura(m): ")


const resp = peso/(altura/100)**2

        console.log(`Seu indice IMC é de : ${resp.toFixed(2)}`);
        
