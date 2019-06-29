// import { request } from "https";
const request = require("request");

// # Peticiones
// Installing node and npm
// init npm (npm init)
// npm i request (package)
console.log("Corriendo desde NodeJs...");

// Use Request method:
// const request = require("request");
// request.get("http://www.google.com", function(error, response, body) {
// console.error("error:", error); // Print the error if one occurred
//   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//   console.log("body:", body); // Print the HTML for the Google homepage.
//   console.log(response.statusCode);
//   console.log(response.statusCode);
// });

// Using Star Wars API
const swapi_url = "https://swapi.co/api/planets/1";

request.get(swapi_url, (err, res, body) => {
  if (res.statusCode === 200) {
    console.log(body);
  } else {
    console.log(err && res);
  }
});
