require('dotenv').config();
var express = require('express');
var app = express();
const cookieParser = require('cookie-parser');
const path = require("path")
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cookieParser());

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/userController.js");
app.use(routes);

require('./routes/htmlRoutes')(app)
require("./routes/api-routes")(app);


app.listen(process.env.PORT || PORT);