//Importando módulos internos e externos
import chalk from "chalk";
import fs from "fs";
import inquirer from "inquirer";

//Criando Projeto do "Accounts", primeiro projeto do curso
//que visa imitar de forma básica um sistema bancário

operation();

//Operação "Inicial", onde o usuário escolhe qual função ele deseja
function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: ["Criar Conta", "Acessar Conta", "Depósito", "Sair"],
      },
    ])
    .then((answer) => {
      const action = answer["action"]; //Obtem-se a escolha do usuário
      // Caminhos das escolhas
      if (action === "Criar Conta") {
        createAccount();
      } else if (action === "Acessar Conta") {
        loginAccount();
      } else if (action === "Depósito") {
        deposit();
      } else if (action === "Sair") {
        console.log(chalk.bgBlueBright("Obrigado por usar o Accounts!"));
        console.log("Encerrando Sistema.");
        process.exit();
      }
    })
    .catch((err) => console.log(err));
}

function createAccount() {
  //Mensagem boas vindas, criação de conta
  console.log(chalk.bgGreen.black("Obrigado por escolher o Accounts!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir:"));
  buildAccount();
}

function deposit() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message:
          "Qual o nome da conta em que você deseja realizar o seu depósito?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      //chamando metodo de verificação
      if (!checkAccount(accountName)) {
        console.log("Tente novamente com um nome de conta válido");
        return deposit();
      }
      inquirer
        .prompt([{ name: "amount", message: "Quanto você deseja depositar?" }])
        .then((answer) => {
          const amount = answer["amount"];
          addAmount(accountName, amount);

          operation();
        });
    });
}

function checkAccount(accountName) {
  //método se verifica se uma conta existe
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgYellow.black("A conta específicada não existe."));
    return false;
  }
  return true;
}

function addAmount(accountName, amount) {
  //métodom que adiciona o valor
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(chalk.bgYellow("Ocorreu um erro com o valor inserido."));
    return deposit();
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err);
      return deposit;
    }
  );

  console.log(
    chalk.bgGreen.blueBright(
      `R$ ${amount} foram depositados com sucesso na conta ${accountName}`
    )
  );
}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });
  return JSON.parse(accountJSON);
}

function loginAccount() {
  console.log(chalk.yellow("WIP"));
  operation();
}

function buildAccount() {
  //Criação de Conta
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome para a sua nova conta:",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"]; //Salvando o nome da conta em uma variavel

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }
      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.white(
            "Uma conta com esse nome já existe. Escolha outro nome e tente novamente."
          )
        );
        buildAccount();
        return;
      } else {
        fs.writeFileSync(
          `accounts/${accountName}.json`,
          '{"balance": 0}',
          function (err) {
            console.log(err);
          }
        );
        console.log(chalk.green("Conta Criada com Sucesso!"));
        operation();
      }
    })
    .catch((err) => console.log(err));
}
