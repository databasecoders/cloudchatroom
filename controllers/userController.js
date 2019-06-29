var express = require("express");

var router = express.Router();

var user = require("../models/users.js");

router.get("/profile", function (req, res) {
    console.log("this");
    user.getAll(function (data) {
        console.log(data);
        var hbsObject = {
            users: data
        };
        console.log(hbsObject);
        console.log("this");
        res.render("profile");
    });
});

router.get("/profile/:id", function (req, res) {
    var condition = req.params.id;
    console.log(condition);

    user.getOne(req, function (data) {
        console.log(data);

        res.render("profile", { user_id: data[0].user_id });

    });

});



// router.get("/api/users/:user_id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);
// });

module.exports = router;
