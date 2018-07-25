//Dependencies
var express = require("express");
var path = require("path");
var router = express.Router();


//  Indicate home route
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
    console.log(__dirname);

});

// Indicate survey route
router.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

module.exports = router;