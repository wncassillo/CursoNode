import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const basePath = path.join(dirname, "templates");

//Using the same project as 6-3, now to learn how to ger parameters from the url.

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  //gets the 'id' from the params in the req
  console.log(`Searching for user: ${id}`);
  res.sendFile(`${basePath}/users.html`);
  //simulates a search and a redirect to determined users page
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(basePath);
  console.log(`Running in port ${port}.`);
});
