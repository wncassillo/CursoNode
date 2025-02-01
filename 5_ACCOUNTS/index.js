import chalk from "chalk";
import fs from "fs";
import inquirer from "inquirer";

//Project "Accounts". A simple project that mimics a simplified banking system

operation();

//The "Starting funcion" of the project. A "Main Menu" where the user choses what it wants to do.
function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depósito",
          "Sacar",
          "Transferência",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"]; //User's choice is obtained.
      if (action === "Criar Conta") {
        createAccount();
      } else if (action === "Consultar Saldo") {
        getAccountBalance();
      } else if (action === "Depósito") {
        deposit();
      } else if (action === "Sacar") {
        withdraw();
      } else if (action === "Transferência") {
        transfer();
      } else if (action === "Sair") {
        console.log(chalk.bgBlueBright("Obrigado por usar o Accounts!"));
        console.log("Encerrando Sistema.");
        process.exit();
      }
    })
    .catch((err) => console.log(err));
}

function createAccount() {
  //Welcoming message, then calls for the real account creation method
  console.log(chalk.bgGreen.black("Obrigado por escolher o Accounts!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir:"));
  buildAccount();
}

//creates a new account with the info provided by the user.
function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome para a sua nova conta:",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"]; //Saving the account name in a variable

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

//checks if an account exists
function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgYellow.black("A conta específicada não existe."));
    return false;
  }
  return true;
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
      const accountName = answer["accountName"]; //calls checking account method
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

//add a value to an account balance
function addAmount(accountName, amount) {
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

//get a account info
function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });
  return JSON.parse(accountJSON);
}

//Shows Account balance
function getAccountBalance() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual o nome da sua conta?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!checkAccount(accountName)) {
        //verifies if a account with given name exists
        return getAccountBalance();
      }

      const accountData = getAccount(accountName);

      console.log(
        chalk.bgBlue.black(
          `O Saldo da conta especificada é de RS$${accountData.balance}`
        )
      );
      operation();
    })
    .catch((err) => console.log(err));
}

function withdraw() {
  inquirer
    .prompt([
      {
        name: "accountname",
        message: "De qual conta você deseja realizar o saque?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountname"];
      if (!checkAccount(accountName)) {
        return withdraw();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Qual a quantia que você deseja sacar?",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];
          removeAmount(accountName, amount, withdraw);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

//removes an ammount from an account balance
function removeAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(chalk.bgRed.black("Ocorreu um erro, tente novamente."));
    return withdraw();
  }

  if (accountData.balance < amount) {
    console.log(chalk.bgRed.black("Saldo insuficiente para este saque"));
    return withdraw();
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err);
    }
  );

  console.log(
    chalk.bgGreen.white(
      `Saque de R${amount},00 efetuado. O novo Saldo da conta é de R$${accountData.balance}`
    )
  );
  operation();
}

//1st transfer action, defines from witch account will send the money
function transfer() {
  inquirer
    .prompt([
      {
        name: "senderAccountName",
        message: "A partir de qual conta você deseja realizar a transferência?",
      },
    ])
    .then((answer) => {
      const senderAccount = answer["senderAccountName"];
      if (!checkAccount(senderAccount)) {
        return transfer();
      }
      defineTransferRecipient(senderAccount);
    })
    .catch((err) => console.log(err));
}
//2nd transfer action, defines witch account will recieve the money
function defineTransferRecipient(senderAccountName) {
  inquirer
    .prompt([
      {
        name: "recipientAccountName",
        message: "Para qual conta você deseja realizar sua transferência?",
      },
    ])
    .then((answer) => {
      const recipientAccountName = answer["recipientAccountName"];
      if (!checkAccount(recipientAccountName)) {
        return defineTransferRecipient(senderAccountName);
      }
      defineTransferValue(senderAccountName, recipientAccountName);
    })
    .catch((err) => console.log(err));
}
//3rd transfer action, defines the amount that will be transfered.
function defineTransferValue(senderAccountName, recipientAccountName) {
  console.log(`${senderAccountName} , ${recipientAccountName}`);
  inquirer
    .prompt([
      {
        name: "transferAmount",
        message: "Qual a quantia que você deseja transferir?",
      },
    ])
    .then((answer) => {
      const transferAmount = answer["transferAmount"];
      transferProcess(senderAccountName, transferAmount, recipientAccountName);
    })
    .catch((err) => console.log(err));
}
//4th and last transfer action, the one that really do the job.
function transferProcess(senderName, amount, recipientName) {
  const senderData = getAccount(senderName);
  const recipientData = getAccount(recipientName);

  if (!amount) {
    console.log(chalk.bgRed.black("Ocorreu um erro, tente novamente."));
    return transfer();
  }
  if (senderData.balance < amount) {
    console.log(
      chalk.bgRed.black("Saldo insuficiente para esta transferência")
    );
    return transfer();
  }

  senderData.balance = parseFloat(senderData.balance) - parseFloat(amount);
  recipientData.balance =
    parseFloat(recipientData.balance) + parseFloat(amount);

  fs.writeFileSync(
    `accounts/${senderName}.json`,
    JSON.stringify(senderData),
    function (err) {
      console.log(err);
    }
  );

  fs.writeFileSync(
    `accounts/${recipientName}.json`,
    JSON.stringify(recipientData),
    function (err) {
      console.log(err);
    }
  );

  console.log(
    chalk.bgYellow.white(
      `${senderName} transferiu R$${amount},00 para ${recipientName}`
    )
  );
  operation();
}
