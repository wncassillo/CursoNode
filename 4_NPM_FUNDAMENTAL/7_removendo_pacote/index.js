import chalk from "chalk";
// removendo pacotes de um projeto.

//Esse projeto tem o chalk e o lodash
//O Chalk está como pacote de desenvolvimento
//Então vamos desinstaçar o lodash
// npm uninstall <nome>
//depois disso podemos verificar que o lodash
//desaparece das dependencias do projeto
//e da pasta node modules

//(Para fazer novamente, instale o lodash
const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 7, 8];

console.log(chalk.bgRed.bold(a));
console.log(chalk.bgBlue.bold(b));
