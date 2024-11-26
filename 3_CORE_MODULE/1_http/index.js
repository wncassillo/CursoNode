import http from "http"
//modulo para criar servidores http

const port = 3000
//const com o numero da porta

const server = http.createServer((req, res) => {
    //cria o server

    res.write("Ola HTTP")
    res.end()
})

server.listen(port, () =>{ //define a porta do server
    console.log(`Servidor ativo na porta: ${port}`)
})

//Para parar o serviço no terminal
//Ctrl + c