// Dependencies
var express = require("express");
var path = require("path");
var router = express.Router();
var friendsList = require('../data/friends.js');

// compare scores of each "friend" with the score value of the user.
router.post('/api/friends', function (req, res) {
    var newSurvey = req.body;
    var pickedFriend;
    var friendCalc = [];
    for (var i = 0; i < friendsList.length; i++) {
        var totalDifference = 0;
        for (var k = 0; k < 10; k++) {
            var scoreDiff = Math.abs(friendsList[i].scores[k] - newSurvey.scores[k]);
            console.log(friendsList,"friendsList"); // logs every friends score
            console.log(newSurvey,"newSurvey");     // logs users score


            totalDifference += scoreDiff;
            console.log(totalDifference,"totalDiff"); // shows total differences in scores per friend
            console.log(scoreDiff,"scoreDiff");       // shows the differences per score


        }
        friendCalc.push({
            name: friendsList[i].name,
            picture: friendsList[i].picture,
            totalDiff: totalDifference
        });
    }
    // Maximum differences of scores possible
    var maxScore = 40;
    // Compares friends and newfriends array, and returns an array that contains the results.
    friendCalc.map(function (obj) {
        if (obj.totalDiff < maxScore) maxScore = obj.totalDiff;
    });
    pickedFriend = friendCalc.filter(function (dif) {
        return dif.totalDiff == maxScore;
    });

    res.json(pickedFriend);
    friendsList.push(newSurvey);

});

router.get('/api/friends', function (req, res) {
    res.json(friendsList);
});

module.exports = router;