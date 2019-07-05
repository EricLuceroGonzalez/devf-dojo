// 07-js-API
// From documentation: Express `Hello World` at  https://expressjs.com/en/starter/hello-world.html

const express = require("express");
const app = express();
const port = 3000;

// To parse a boydy to json
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// When some one calls .get() we catch the request data and send a response data
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

// app.get("/api/v1/prueba", (req, res) => {
//   res.status(200).send({ message: "ok" });
// });

app.delete("/api/v1/prueba", (req, res) => {
  res.status(333).send({ message: "Hiciste post!" });
});

// When someone calls post() do this:
app.post("/api/v1/usuario", (req, res) => {
  console.log(req.body);
  res.status(201).send({ message: "user created!", user: req.body });
});

// Another test get
app.get("/api/v1/articulo", (req, res) => {
    console.log(req.query);
    res.status(200).send({ message: "todo cool!" });
  });


  // Now with param
app.get("/api/v1/articulo/:id", (req, res) => {
    console.log(req.params);
    res.status(200).send({ message: "todo cool! -- (id)" });
  });

  // Now with query
  app.get("/api/v1/articulo/book=aaaa?author=julio", (req, res) => {
    console.log(req.params);
    res.status(200).send({ message: "todo cool! -- (id)" });
  });



app.listen(port, () => console.log(`Example app listening on port ${port}!!`));
