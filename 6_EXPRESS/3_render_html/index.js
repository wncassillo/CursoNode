import express from "express";
import path from "path";
import { fileURLToPath } from "url"; //Required to get __dirname in ES Modules

//adapting __dirname for es modules
const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const basePath = path.join(dirname, "templates");
// "new" absolute path for templates folder.x'

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(basePath);
  console.log(`Running in port ${port}.`);
});
