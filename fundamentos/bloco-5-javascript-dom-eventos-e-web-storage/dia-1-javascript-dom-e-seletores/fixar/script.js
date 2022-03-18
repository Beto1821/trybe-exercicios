const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

// Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
document.querySelector("#page-title").innerText = "Operação cavalo de Troia";

// Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
document.getElementById("second-paragraph").innerText =
  "Você vai desenvolver um site que contenha uma série de informações sobre o que você aprendeu aqui na Trybe ao longo dos últimos três blocos. Seu site deverá estar com elementos posicionados e estilizados e além disto, deverá conter semântica apropriada para que seja acessível e melhor ranqueado";

// Por fim, recupere o subtítulo e altere-o também.
document.getElementById("subtitle").innerText = "Abobrinhas";
document.getElementById("subtitle").style.color = "green";

// Adicione uma classe igual para os dois parágrafos.

// Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
document.querySelector("p");

// Altere algum estilo do primeiro deles.
let Parag1 = document.querySelectorAll(".Parag")[0];
Parag1.style.backgroundColor = "pink";

// Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .
document.getElementsByTagName("h4")[0].style.backgroundColor = "yellow";
