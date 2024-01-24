//npm init
//npm install chalk
//npm install inquirer
import inquirer from "inquirer"
import chalk from "chalk"

inquirer.prompt(//abrindo a função
    [//abrindo um "array de perguntas"
    {//abrindo um elemento pergunta da array
        name: "nome",
        message: "Qual seu nome? "
    }, //fechando elemento
    {
        name: "idade",
        message: "E qual a sua idade? "
    }
]).then((answer) => {  
    //validando se as respostas não estão vazias
    if(!answer.nome || !answer.idade){
            throw new Error ("As respostas são obrigatórias.")
        }
    console.log(chalk.bgYellow.black(`O nome do usuário é ${answer.nome} e a idade dele é de ${answer.idade}.`))
}).catch(err => console.log(err))