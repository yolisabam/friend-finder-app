
var path = require("path");

module.exports = function(app) {
 
  app.get("/survey", function(req, res) {
    console.log("I'm at the survey directory")
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/", function(req, res) {
    console.log("I'm at the home directory")
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


  app.get("*", function(req, res) {
    console.log("I'm at the home directory")
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};