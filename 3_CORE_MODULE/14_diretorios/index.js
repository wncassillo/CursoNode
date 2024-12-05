import fs from "fs";
//testa se a pasta existe, e caso ela não exista cria ela,
//para que na proxíma vez em que o código for rodado,
//o resultado seja que ela existe

if (!fs.existsSync("./minhapasta")) {
  console.log("Essa pasta não existe");
  fs.mkdirSync("minhapasta");
} else {
  console.log("A Pasta existe.");
}

//Para receber um resultado negativo a pasta "minhapasta" tem de ser apagada.
