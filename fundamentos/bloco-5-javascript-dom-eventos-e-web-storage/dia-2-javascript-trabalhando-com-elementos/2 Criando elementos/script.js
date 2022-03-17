// Crie um irmão para elementoOndeVoceEsta .creatElement()

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let pai = elementoOndeVoceEsta.parentElement;
let irmaoDoElementoOndeVoceEsta = document.createElement('section');
pai.appendChild(irmaoDoElementoOndeVoceEsta);
irmaoDoElementoOndeVoceEsta.innerText = 'irmao' 

// Crie um filho para elementoOndeVoceEsta .
let filho = document.createElement('section')
elementoOndeVoceEsta.appendChild(filho)
filho.innerText = 'filho'

// Crie um filho para primeiroFilhoDoFilho .
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
//let parentaPrimeiroFilho = primeiroFilhoDoFilho.parentElement
let filhoPrimeiroFIlho = document.createElement('section')
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFIlho)
filhoPrimeiroFIlho.innerText = 'filho do primeiro filho'


// A partir desse filho criado, acesse terceiroFilho .
let paidofilho = filho.parentElement.parentElement;
pai.children[2].innerText = 'terceiro filho'