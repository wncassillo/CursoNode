import fs from "fs";

// Exibe detalhes sobre o arquivo no console
const arquivo = "pastasemnada"; //caminho até o "arquivo" que sera analisado
// pastasemnada -> uma pasta
// novoarquivo -> um arquivo .txt

fs.stat(arquivo, (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isSymbolicLink());
  console.log(stats.ctime);
  console.log(stats.size);
});
