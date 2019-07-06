// creating the server
const express = require("express");
const app = express();
// check computer environment port number
const port = process.env.PORT || 3000;

// Require artist schema file to save it:
const Artist = require("../models/ArtistSchema");

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
  const artistInfo = req.body;
  console.log(artistInfo);

  // Save artist to db
  const newArtist = new Artist(artistInfo);
  newArtist.save(err => {
    return err
      ? res.status(400).send({ message: "Some mistake", res: err })
      : res.status(200).send({ message: "ok", res: newArtist });
  });
  // Send response from db  -----> client
});

// R: read (All)
// app.get("/api/v1/artist", (req, res) => {
//     // find() artist from db
//   });
// R: read (One)
// U: update
// D: delete

// Send variable when this file is "require"
module.exports = { app, port };

// app.listen(port, () => console.log(`Example app listening on port ${port}!!`));
