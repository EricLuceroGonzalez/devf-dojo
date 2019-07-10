// creating the server
const express = require("express");
const app = express();
// check computer environment port number
const port = process.env.PORT || 3000;

// // Require artist schema file to save it:
const Article = require("../models/ArticleSchema");
const Ticket = require("../models/TicketSchema");
// const Article = require('../models/allSchema');
// const Ticket= require('../models/allSchema');
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
  const newArticle = new Article(articleInfo);
  // Send response from db  -----> client
  newArticle.save(err => {
    return err
      ? res.status(400).send({ message: "Some mistake", res: err })
      : res.status(201).send({ message: "ok", res: newArticle });
  });
});

// R: read (All)
app.get("/api/v1/article", (req, res) => {
  // find() all artist from db
  Article.find()
    .exec()
    .then(newArticle => res.status(200).send(newArticle))
    .catch(err => res.status(400).send(err));
});

// R: read (One)
app.get("/api/v1/article/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  // find() artist from db
  Article.findById(id)
    .exec()
    .then(newArticle => res.status(200).send(newArticle))
    .catch(err => res.status(400).send(err));
});

// U: update (one)
app.patch("/api/v1/article/:id", (req, res) => {
  const { id } = req.params;
  // find() artist from db
  Article.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then(newArticle => res.status(200).send(newArticle))
    .catch(err => res.status(400).send(err));
});

// D: delete
app.delete("/api/v1/article/:id", (req, res) => {
  const { id } = req.params;
  // find() artist from db
  Article.findByIdAndDelete(id, req.body, { new: true })
    .exec()
    .then(newArticle => res.status(204).send(newArticle))
    .catch(err => res.status(400).send(err));
});

app.post("/api/v1/tickets", (req, res) => {
  // Receive ticket from client
  const ticketInfo = req.body;
  console.log(ticketInfo);

  // Save ticket to db
  const newTicket = new Ticket(ticketInfo);
  // Send response from db  -----> client
  newTicket.save(err => {
    return err
      ? res.status(400).send({ message: "Some mistake", res: err })
      : res.status(201).send({ message: "ok", res: newTicket });
  });
});

// R: read (All)
app.get("/api/v1/tickets/", (req, res) => {
  // find() all artist from db
  Ticket.find()
    .populate("articles")
    .exec()
    .then(newTicket => res.status(200).send(newTicket))
    .catch(err => res.status(400).send(err));
});

// R: read (One)
app.get("/api/v1/tickets/:id", (req, res) => {
  const { id } = req.params;
  // find() artist from db
  Ticket.findById(id)
    .populate("articles")
    .exec()
    .then(newTicket => res.status(200).send(newTicket))
    .catch(err => res.status(400).send(err));
});

// U: update (one)
app.patch("/api/v1/tickets/:id", (req, res) => {
  const { id } = req.params;
  // find() artist from db
  Ticket.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then(newTicket => res.status(200).send(newTicket))
    .catch(err => res.status(400).send(err));
});

// D: delete
app.delete("/api/v1/tickets/:id", (req, res) => {
  const id = req.params.id;
  // find() artist from db
  Ticket.findByIdAndDelete(id)
    .exec()
    .then(newTicket => res.status(204).send(newTicket))
    .catch(err => res.status(400).send(err));
});

// ----------------  Calculate bill
app.get("/api/v1/tickets/bill/:id/", (req, res) => {
  const ticketId = req.params.id;
  let subtotal = 0,
    IVA = 0,
    total = 0;

  Ticket.findById(ticketId)
    .populate("articles")
    .exec()
    .then(ticket => {
      // Calculate total:
      const prices = ticket.articles.map(article => article.precio);
      const subtotal = ticket.articles.reduce(
        (total, precio) => total + precio
      );
      const IVA = subtotal * 0.07;
      const total = IVA + subtotal;
      // console.log('inside here');
      console.log(ticket);
      console.log(prices, subtotal, IVA, total);

      // Change the ticket
      Ticket.findOneAndUpdate(
        { _id: ticket.id },
        { subtotal, IVA, total },
        { new: true }
      )
      .populate('articles')
      .exec()
      .then(newBill => res.status(204).send(newBill))
      .catch(errBill => res.status(400).send(errBill));
    })
    .catch(err => res.status(400).send(err));
});

// Send variable when this file is "require"
module.exports = { app, port };
