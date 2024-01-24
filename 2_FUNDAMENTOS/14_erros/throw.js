const X = '10'
//const X = 10

//checar se x é um número

if(!Number.isInteger(X)){
    throw new Error ("X não é um número inteiro.")
}
console.log('Continuando...')