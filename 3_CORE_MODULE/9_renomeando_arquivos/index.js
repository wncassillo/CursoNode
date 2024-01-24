import fs from "fs"

const arqAntigo = "arquivo.txt"
const arqNovo = "novo.txt"


fs.rename(arqAntigo, arqNovo, function(err){
    if(err){
        console.log(err)
        return
    }

    console.log(`O Arquivo "${arqAntigo}" foi renomeado para "${arqNovo}".`)
})
//para esse código rodar corretamente deve existir um arquivo.txt.