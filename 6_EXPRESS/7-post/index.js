import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const basePath = path.join(dirname, "templates");

//Using the same project as 6-6, now to take a look at POST, and how to acess information it holds.

//app.use (when not specified) means that all req will go trough it, like in this case
//all requisitions will pass trough express.urlencoded and express.json
app.use(
  express.urlencoded({
    //parses form data (from HTML forms) and makes it available in req.body
    extended: true,
  })
);

app.use(express.json()); //parses req's informations into a js object

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userForm.html`);
});

app.post("/users/save", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  console.log(`User's name is '${name}' and they are ${age} years old.`);
  res.sendFile(`${basePath}/userForm.html`);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Searching for user: ${id}`);
  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(basePath);
  console.log(`Running in port ${port}.`);
});
