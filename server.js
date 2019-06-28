require('dotenv').config();
// const bodyParser = require('body-parser');
var path = require('path')
var express = require('express');
//Dependencies
var PORT = process.env.PORT || 9000;

var app = express();

app.use(express.static(path.join(__dirname, "public")));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var config = require('./config/config');
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/userController.js");

app.use(routes);

// does render profile via handlebars
// app.get("/profile", function (req, res) {
//     res.render("profile");
// });

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.use(express.urlencoded({
//     extended: true
// }));
// app.use(express.json());

// require("./routes/api-routes")(app);

// app.get("/", function (rend, res) {
//     res.sendFile(path.join(__dirname, "./main.html"))
// });

// app.get("/profile", function (rend, res) {
//     res.sendFile(path.join(__dirname, "./profile.html"))
// });

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});