// import { request } from "https";
const request = require("request");

// // # Peticiones
// // Installing node and npm
// // init npm (npm init)
// // npm i request (package)
// console.log("Corriendo desde NodeJs...");

// // Use Request method:
// // const request = require("request");
// // request.get("http://www.google.com", function(error, response, body) {
// // console.error("error:", error); // Print the error if one occurred
// //   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
// //   console.log("body:", body); // Print the HTML for the Google homepage.
// //   console.log(response.statusCode);
// //   console.log(response.statusCode);
// // });

// // Using Star Wars API
// const swapi_url = "https://swapi.co/api/planets/1";

// request.get(swapi_url, (err, res, body) => {
//   if (res.statusCode === 200) {
//     //   parse body to JSON
//     const json = JSON.parse(body);
//   } else {
//   }
// });

// -------------------------------------------------------------------------------------------
// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
//                     https://pokeapi.co/
pokeApi_url = "https://pokeapi.co/api/v2/pokemon/1/";
request.get(pokeApi_url, (err, res, body) => {
  if (res.statusCode === 200) {
    const json = JSON.parse(body);
    // print squirtle:
    // console.log(json.types);
  }
});

// 2.- Hacer una funcion que haga una peticion (Ejemplo: peticionLibro(“i robot”);
//     Buscar un libro y traer el o los autores del primer libro
//         http://openlibrary.org/search.json?q=i+robot)
// openlibrary_url = 'http://openlibrary.org/search.json?q=i+robot';
pokeApi_url_b = "https://pokeapi.co/api/v2/pokemon/";

const resFunct = book => {
  openlibrary_url = `http://openlibrary.org/search.json?q=${book}`;

  request.get(openlibrary_url, (err, res, body) => {
    if (res.statusCode === 200) {
      const json = JSON.parse(body);
      for (let i = 0; i < json.docs.length; i++) {
        if (json.docs[i].title === book) {
          console.log(
            i +
              "--  " +
              json.docs[i].title +
              "; Author:  " +
              json.docs[i].author_name
          );
        }
      }
    } else {
      console.log("fuck!");
    }
  });
};

const peticion = (book, resFunct) => {
  resFunct(book);
};

peticion("I, Robot", resFunct);

// peticion(pokeApi_url_b, "13", resFunct);

// // 3.- Hacer una petición por autor y devolver la lista de sus libros
// //         http://openlibrary.org/search.json?author=asimov
// console.log(
//   "\n\n3.- Hacer una petición por autor y devolver la lista de sus libros"
// );

// openlibrary_url_b = "http://openlibrary.org/search.json?author=asimov";
// openlibrary_url_c = "http://openlibrary.org/search.json?author=";
// request.get(openlibrary_url_c + "cortazar", (err, res, body) => {
//   if (res.statusCode === 200) {
//     const json = JSON.parse(body);
//     console.log(json["numFound"]);
//     // Get the items of json arrray:
//     for (let i = 0; i < json.docs.length; i++) {
//       console.log(i + "--  " + json.docs[i].title);
//     }
//   } else {
//     console.log("fuck!");
//   }
// });

// // 4.- Hacer una peticion y devolver el género de la banda deseada
// //     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse
// theaudiodb_url = "http://www.theaudiodb.com/api/v1/json/1/search.php?s=";

// // const searchGenero = (url, banda) => {
// request.get(theaudiodb_url + "muse", (err, res, body) => {
//   if (res.statusCode === 200) {
//     const json = JSON.parse(body);
//     for (let i = 0; i < json.artists.length; i++) {
//       console.log('\n\n Genero: ' + json.artists[i].strStyle);
//     }
//   } else {
//     console.log("fuck!");
//   }
// });
// // };

// // 5.- Hacer una petición a la swapi a un personaje y obtener sus películas.
// //                     https://swapi.co/

const swapi_url_people = "https://swapi.co/api/people/";
const character = "4"; // There are 87 characters

