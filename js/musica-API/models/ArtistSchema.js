// We create a Mongo db schema for this variable
// Copy from mongoose docs

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: { type: String, required: true },
  genre: { type: String },
  integrants: [{ type: String }],
  albums: [{ type: String }],
  originDate: { type: Date },
  is_active: { type: Boolean, default: true }
});

// Lets create (convert) this schema Model with ---> mongoose.model(modelName, schema):
const ArtistSchema = mongoose.model('ArtistSchema', artistSchema);

// Send it:
module.exports = ArtistSchema;
