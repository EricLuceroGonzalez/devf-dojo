const request = require("request");
const swapi_url = "https://swapi.co/api/people/13";

// request.get(swapi_url, (err, res, body) => {
//   const json = JSON.parse(body);
//   console.log(`El personaje ${json.name} aparece en :`);
//   // console.log(json.films);
//   for (let i = 0; i < json.films.length; i++) {
//     request(json.films[i], (err, res, body) => {
//       const eachFilm = JSON.parse(body);
//       console.log(
//         "\t" + eachFilm.title + ", (" + eachFilm.release_date.slice(0, 4) + ")"
//       );
//     });
//   }
// });

// Podemos tratar los posibles errores con Promises
const promise_swapi = new Promise((resolve, reject) => {
  console.log("Inside promise");

  // Make request:
  request.get(swapi_url, (err, res, body) => {
    if (res.statusCode === 200) {
      const json = JSON.parse(body);
      // Send the resolve:
      resolve(json);
    } else {
      reject("Algo salio mal.....");
    }
  });
});

promise_swapi
  .then(res => {
    console.log(`El personaje ${res.name} aparece en :`);
    // console.log(json.films);
    for (let i = 0; i < res.films.length; i++) {
      request(res.films[i], (err, res, body) => {
        const eachFilm = JSON.parse(body);
        console.log(
          "\t" +
            eachFilm.title +
            ", (" +
            eachFilm.release_date.slice(0, 4) +
            ")"
        );
      });
    }
  })
  .catch(err => {
    console.log(err);
  });
