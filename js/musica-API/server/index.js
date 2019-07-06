// creating the server
const express = require("express");
const app = express();
// check computer environment port number
const port = process.env.PORT || 3000;

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

// initi CRUD -------------

// C: create
app.post("/api/v1/artist", (req, res) => {
  // Receive artist from client
  const artist = req.body;
  console.log(artist);

  // Save artist to db
  // Send response from db  -----> client
});

// R: read (All)
// R: read (One)
// U: update
// D: delete

// Send variable when this file is "require"
module.exports = { app, port };

// app.listen(port, () => console.log(`Example app listening on port ${port}!!`));
