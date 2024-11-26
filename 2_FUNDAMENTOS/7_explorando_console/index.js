//mais de um valor
const w = "esse método é mais utilizado.";
const x = 12;
const y = "estudando Node.js";
const z = [0, 1, 2];

console.log(w, x, y, z);

//contagem de impressões
console.count(`O valor de X é: ${x}, contagem`);
console.count(`O valor de X é: ${x}, contagem`);
console.count(`O valor de X é: ${x}, contagem`);
console.count(`O valor de X é: ${x}, contagem`);

// variavel entre string
console.log("Eu estou %s no dia de hoje", y); //Metodo mais antigo
console.log(`Hoje em dia ${w}`);
// hj em dia é mais utilizado o `texto ${variavel} texto`

//limpar console
setTimeout(() => {
  console.clear();
}, 3000);
