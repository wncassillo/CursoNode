import fs from "fs"

//const arquivo = "novoarquivo.txt"
const arquivo = "pasta"


fs.stat(arquivo, (err, stats) => {
    if(err){
        console.log(err)
        return
    }

    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.ctime)
    console.log(stats.size)
})