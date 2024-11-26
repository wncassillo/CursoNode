//para rodar, apague o 'arquivo.txt'
import fs from "fs";

console.log("Início");

fs.writeFileSync("arquivo.txt", "Oi. Fui criado pelo sincrono.");
//O Arquivo é criado entre o inicio e fim

console.log("fim"); //Ocorre só DEPOIS da criação do txt

//execução sincrona:
//as coisas rodam na forma como estão organizadas por linhas
//o "fim" só é imprimido no console, após a criação do arquivo.txt
