var express = require("express");

var router = express.Router();

var user = require("../models/users.js");

router.get("/profile", function (req, res) {

    res.render("profile");

});

router.get("/profile/:id", function (req, res) {
    var condition = req.params.id;

    user.getOne(req, function (data) {
        res.render("profile", {
            user_id: data[0].user_id,
            user_email: data[0].user_email,
            user_image: data[0].user_image,
            user_bio: data[0].user_bio,
            name: data[0].name
        });

    });

});

module.exports = router;