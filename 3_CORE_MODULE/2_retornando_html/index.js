import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Status de conexão bem sucedida
  res.setHeader("Contenty-Type", "text/html");
  res.end(
    "<h1>Esse texto e HTML. E isso e um server http no Node.</h1><p>Testando Atualização.</p>"
  );
});

server.listen(port, () => {
  console.log(`Servidor ativo na porta: ${port}`);
});
