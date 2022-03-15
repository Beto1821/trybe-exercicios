// // arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

//1 Acesse o elemento elementoOndeVoceEsta .
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
//2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = "red";
//3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const prifilho = elementoOndeVoceEsta.firstElementChild;
prifilho.innerText = "Dada Maravilha"
//4 Acesse o primeiroFilho a partir de pai .
const priFilho = pai.firstElementChild

//5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
elementoOndeVoceEsta.previousElementSibling;

//6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
elementoOndeVoceEsta.nextSibling

//7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
elementoOndeVoceEsta.nextElementSibling

//8 Agora acesse o terceiroFilho a partir de pai .
pai.lastElementChild.previousElementSibling
