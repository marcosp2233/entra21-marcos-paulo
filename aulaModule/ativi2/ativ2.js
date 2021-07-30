//1) Crie um script que leia o arquivo exercioNomes.txt e mostra todos os nomes que começam com a letra A
//presentes no arquivo.

const path = require("path");
const fsPromises = require("fs/promises");
const { EOL } = require("os");
(async () => {
    try {   
        const data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        const nomes = data.toString("utf-8").split(EOL);
        const nomesComA = nomes.filter(nome => nome[0].toUpperCase() === "A");
        console.log(nomesComA);
    } catch (err) {
        console.log(err.message);
    }
})();