request.get(swapi_url_people + character + "/", (err, res, body) => {
  if (res.statusCode === 200) {
    //   parse body to JSON
    const jsonCharacter = JSON.parse(body);
    console.log("**************  " + jsonCharacter.name + "  **************"); // The End...
    console.log("Appears on: \n");
    // Go along each film
    for (let i = 0; i < jsonCharacter.films.length; i++) {
      request.get(jsonCharacter.films[i], (err, res, body) => {
        if (res.statusCode === 200) {
          const eachFilm = JSON.parse(body);
          console.log(
            eachFilm.title + ", (" + eachFilm.release_date.slice(0, 4) + ")"
          );
        }
      });
    }
  } else {
    console.log("statusCode != 200");
  }
});

// 6.- Devolver los asteroides que sean potencialmente peligrosos para la tierra de la semana pasada hasta hoy.
//                     https://api.nasa.gov/

apiKey = "xERxdQqz2PW9yLdg43sshxX2TUmnTY4YWd77WEG0";
// const nasaApi = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`
const nasaApi = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-06-20&api_key=${apiKey}`;
request.get(nasaApi, (err, res, body) => {
  if (res.statusCode === 200) {
    const json = JSON.parse(body);
    // console.log(json.near_earth_objects);
    console.log("potentially_hazardous_asteroid!!!");
    for (var key in json.near_earth_objects) {
      // skip loop if the property is from prototype
      if (!json.near_earth_objects.hasOwnProperty(key)) continue;
      console.log("-----------------------");
      console.log("Date: " + key);
      var obj = json.near_earth_objects[key];

      for (var prop in obj) {
        if (obj[prop].is_potentially_hazardous_asteroid) {
          console.log("\t name: " + obj[prop].name);
          // Get into the key: "close_approach_data"
          for (var key in obj[prop].close_approach_data) {
            console.log(
              "\tLast time approach: " +
                obj[prop].close_approach_data[key].close_approach_date
            );
            console.log(
              "\tDistance (km): " +
                obj[prop].close_approach_data[key].miss_distance.kilometers
            );
            console.log("-----------------");
          }
        }
      }
    }

    // console.log("\n -----------------  api.nasa.gov/planetary");

    // for (let i = 0; i < arrayNeo.length; i++) {
    //   if (json.near_earth_objects[i].is_potentially_hazardous_asteroid) {
    //     console.log("name: " + arrayNeo[i].name);
    //     console.log(
    //       "last_observation_date: " +
    //         arrayNeo[i].orbital_data.last_observation_date
    //     );
    //     console.log("----------------- \n");
    //   }
    // }
  } else {
    console.log("res.statusCode !== 200");
  }
  console.log("-----------------  api.nasa.gov/planetary\n");
});

// // 7.- Traer los primeros 151 pokemon de la primera generacion y devolver un objeto con el nombre, sus moves, tipos, tamaño
// //     y peso. // name moves types height weight
// //                       https://pokeapi.co/

// // pokeAPI_url = "https://pokeapi.co/api/v2/pokemon/";
// pokeAPI_url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";

// class Pokemon {
//   constructor(id, name, moves, types, height, weight) {
//     this.id = id;
//     this.name = name;
//     this.moves = moves;
//     this.types = types;
//     this.height = height;
//     this.weight = weight;
//   }
// }

// // Pokemons = [];

// request.get(pokeAPI_url, (err, res, body) => {
//   Pokemons = [];
//   // console.log("\n POkemons");
//   // console.log(Pokemons);

//   const json = JSON.parse(body);
//   for (let i = 0; i < json.results.length - 1; i++) {

//     request.get(json.results[i].url, (err, res, body) => {
//       pokemon = new Pokemon();

//       const json = JSON.parse(body);
//       const movesArray = [];
//       const typesArray = [];
//       for (let i = 0; i < json.moves.length-1; i++) {
//         movesArray.push(json.moves[i].move.name);
//       }
//       for (let i = 0; i < json.types.length-1; i++) {
//         typesArray.push(json.types[i].type.name);
//       }
//       pokemon.id = i;
//       pokemon.name = json.name;
//       pokemon.moves = i; //movesArray;
//       pokemon.types = typesArray;
//       pokemon.weight = json.weight;
//       pokemon.height = json.height;
//       console.log('-------------   -------------   -------------   -------------');
//       console.log(pokemon);
//       // Pokemons.push(pokemon);
//       // console.log("\n POkemons");
//       // console.log(Pokemons);
//     });
//   }
// });
