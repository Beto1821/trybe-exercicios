const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync('./simpsons.json', 'utf8')
  const simp = JSON.parse(data)
  const result = simp.map((e) => `${e.id} - ${e.name}` )
  console.log(result);
} catch (err) {
  console.error('Erro ao ler arquivo: ${err.path}');
  console.log(err);
}