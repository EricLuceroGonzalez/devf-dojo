// 07-js-API
// From documentation: Express `Hello World` at  https://expressjs.com/en/starter/hello-world.html

const express = require("express");
const app = express();
const port = 3000;

// When some one calls .get() we catch the request data and send a response data
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/api/v1/prueba", (req, res) => {
  res.status(200).send({ message: "ok" });
});

app.delete("/api/v1/prueba", (req, res) => {
  res.status(333).send({ message: "Hiciste post!" });
});

// When someone calls post() do this:
app.post("/api/v1/usuario", (req, res) => {
  console.log(req.body);
  res.status(201).send({ message: "user created!" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!!`));
