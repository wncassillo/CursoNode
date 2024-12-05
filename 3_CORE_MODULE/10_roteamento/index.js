import fs from "fs";
import http from "http";
import url from "url";

const port = 3000;

//Roteamento das paginas html e pagina error 404

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1);

  if (filename.includes("html") && fs.existsSync(filename)) {
    //Se o parametro da url tiver "html" e existir um arquivo com o nome especificado
    //a pagina html correspondente sera carregada
    //do contrário, é redircionado para  o 404.html
    fs.readFile(filename, function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    fs.readFile("404.html", function (err, data) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor ativo na porta: ${port}`);
});
