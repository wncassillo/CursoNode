import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);
const basePath = path.join(dirname, "../templates");

const userRouter = Router(); //Creates router instance

userRouter.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userForm.html`);
});

userRouter.post("/save", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  console.log(`User's name is '${name}' and they are ${age} years old.`);
  res.sendFile(`${basePath}/userForm.html`);
});

userRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Searching for user: ${id}`);
  res.sendFile(`${basePath}/users.html`);
});

export { userRouter };
