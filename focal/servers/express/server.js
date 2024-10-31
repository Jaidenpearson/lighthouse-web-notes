const express  = require("express"); // Import the express library
const app = express(); // Define our app as an instance of express
const port = 3000; // Define our base URL as http:\\localhost:3000

app.set("vew engine", "ejs")

app.listen(port, function () {
  console.log(`Server running on port ${port}`); // Tell yourself the port number to prevent mistakes in the future.
  app.get("/app", function(req,res){
    res.send("Hello World!");
 });
});

