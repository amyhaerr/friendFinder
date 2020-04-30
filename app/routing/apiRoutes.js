var path = require('path');

// var friends = require('../data/friends');

var friendsData = require("../api/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });
      app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);
        // var userInput = req.body;
        // var userResponses = userInput.scores;
        if (friendsData.length < 5) {
          friendsData.push(req.body);
          res.json(true)

        }
      });
};