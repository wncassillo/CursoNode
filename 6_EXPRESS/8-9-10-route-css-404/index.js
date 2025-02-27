import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);
const basePath = path.join(dirname, "templates");

const app = express();
const port = 3000;

//Using the same project as 6-7,
//learn about routes modules(6-8)
//to apply css using express(6-9)
//and to create a page 404(6-10)

//Router
import { userRouter } from "./users/index.js"; //Importing the router module
const users = userRouter;

//CSS
app.use(express.static("public")); //static files

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

app.use(function (req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`);
});

app.listen(port, () => {
  console.log(basePath);
  console.log(`Running in port ${port}.`);
});
