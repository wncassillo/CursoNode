// ex exec: "node index.js --nome=Pedro --profissao=Professor
const minimist = require("minimist");
//minimist facilita trabalhar com args

const args = minimist(process.argv.slice(2));
console.log(args);

//declaração das consts facilitada pelo minimist
const nome = args["nome"];
const profissao = args["profissao"];
//console.log(nome, profissao)

console.groupCollapsed(`${nome} é um(a) ${profissao}`);
