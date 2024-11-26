//npm init
//npm install chalk
//npm install inquirer
import chalk from "chalk";
import inquirer from "inquirer";

inquirer
  .prompt(
    //abrindo a função
    [
      //abrindo um "array de perguntas"
      {
        //abrindo um elemento pergunta da array
        name: "nome",
        message: "Qual seu nome? ",
      }, //fechando elemento
      {
        name: "idade",
        message: "Quantos anos você tem? ",
      },
    ]
  )
  .then((answer) => {
    //validando se as respostas não estão vazias
    if (!answer.nome || !answer.idade) {
      throw new Error("As respostas são obrigatórias.");
    }
    console.log(
      chalk.bgYellow.black(
        `O nome do usuário é ${answer.nome} e ele tem  ${answer.idade} anos de idade.`
      )
    );
  })
  .catch((err) => console.log(err));
