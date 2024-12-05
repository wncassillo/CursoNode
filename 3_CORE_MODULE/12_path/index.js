import path from "path";

const customPath = "/relatorios/wilson/relatorio1.pdf";
//decompoe as informações de um path

console.log(path.dirname(customPath)); //diretório onde se encontra "o alvo"
console.log(path.basename(customPath)); //"o alvo" propriamente dito
console.log(path.extname(customPath)); // formato de arquivo do alvo
