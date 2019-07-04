const request = require("request");

// // -------------------------------------------------------------------------------------------
// // 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.  https://pokeapi.co/

// pokeApi_url = "https://pokeapi.co/api/v2/pokemon/13/";
// const promiseA = new Promise((resolve, reject) => {
//   request.get(pokeApi_url, (err, res, body) => {
//     if (res.statusCode === 200) {
//       const json = JSON.parse(body);
//       resolve(json);
//     } else {
//       reject("Algo salio mal.....");
//     }
//   });
// });
// promiseA
//   .then(res => {
//     console.log(`El pokemon ${res.name} tiene los tipos:`);
//     for (let i = 0; i < res.types.length; i++) {
//       console.log("\t" + res.types[i].type.name);
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });
// // ----------------     ----------------   ----------------     ----------------
// const promiseB = new Promise((resolve, reject) => {
//   book = "23t";
//   openlibrary_url = `http://openlibrary.org/search.json?q=${book}`;

//   request.get(openlibrary_url, (err, res, body) => {
//     if (res.statusCode === 200) {
//       const json = JSON.parse(body);
//       resolve(json);
//     } else {
//       reject("Algo salio mal....");
//     }
//   });
// });
// //2.-     Buscar un libro y traer el o los autores del primer libro
// promiseB
//   .then(json => {
//     console.log("inside then");
//     console.log(json.docs[0].title + "; Author:  ");
//     for (let i = 0; i < json.docs[0].author_name.length; i++) {
//       console.log(json.docs[0].author_name[i]);
//     }
//   })
//   .catch(err => {
//     err;
//   });

// // 3.- Hacer una petición por autor y devolver la lista de sus libros
// //         http://openlibrary.org/search.json?author=asimov

// const promiseC = new Promise((resolve, reject) => {
//   author = "Gertrude Steins";
//   openlibrary_url_author = `http://openlibrary.org/search.json?author=${author}`;
//   request.get(openlibrary_url_author, (err, res, body) => {
//     if (res.statusCode === 200) {
//       const json = JSON.parse(body);
//       resolve(json);
//     } else {
//       reject("Algo salio mal...");
//     }
//   });
// });

// promiseC
//   .then(json => {
//     console.log(json["numFound"]);
//     // Get the items of json arrray:
//     for (let i = 0; i < json.docs.length; i++) {
//       console.log(i + "--  " + json.docs[i].title);
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });

// // // 5.- Hacer una petición a la swapi a un personaje y obtener sus películas.
// // //                     https://swapi.co/

// const promiseD = new Promise((resolve, reject) => {
//   const character = "132"; // There are 87 characters
//   const swapi_url_people = `https://swapi.co/api/people/${character}/`;
//   request.get(swapi_url_people, (err, res, body) => {
//     if (res.statusCode === 200) {
//       //   parse body to JSON
//       const jsonCharacter = JSON.parse(body);
//       resolve(jsonCharacter);
//     } else {
//       reject("Algo salio mal....");
//     }
//   });
// });

// promiseD
//   .then(jsonCharacter => {
//     console.log("**************  " + jsonCharacter.name + "  **************"); // The End...
//     console.log("Appears on: \n");
//     // Go along each film
//     for (let i = 0; i < jsonCharacter.films.length; i++) {
//       request.get(jsonCharacter.films[i], (err, res, body) => {
//         if (res.statusCode === 200) {
//           const eachFilm = JSON.parse(body);
//           console.log(
//             eachFilm.title + ", (" + eachFilm.release_date.slice(0, 4) + ")"
//           );
//         }
//       });
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });

// // 7.- Traer los primeros 151 pokemon de la primera generacion y devolver un objeto con el nombre, sus moves, tipos, tamaño
// //     y peso. // name moves types height weight

const promiseE = new Promise((resolve, reject) => {
  pokeAPI_url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5";

  return request.get(pokeAPI_url, (err, res, body) => {
    if (res.statusCode === 200) {
      const json = JSON.parse(body);
      resolve(json);
      // resolve(Pokemons);
    } else {
      reject("Algo salio mal... pokemons");
    }
  });
});
Pokemons = [];

