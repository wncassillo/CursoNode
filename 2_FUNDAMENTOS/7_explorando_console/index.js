//mais de um valor
const x = 12
const y = "estudando Node.js"
const z = [0, 1, 2]

console.log(x, y, z)

//contagem de impressões
console.count(`O valor de X é: ${x}, contagem`)
console.count(`O valor de X é: ${x}, contagem`)
console.count(`O valor de X é: ${x}, contagem`)
console.count(`O valor de X é: ${x}, contagem`)

// variavel entre string
console.log("Eu estou %s no dia de hoje",y)
// hj em dia é mais utilizado o `texto ${variavel} texto`

//limpar console
setTimeout(() => {
    console.clear()
}, 3000);