//npm install chalk@4.1.2 versão q funcionada com require
//const chalk = require("chalk")
// não mais necessário, pode usar o atual, só fazer o import desse jeito:
import chalk from "chalk";
// basta adicionar ' "type": "module" ' no package.json após o license

const nota = 8;

if (nota >= 7) {
  console.log(
    chalk.green(`Parabéns! Você está aprovado! Sua nota foi ${nota}!`)
  );
  //usando o chal para mudar cor do texto
} else {
  console.log(
    chalk.red.bgBlue(
      `Estude mais! Você vai fazer recuperação. A sua nota foi ${nota}.`
    )
  );
  //chalk mudando cor do texto e do bg do texto
}
