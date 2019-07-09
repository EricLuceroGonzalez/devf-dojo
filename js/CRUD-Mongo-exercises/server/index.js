// creating the server
const express = require("express");
const app = express();
// check computer environment port number
const port = process.env.PORT || 3000;

// // Require artist schema file to save it:
const ArticleSchema = require("../models/ArticleSchema");
const TicketSchema = require('../models/TicketSchema');
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
app.post("/api/v1/article", (req, res) => {
  // Receive artist from client
  const articleInfo = req.body;
  console.log(articleInfo);

  // Save artist to db
  const newArticle = new ArticleSchema(articleInfo);
  // Send response from db  -----> client
  newArticle.save(err => {
    return err
      ? res.status(400).send({ message: "Some mistake", res: err })
      : res.status(201).send({ message: "ok", 'res': newArticle });
  });
});

app.post("/api/v1/tickets", (req, res) => {
  // Receive ticket from client
  const ticketInfo = req.body;
  console.log(ticketInfo);

  // Save ticket to db
  const newTicket = new TicketSchema(ticketInfo);
  // Send response from db  -----> client
  newTicket.save(err => {
    return err
      ? res.status(400).send({ message: "Some mistake", res: err })
      : res.status(201).send({ message: "ok", 'res': newTicket });
  });
});

// Send variable when this file is "require"
module.exports = { app, port };
