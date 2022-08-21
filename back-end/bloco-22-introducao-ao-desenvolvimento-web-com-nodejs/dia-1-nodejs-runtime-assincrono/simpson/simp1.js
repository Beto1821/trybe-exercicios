const fs = require('fs').promises;


// try {
  async function createSimpsonsFamily() {
  const data = await fs.readFile('./simpsons.json', 'utf8')
  const simp = JSON.parse(data)

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simp
    .filter((simpson) => familyIds.includes(Number(simpson.id)));

     await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

     const family = await fs.readFile("./simpsonsFamily.json", 'utf8')
     const print =JSON.parse(family);
    console.log(print);
  }
// } catch (err) {
//   console.error('Erro ao ler arquivo: ${err.path}');
//   console.log(err);
// }

createSimpsonsFamily()