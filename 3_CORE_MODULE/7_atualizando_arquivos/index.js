import http from "http"
import fs from "fs"
import url from "url"

const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    if(!name) {
        fs.readFile('index.html', function (err, data){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else {
        const nameNewLine = name + ',\r\n'

        fs.appendFile('arquivo.txt', nameNewLine, function(err,data) {
            res.writeHead(302, {  //status de redirect
                Location: '/'
            })
            return res.end()
        })

    }

})

server.listen(port, () =>{
    console.log(`Servidor ativo na porta: ${port}`)
})

