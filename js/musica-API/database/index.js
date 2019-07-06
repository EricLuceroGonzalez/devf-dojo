// Create varible that ...

// ... manage Mongoose
const mongoose = require("mongoose");

// ... manage URL of mongo-atlas db (from cluster) *sended to env*

// connect that mongoose with Mongo cluster
mongoose.connect(process.env.db_uri, { useNewUrlParser: true }, () => {
  console.log("Conexion exitosa!");
});
