// Old thing:
const serverA = require("./server/index");

// New thing: Desestructuracion
const { app, port } = require("./server/index");

console.log(serverA);

// Start the server
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
