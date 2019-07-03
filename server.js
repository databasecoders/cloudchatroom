require('dotenv').config();
const bodyParser = require('body-parser');

const path = require("path")


//Dependencies
var express = require('express');
var app = express();
var PORT = process.env.PORT || 9000;
// var config = require('./config/config');


app.use(express.static(path.join(__dirname, "public")));


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
var routes = require("./controllers/userController.js");

app.use(routes);

require("./routes/api-routes")(app);


app.get("/create", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/html/signUpForm.html"));
});

app.get("/", function (rend, res) {
    res.sendFile(path.join(__dirname, "/public/html/main.html"))
});

app.get("/profile", function (rend, res) {
    res.sendFile(path.join(__dirname, "/public/html/profile.html"))
});

app.get("/signin", function (rend, res) {
    res.sendFile(path.join(__dirname, "/public/html/signIn.html"))
});

app.get("/editprofile", function (rend, res) {
    res.sendFile(path.join(__dirname, "/public/html/editprofile.html"))
});

app.get("/photo", function (rend, res) {
    res.sendFile(path.join(__dirname, "/public/html/photo.html"))
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});