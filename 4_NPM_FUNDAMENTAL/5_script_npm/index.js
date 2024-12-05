import chalk from "chalk";
import _ from "lodash";
//Usando o mesmo index da aula 4.
//Criando Scripts, no Package.json

//Criamos o script start, que roda o index.js pelo npm run start

//Só Scrit "start" pode ser rodado apenas com npm start

const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 7, 8];

const diff = _.difference(a, b);
console.log(chalk.bgRed.bold(diff));
