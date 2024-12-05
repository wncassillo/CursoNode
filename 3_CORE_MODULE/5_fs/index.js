import fs from "fs";
import http from "http";
//Carregando uma página html por meio do fs, e hosteando ela pelo http

const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile("mensagem.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Servidor ativo na porta: ${port}`);
});
