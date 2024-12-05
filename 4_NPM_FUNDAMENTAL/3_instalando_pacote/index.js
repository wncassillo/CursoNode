import _ from "lodash";
//Instalando dependências nos projetos
//npm install <nome>

//para encontrar modulos: npmjs.com
const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 7, 8];

const diff = _.difference(a, b);
//verifica a diferença entre dois arrays

console.log(diff);
