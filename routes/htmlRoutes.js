var path = require('path');

module.exports = function (app) {
    app.get("/", function (rend, res) {
        res.sendFile(path.join(__dirname, "../public/html/signIn.html"))
    });

    app.get("/create", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/signUpForm.html"));
    });

    app.get("/profile", function (rend, res) {
        res.sendFile(path.join(__dirname, "../public/html/profile.html"))
    });

    app.get("/main", function (rend, res) {
        res.sendFile(path.join(__dirname, "../public/html/main.html"))
    });

    app.get("/editprofile", function (rend, res) {
        res.sendFile(path.join(__dirname, "../public/html/editprofile.html"))
    });

    app.get("/photo", function (rend, res) {
        res.sendFile(path.join(__dirname, "../public/html/photo.html"))
    });

    app.get("/globalchat", function(rend, res){
        res.sendFile(path.join(__dirname, "../public/html/globalchat.html"))
    });

};