import fs from "fs"

if(!fs.existsSync('./minhapasta')) {
    console.log("Essa pasta não existe")
    fs.mkdirSync("minhapasta")
} else {
    console.log("A Pasta existe.")
}

