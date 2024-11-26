 //para rodar, apague o 'arquivo.txt'
import fs from "fs"

console.log("início")

fs.writeFile('arquivo.txt', "Olá, fui criado pelo assíncrono.", function(err) {
    setTimeout(function() {
        console.log("Arquivo criado");
    },1000);
    });

console.log("fim")

//execução assincrona
//Node não espera a função "terminar" para continuar para as próximas linhas de código
//a criação do txt tem um "delay"