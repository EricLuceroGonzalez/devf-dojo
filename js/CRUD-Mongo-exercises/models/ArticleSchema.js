// We create a Mongo db schema for this variable
// Copy from mongoose docs

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number },
  onExistence: { type: Number }
});

// Lets create (convert) this schema Model with ---> mongoose.model(modelName, schema):
const Article = mongoose.model("Article", articleSchema);

// Send it:
module.exports = Article;
