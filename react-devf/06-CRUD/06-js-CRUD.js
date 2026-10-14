// CRUD
const request = require("request");

let api_url = "https://goodreads-devf-aaron.herokuapp.com//api/v1/authors/";

//From request documentation : https://github.com/request/request
// request.post('http://service.com/upload', {form:{key:'value'}})

// Create the json we will send:
const jsonToSend = {
  name: "Eric",
  last_name: "Lucero",
  nacionalidad: "USA",
  biography: "Always awake",
  gender: "M",
  age: 31
};

const createAuthor = new Promise((resolve, reject) => {
  request.post(api_url, { form: jsonToSend }, (err, res, body) => {
    res.statusCode === 201
      ? resolve(JSON.parse(body))
      : reject({
          respuesta: JSON.parse(body),
          error: err
        });
  });
});

// createAuthor
//   .then(posted => {
//     console.log("Autor creado\n", posted);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// *****   *****   *****   *****   *****   Best POST Method   *****   *****      *****   *****
// Define the create arrow-function   (input values) => {do something}:
const creatingAuthor = (
  name,
  last_name,
  nacionalidad,
  biography,
  gender,
  age
) => {
  // Create the json we will send:
  const jsonToSend = {
    name: name,
    last_name: last_name,
    nacionalidad: nacionalidad,
    biography: biography,
    gender: gender,
    age: age
  };
  // Return the promise (this function will be this after return)
  return new Promise((resolve, reject) => {
    // Post method:
    request.post(api_url, { form: jsonToSend }, (err, res, body) => {
      // If post is successfull => resolve. If not reject:
      res.statusCode === 201
        ? resolve(JSON.parse(body))
        : reject({
            respuesta: JSON.parse(body),
            error: err
          });
    });
  });
};

const getAuthors = new Promise((resolve, reject) => {
  request.get(api_url, (err, res, body) => {
    const json = JSON.parse(body);
    res.statusCode === 200
      ? resolve(json)
      : reject({ respuesta: JSON.parse(body), error: err });
  });
});

// getAuthors
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

const authorId = 2683;
const getAuthor = new Promise((resolve, reject) => {
  request.get(api_url + authorId.toString(), (err, res, body) => {
    const json = JSON.parse(body);
    res.statusCode === 200
      ? resolve(json)
      : reject({ respuesta: JSON.parse(body), error: err });
  });
});

getAuthor
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

creatingAuthor("Eric", "Lucero", "USA", "coffee please", "M", 30)
  .then(res => console.log(res))
  .catch(err => console.log(err));

creatingAuthor("Julio", "Cortazar", "MX", "perseguidor", "M", 33)
  .then(res => console.log(res))
  .catch(err => console.log(err));
