// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => funcAppend(data))
  
  };
  const funcAppend = (elemento) => {
  const appendjoke = document.createElement('p');
  appendjoke.innerHTML = `${elemento.joke}`;
  const piadaCOntainer = document.getElementById('jokeContainer');
  piadaCOntainer.appendChild(appendjoke);  
  };


window.onload = () => fetchJoke();