promiseE
  .then(json => {
    // console.log(json);
    class Pokemon {
      constructor(id, name, moves, types, height, weight) {
        this.id = id;
        this.name = name;
        this.moves = moves;
        this.types = types;
        this.height = height;
        this.weight = weight;
      }
    }
    for (let i = 0; i < json.results.length - 1; i++) {
      request.get(json.results[i].url, (err, res, body) => {
        pokemon = new Pokemon();

        const json = JSON.parse(body);
        const movesArray = [];
        const typesArray = [];
        for (let i = 0; i < json.moves.length - 1; i++) {
          movesArray.push(json.moves[i].move.name);
        }
        for (let i = 0; i < json.types.length - 1; i++) {
          typesArray.push(json.types[i].type.name);
        }
        pokemon.id = i;
        pokemon.name = json.name;
        pokemon.moves = i; //movesArray;
        pokemon.types = typesArray;
        pokemon.weight = json.weight;
        pokemon.height = json.height;

        Pokemons.push(pokemon);

        // console.log(Pokemons);
      });
    }
  })
  .catch(errr => {
    console.log(err);
  });

const getAllPokemons = () => {
  return new Promise((resolve, reject) => {
    pokeAPI_url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5";

    request.get(pokeAPI_url, (err, res, body) => {
      res.statusCode === 200
        ? resolve(JSON.parse(body))
        : reject({
            respuesta: "Algo salio mal... pokemons",
            error: err
          });
    });
  });
};

getAllPokemons()
  .then(json => {
    // console.log(json);
    class Pokemon {
      constructor(id, name, moves, types, height, weight) {
        this.id = id;
        this.name = name;
        this.moves = moves;
        this.types = types;
        this.height = height;
        this.weight = weight;
      }
    }
    for (let i = 0; i < json.results.length - 1; i++) {
      request.get(json.results[i].url, (err, res, body) => {
        pokemon = new Pokemon();

        const json = JSON.parse(body);
        const movesArray = [];
        const typesArray = [];
        for (let i = 0; i < json.moves.length - 1; i++) {
          movesArray.push(json.moves[i].move.name);
        }
        for (let i = 0; i < json.types.length - 1; i++) {
          typesArray.push(json.types[i].type.name);
        }
        pokemon.id = i;
        pokemon.name = json.name;
        pokemon.moves = i; //movesArray;
        pokemon.types = typesArray;
        pokemon.weight = json.weight;
        pokemon.height = json.height;

        Pokemons.push(pokemon);
        console.log(Pokemons);
      });
    }
  })
  .catch(err => {
    console.log(err);
  });
// // 6.- Devolver los asteroides que sean potencialmente peligrosos para la tierra de la semana pasada hasta hoy.
// //                     https://api.nasa.gov/

// const promiseNASA = new Promise((resolve, reject) => {
//   apiKey = "xERxdQqz2PW9yLdg43sshxX2TUmnTY4YWd77WEG0";
//   const nasaApi = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-06-20&api_key=${apiKey}`;
//   request.get(nasaApi, (err, res, body) => {
//     if (res.statusCode === 200) {
//       const json = JSON.parse(body);
//       resolve(json);
//     } else {
//       reject("Houston......");
//     }
//   });
// });

// promiseNASA
//   .then(json => {
//     // console.log(json.near_earth_objects);
//     console.log("potentially_hazardous_asteroid!!!");
//     for (var key in json.near_earth_objects) {
//       // skip loop if the property is from prototype
//       if (!json.near_earth_objects.hasOwnProperty(key)) continue;
//       console.log("-----------------------");
//       console.log("Date: " + key);
//       var obj = json.near_earth_objects[key];

//       for (var prop in obj) {
//         if (obj[prop].is_potentially_hazardous_asteroid) {
//           console.log("\t name: " + obj[prop].name);
//           // Get into the key: "close_approach_data"
//           for (var key in obj[prop].close_approach_data) {
//             console.log(
//               "\tLast time approach: " +
//                 obj[prop].close_approach_data[key].close_approach_date
//             );
//             console.log(
//               "\tDistance (km): " +
//                 obj[prop].close_approach_data[key].miss_distance.kilometers
//             );
//             console.log("-----------------");
//           }
//         }
//       }
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });
