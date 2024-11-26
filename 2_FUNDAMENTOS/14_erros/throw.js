//const X = '10' //X é uma String
const X = "10"; //X é um número

//checar se x é um número, mostrando que quando ele não é um numero mas uma string o programa não vai adiante.
if (!Number.isInteger(X)) {
  throw new Error("X não é um número inteiro.");
}
console.log("O Programa segue sua execução normalmente...");

//propósito é realmente gerar um erro
