 import fs from "fs"

 console.log("Início")

 fs.writeFileSync("arquivo.txt","oi")

 console.log("fim")

 //execução sincrona:
 //as coisas rodam na forma como estão organizadas por linhas
 //o "fim" só é imprimido no console, após a criação do arquivo.txt