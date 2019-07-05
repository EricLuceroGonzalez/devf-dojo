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

// 1.- Agrega un endpoint '/api/' que responda a una petición de tipo GET con un código de estado 200
//     y el siguiente json:  {'mensaje':'hola mundo'}
app.get("/api/", (req, res) => {
  res.status(200).send({ message: "Hola mundo!!" });
});

// 2.- Agrega un endpoint '/api/suma' que responda a una petición de tipo GET con la suma de dos números que
//     reciba mediante las querys num1 y num2. El servidor debe responder con un código de estado 200 y un json
//     como el siguiente:    {'resultado': 7}
app.get("/api/suma/", (req, res) => {
  theSum = Number(req.query.num1) + Number(req.query.num2);
  console.log("suma: " + theSum);
  res.status(200).send({ message: "SUMA!!" });
});

// 3.- Agrega un endpoint '/api/usuario/' que responda a una petición de tipo GET con el nombre que sea
//     recibido a través de params. El servidor debe responder con un código de estado 200 y un json como este:
//                   {'usuario': 'Edwin'}
app.get("/api/:usuario", (req, res) => {
  // console.log(req.body);
  console.log(req.params);
  res.status(200).send(req.params );
});

// 4.- Agrega un endpoint '/api/swapi' que responda a una petición de tipo GET con el personaje solicitado de
//                     https://swapi.co/
//     El cliente debe mandar el número de personaje mediante params. La respuesta del servidor debe lucir algo así
//                 {'personaje': {
//                     'name': 'Luke Skywalker',
//                     ...,
//                 }}
app.get("/api/swapi", (req, res) => {
  // console.log(req.body);
  console.log(req.params);
  res.status(200).send(req.params );
});



// // When some one calls .get() we catch the request data and send a response data
// app.get("/", (req, res) => {
//   res.send("Hello World!!!");
// });

// app.get("/api/v1/prueba", (req, res) => {
//   res.status(200).send({ message: "ok" });
// });

// app.delete("/api/v1/prueba", (req, res) => {
//   res.status(333).send({ message: "Hiciste post!" });
// });

// // When someone calls post() do this:
// app.post("/api/v1/usuario", (req, res) => {
//   console.log(req.body);
//   res.status(201).send({ message: "user created!", user: req.body });
// });

// // Another test get
// app.get("/api/v1/articulo", (req, res) => {
//   console.log(req.query);
//   console.log(req.query);
//   res.status(200).send({ message: "todo cool!" });
// });

// // Now with param
// app.get("/api/v1/articulo/:id/", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   res.status(200).send({ message: "todo cool! -- (id1)" });
// });

// // Now with query
// app.get("/api/v1/articulo/", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   res.status(200).send({ message: "todo cool! -- (id2)" });
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!!`));
