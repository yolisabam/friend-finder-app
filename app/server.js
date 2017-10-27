var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var apiRoutes = require("./routes/apiRoutes");

apiRoutes(app);

var htmlRoutes = require("./routes/htmlRoutes")

htmlRoutes(app);


app.listen(PORT,function(){
  console.log("App listening on PORT: " + PORT);

});