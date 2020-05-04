var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res){
    console.log(req.body.scores);
// receive user details as parameters sent from client-side as part of POST request
    var user = req.body;
// loops through and changes from strings to integers
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }
    // default friend match is the first friend but result will be whoever has the minimum difference in scores
    var bestMatchIndex = 0;
    var minDiff = 40;

//  start off with a zero difference and compare the user and the friend scores, one set at a time
//      whatever the difference is, add to the total difference

    for(var i = 0; i < friends.length; i++) {
      var totalDiff = 0;
      for (var f = 0; f < friends[i].scores.length; f++) {
        var difference = Math.abs(user.scores[f] - friends[i].scores[f]);
        totalDiff += difference;
      }
// if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDiff < minDiff) {
        bestMatchIndex = i;
        minDiff = totalDiff;
      }

    }
// after finding match, add user to array
    friends.push(user);
// send back to browser to best friend match
    res.json(friends[bestMatchIndex]);
  });
};