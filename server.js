require('dotenv').config();
var user = require("./users")

var express = require('express');
var app = express();
var PORT = process.env.PORT || 9000;
var config = require('./config');

app.get("/api/users", function (request, response) {
    user.getAll(request, response)
});

app.get("/api/users/:id", function (request, response) {
    user.getOne(request, response)
});

app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.route('/').get(function (request, response) {
    response.json(config);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});