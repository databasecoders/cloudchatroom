require('dotenv').config();

var express = require('express');
var app = express();
var PORT = process.env.PORT || 9000;
var config = require('./config');

app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.route('/').get(function (request, response) {
    response.json(config);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});