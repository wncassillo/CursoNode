import fs from "fs";

//Renomeando um arquivo
const arqAntigo = "arquivo.txt"; //nome atual
const arqNovo = "renomeado.txt"; //novo nome a ser definido

fs.rename(arqAntigo, arqNovo, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`O Arquivo "${arqAntigo}" foi renomeado para "${arqNovo}".`);
});
//para esse código rodar corretamente deve existir um arquivo.txt.
