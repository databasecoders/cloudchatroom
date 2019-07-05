var express = require("express");

var router = express.Router();

var user = require("../models/users.js");

router.get("/profile", function (req, res) {

    res.render("profile");

});

router.get("/profile/:id", function (req, res) {
    var condition = req.params.id;
    console.log("condition" + condition);

    user.getOne(req, function (data) {
        console.log(data);
        // console.log("hello image null", data),
        res.render("profile", {
            user_id: data[0].user_id,
            user_name: data[0].user_email,
            user_image: data[0].user_image,
            one_image: data[0].one_image,
        });

    });

});



// router.get("/api/users/:user_id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);
// });

module.exports = router;