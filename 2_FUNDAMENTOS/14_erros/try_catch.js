const x = 10

try{
    x = 2 //tentando alterar valor de constantes
} catch(err) {
    console.log(`Erro: ${err}`)
}

console.log('A execução continua mesmo com erro.')