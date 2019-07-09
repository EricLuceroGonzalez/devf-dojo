// Create varible that ...

// ... manage Mongoose
const mongoose = require("mongoose");

// ... manage URL of mongo-atlas db (from cluster) *sended to env*

// connect that mongoose with Mongo cluster
db_uri='mongodb+srv://ericlucerogonzalez:ericlucerogonzalezmongoDB2019+@cluster0-j4waz.mongodb.net/ericlucerogonzalezmongoDB2019?retryWrites=true&w=majority'

mongoose.connect(db_uri, { useNewUrlParser: true }, err => {
  if (!err) console.log("Conexion exitosa :):");
});
