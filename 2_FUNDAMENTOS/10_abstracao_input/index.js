//const inquirer = require("inquirer")
//método old de import
//fazer igual na linha de baixo:
import inquirer from "inquirer";

//Além disso no package.json do projeto deve ser adicionado:
//"type": "module",
inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual a primeira nota?",
    },
    {
      name: "p2",
      message: "Qual a segunda nota?",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;
    console.log(`A média é: ${media}`);
  })
  .catch((err) => console.log(err));
