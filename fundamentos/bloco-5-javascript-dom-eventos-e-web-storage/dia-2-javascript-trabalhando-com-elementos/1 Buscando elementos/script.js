// // arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

// //1 Acesse o elemento elementoOndeVoceEsta .
// let euTo = document.getElementById('elementoOndeVoceEsta');
// //2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// let pai = euTo.parentElement;
// pai.style.backgroundColor = 'pink';
// //3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// let pfilho = document.getElementById('primeiroFilho');
// pfilho.innerHTML = 'primeiro filho';
// //4 Acesse o primeiroFilho a partir de pai .
// let prifilhodopai = document.getElementById('pai').firstElementChild;

// //5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// let priFilhoDoPaiOndeEuTo = document.getElementById('elementoOndeVoceEsta');
// priFilhoDoPaiOndeEuTo.parentElement.firstElementChild;

// //6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// euTo.nextSibling;

// //7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// euTo.nextElementSibling

// //8 Agora acesse o terceiroFilho a partir de pai .
// pai.lastElementChild.previousElementSibling




// Crie um irmão para elementoOndeVoceEsta .
let pai = document.getElementById('pai');
let irmao = document.createElement('section');
irmao.id = 'irmao';
pai.appendChild(irmao);



// Crie um filho para elementoOndeVoceEsta .
let ondEuTo = document.getElementById('elementoOndeVoceEsta');
let filhoDondeEuTo = document.createElement('section');
filhoDondeEuTo.id = 'FilhoDeOndeVoceEsta'
ondEuTo.appendChild(filhoDondeEuTo);

// Crie um filho para primeiroFilhoDoFilho .
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoDoprimeiroFilhoDoFilho = document.createElement('section');
filhoDoprimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFIlho';
primeiroFilhoDoFilho.appendChild(filhoDoprimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho .

const terceiroFilho = filhoDoprimeiroFilhoDoFilho
.parentElement // primeiroFilhoDoFilho
.parentElement // elementoOndeVoceEsta
.nextElementSibling; // terceiroFilho
console.log(terceiroFilho);

