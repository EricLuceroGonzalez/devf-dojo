// We create a Mongo db schema for this variable
// Copy from mongoose docs

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  // articulo: mongoose.Schema.ObjectId,
  name: { type: String, required: true },
  price: { type: Number },
  onExistence: { type: Number }
});

// const ticketSchema = new Schema({
//   // ticket: mongoose.Schema.ObjectId,
//   subtotal: { type: Number, default: 0 },
//   IVA: { type: Number, default: 0 },
//   total: { type: Number, default: 0 },
//   articles: [
//     { type: mongoose.Schema.ObjectId, ref: "Article", required: true }
//   ]
// });

// // Lets create (convert) this schema Model with ---> mongoose.model(modelName, schema):
// const Ticket = mongoose.model("Ticket", ticketSchema);
const Article = mongoose.model("Article", articleSchema);

// Send it:
module.exports = Article;
