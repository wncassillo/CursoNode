// envio de argumentos via linha de comando
// "node index.js nome=Wilson idade=22" exemplo
// nome e idade

console.log(process.argv); //mostra toda a array de argumentos

const args = process.argv.slice(2); // cria a constante "args" armazenando a array de  args a partir da pos '2'
console.log(args); //imprime o que foi "deixado" na array args

const nome = args[0].split("=")[1]; // cria a constante nome, armazenando especificamente só o valor do arg nome
console.log(nome); //imprime a const nome

const idade = args[1].split("=")[1]; // cria const idade, armazenando especificamente o valor do arg idade
console.log(idade); //imprime a const idade

console.log(`${nome} tem ${idade} ano(s).`); //Print de string que recebe os valores das consts nome e idade.
