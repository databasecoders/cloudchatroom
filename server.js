require('dotenv').config();

//Dependencies
var express = require('express');
var app = express();
var PORT = process.env.PORT || 9000;
// var config = require('./config/config');

app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("./routes/api-routes")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});