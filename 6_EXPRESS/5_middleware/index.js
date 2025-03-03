import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const basePath = path.join(dirname, "templates");

//using the same thing we build in 6-3, to show an example of middleware.
//creating a little example middleware
const checkAuth = function (req, res, next) {
  req.authStatus = true; //simullating an auth result

  if (req.authStatus) {
    console.log("Logged in, you may continue");
    next();
  } else {
    console.log("You're not logged in, log in to cotinue.");
    next();
  }
};
app.use(checkAuth);
//

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(basePath);
  console.log(`Running in port ${port}.`);
});
