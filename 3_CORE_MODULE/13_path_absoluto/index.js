import path from "path";

// path absoluto, obtem o path "completo" de um arquivo, sua localização precisa no disco.
console.log(path.resolve("teste.txt"));

// formar path, com um "arquivo alvo" e uma pasta que o contem
const midFolder = "relatorios";
const filename = "wilson.txt";

const finalPath = path.join("/", "arquivos", midFolder, filename);
console.log("Path formado:");
console.log(finalPath);
