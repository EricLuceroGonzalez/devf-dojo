// Create varible that ...

// ... manage Mongoose
const mongoose = require("mongoose");

// ... manage URL of mongo-atlas db (from cluster)
const db_uri =
  "mongodb+srv://ericlucerogonzalez:lokikolo20*#mongodbatlas@cluster0-j4waz.mongodb.net/test?retryWrites=true&w=majority";

// connect that mongoose with Mongo cluster
mongoose.connect(db_uri, { useNewUrlParser: true }, () => {
  console.log("Conexion exitosa!");
});
