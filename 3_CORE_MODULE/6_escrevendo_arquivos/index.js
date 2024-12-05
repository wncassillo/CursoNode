import fs from "fs";
import http from "http";
import url from "url";

const port = 3000;

//Cria um arquivo txt com o nome inserido no campo.

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true);
  const name = urlInfo.query.name;

  if (!name) {
    //Se a url não tiver um parametro name
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    fs.writeFile("arquivo.txt", name, function (err, data) {
      res.writeHead(302, {
        //status de redirect
        Location: "/", //Redirect para um ponto onde novamente, não há um argumento na url
      });
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor ativo na porta: ${port}`);
});
