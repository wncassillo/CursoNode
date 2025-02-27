import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);
const basePath = path.join(dirname, "templates");

const app = express();
const port = 3000;

//Using the same project as 6-7, now to learn about routes modules.
import { userRouter } from "./users/index.js";
const users = userRouter;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/users", users);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(basePath);
  console.log(`Running in port ${port}.`);
});
