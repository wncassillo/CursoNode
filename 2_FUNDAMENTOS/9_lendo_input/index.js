// Pergunta é feita no console, recebe uma resposta e 'reage' a resposta.
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual time você torce? ", (time) =>{
    if(time === "Corinthians"){
        console.log("Aí não, esse aí é paia.")
    } else {
    console.log(`Eu também! Vai ${time} !`)
    }
    readline.close()
})