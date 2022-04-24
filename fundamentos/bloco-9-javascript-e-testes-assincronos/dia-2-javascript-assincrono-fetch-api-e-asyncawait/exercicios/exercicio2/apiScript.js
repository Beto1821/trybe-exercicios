
function coin () {
  const myObject = {
    method: 'GET',
    redirect: 'follow' 
  };

  
  fetch ('https://api.coincap.io/v2/assets', myObject)
  .then ((resposta) => resposta.json())
  .then ((data) => {
    for (i = 0; i <= 9; i += 1) {
      appendMoeda(data.data[i])
    }
  })
}

window.onload = () => coin();

const appendMoeda = (moeda) => {
  const novaLi = document.createElement('li');
  novaLi.innerText = `${moeda.name} (${moeda.symbol}): ${Number(moeda.priceUsd).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD', })}`;
  const oPai = document.getElementById('coins-list');
  oPai.appendChild(novaLi);
};