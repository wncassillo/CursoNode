const meuModulo = require("./meu_modulo");
const soma = meuModulo.soma;

soma(5, 1);
soma(9, 2);
//Dois métodos diferentes, o de cima é mais direto,
//mas o de baixo deixa mais claro de que module a função esta vindo
meuModulo.soma(20, 10);
