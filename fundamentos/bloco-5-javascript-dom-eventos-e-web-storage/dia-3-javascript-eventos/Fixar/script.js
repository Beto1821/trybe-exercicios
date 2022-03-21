const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");
const allLi = document.querySelectorAll("main ul li");

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
function apaga(event) {
  for (i = 0; i < allLi.length; i += 1) {
    allLi[i].classList.remove("tech");
  }
  event.target.classList.add("tech");
}
firstLi.addEventListener("click", apaga);
secondLi.addEventListener("click", apaga);
thirdLi.addEventListener("click", apaga);

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function addtexto(event) {
  document.querySelector(".tech").innerText = event.target.value;
}
input.addEventListener("input", addtexto);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

myWebpage.addEventListener("dblclick", function () {
  window.location.assign(
    "https://www.devmedia.com.br/javascript-redirect-redirecionando-o-usuario-com-window-location/39809"
  );
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function alteraCor(event) {
    event.target.style.color = "red";
};
firstLi.addEventListener("mouseover", alteraCor);  
secondLi.addEventListener("mouseover", alteraCor);
thirdLi.addEventListener("mouseover", alteraCor);

function tiraCor(event) {
  event.target.style.color = "unset";
}
firstLi.addEventListener("mouseout", tiraCor);
secondLi.addEventListener("mouseout", tiraCor);
thirdLi.addEventListener("mouseout", tiraCor);

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.apanhando e apavoradp
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);
secondLi.addEventListener("dblclick", resetText);
thirdLi.addEventListener("dblclick", resetText);
// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
