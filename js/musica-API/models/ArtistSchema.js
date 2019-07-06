// We create a Mongo db schema for this variable
// Copy from mongoose docs

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: { type: String, required: true },
  genre: { type: String },
  integrants: { type: [{ type: String }] },
  albums: { type: [{ type: String }] },
  originDate: { type: Date },
  is_active: { type: Boolean, default: true }
});
