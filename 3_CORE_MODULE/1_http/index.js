import http from "http"

const port = 3000

const server = http.createServer((req, res) => {

    res.write("Ola HTTP")
    res.end()
})

server.listen(port, () =>{
    console.log(`Servidor ativo na porta: ${port}`)
})

//Para parar o serviço no terminal
//Ctrl + c