// We create a Mongo db schema for this variable
// Copy from mongoose docs

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Require artist schema file to save it:
const Article = require("./ArticleSchema");

const ticketSchema = new Schema({
  // ticket: mongoose.Schema.ObjectId,
  subtotal: { type: Number, default: 0 },
  IVA: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  articles: [
    { type: mongoose.Schema.ObjectId, ref: "Article", required: true }
  ]
  // articulos: { type: articleSchema }
});

// Lets create (convert) this schema Model with ---> mongoose.model(modelName, schema):
const Ticket = mongoose.model("Ticket", ticketSchema);

// Send it:
module.exports = Ticket;
