import http from "http"
import url from "url"
//Usando os dois modulos em conjunto, conseguimos criar uma página html em nosso servidor http
//Que recebe o nome do usuario como informação na sua url, e usando o modulo de url, conseguimos
//alterar a página usando a informação obtida do html.

const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200 // Status de conexão bem sucedida
    res.setHeader("Contenty-Type","text/html")

    if(!name){
        res.end(
            "<h1>Preencha seu nome.</h1><form method='GET'><input type='text' name='name'/><input type='submit' value='Enviar'></form>"
            )
    } else {
        res.end(
            `<h1>Seja bem-vindo ${name}!</h1>`
            )
    }
})


server.listen(port, () =>{
    console.log(`Servidor ativo na porta: ${port}`)
})

