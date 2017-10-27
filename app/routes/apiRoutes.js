var path = require("path");
var friendData = require("../data/friends");

function apiRoutes(app){
  app.get("/api/friends", function(req,res){
    res.json(friendData);
  });


  app.post("/api/friends", function(req, res){
    friendData.push(req.body);
  });  

}


module.exports = apiRoutes;