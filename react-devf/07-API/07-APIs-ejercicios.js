const express = require("express");
const request = require("request");

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
    res.status(200).send(req.params);
  });
  
  // 4.- Agrega un endpoint '/api/swapi' que responda a una petición de tipo GET con el personaje solicitado de
  //                     https://swapi.co/
  //     El cliente debe mandar el número de personaje mediante params. La respuesta del servidor debe lucir algo así
  //                 {'personaje': {
  //                     'name': 'Luke Skywalker',
  //                     ...,
  //                 }}
  app.get("/api/swapi/:character", (req, res) => {
    // console.log(req.body);
    const promiseAPI = new Promise((resolve, reject) => {
      // There are 87 characters
      const swapi_url_people = `https://swapi.co/api/people/${
        req.params.character
      }/`;
      request.get(swapi_url_people, (err, res, body) => {
        if (res.statusCode === 200) {
          //   parse body to JSON
          const jsonCharacter = JSON.parse(body);
          resolve(jsonCharacter);
        } else {
          reject("Algo salio mal....");
        }
      });
    });
  
    promiseAPI
      .then(jsonCharacter => {
        // console.log("**************  " + jsonCharacter.name + "  **************"); // The End...
        console.log(
          "Character No. " + req.params.character + "  is: " + jsonCharacter.name
        );
        res.status(200).send({
          message: "user created!, No. " + req.params.character,
          user: jsonCharacter.name
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
  




app.listen(port, () =>
  console.log(`Example app-exercise listening on port ${port}!!`)
);
