var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Friend Finder App listening on PORT: " + PORT);
  });