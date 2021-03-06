	//Dependencies
	var express = require("express");
	var bodyParser = require("body-parser");
	var path = require("path");

	//Setting up the app
	var app = express();
	var PORT = process.env.PORT || 3000;

	//Set up for app to take body-parsing
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.text());
	app.use(bodyParser.json());

	var htmlRoutes = require('./app/routing/htmlRoutes.js');
	var apiRoutes = require('./app/routing/apiRoutes.js');
	app.use('/', htmlRoutes);
	app.use('/', apiRoutes);

	//Server Listening
	app.listen(PORT, function () {
		console.log("App listening on PORT " + PORT);
	});