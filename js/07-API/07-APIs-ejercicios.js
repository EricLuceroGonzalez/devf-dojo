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
//     y el siguiente json:
//                 {'mensaje':'hola mundo'}

// When some one calls .get() we catch the request data and send a response data
app.get("/api/", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  res.status(200).send({ message: "Hola mundo!!" });
});

// 2.- Agrega un endpoint '/api/suma' que responda a una petición de tipo GET con la suma de dos números que
//     reciba mediante las querys num1 y num2. El servidor debe responder con un código de estado 200 y un json
//     como el siguiente:
//                     {'resultado': 7}
app.get("/api/suma", (req, res) => {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    res.status(200).send({ message: "Hola mundo!!" });
  });


  // Another test get
app.get("/api/v1/articulo", (req, res) => {
    console.log(req.query);
    console.log(req.params);
    res.status(200).send({ message: "todo cool!" });
  });



// 3.- Agrega un endpoint '/api/usuario/' que responda a una petición de tipo GET con el nombre que sea
//     recibido a través de params. El servidor debe responder con un código de estado 200 y un json como este:
//                   {'usuario': 'Edwin'}

// 4.- Agrega un endpoint '/api/swapi' que responda a una petición de tipo GET con el personaje solicitado de
//                     https://swapi.co/
//     El cliente debe mandar el número de personaje mediante params. La respuesta del servidor debe lucir algo así
//                 {'personaje': {
//                     'name': 'Luke Skywalker',
//                     ...,
//                 }}

app.listen(port, () =>
  console.log(`Example app-exercise listening on port ${port}!!`)
);
