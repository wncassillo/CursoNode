import chalk from "chalk";
import _ from "lodash";
//Instalando modulos de desenvolvimento
// npm instal --save-dev <nome>
//instala o pacote, mas só para ser usado na versão de desenvolvimento
//o pacote fica em outra "categoria" no package.json
//facilitando para separar o que vai ser usado só no desenvolvimento
//e o que fica no projeto

const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 7, 8];

const diff = _.difference(a, b);
console.log(chalk.bgRed.bold(diff));
//além de dependencias de desenvolvimento, esse projeto também foi
// utilizado para estudar sobre a atualização de módulos
// npm update -> todos, npm update <nome> -> específico
// npx npm-check-updates -> checa por atualizações
