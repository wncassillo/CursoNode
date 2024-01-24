//npm install chalk@4.1.2 versão q funcionada com require
//const chalk = require("chalk")
import chalk from "chalk"

const nota = 1

if(nota >= 7) {
    console.log(chalk.green(`Parabéns! Você está aprovado! Sua nota foi ${nota}!`))
} else {
    console.log(chalk.green.bgBlue(`Estude mais! Você vai fazer recuperação. ${nota}.`))
}

