import fs from "fs"

fs.unlink('arquivo.txt', function(err){
    if(err) {
        console.log(err)
        return
    }
    console.log('Arquivo removido.')
})
// Obviamente, para rodar esse código deve existir o arquivo.txt