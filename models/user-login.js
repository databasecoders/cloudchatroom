let uuidv1 = require('uuid/v1');
let users = require('./users');
let hashPass = require("hashpass")

let user = {
    login: function (request, response) {
        users.selectByUsername(request.body.username, function (error, result) {

            console.log(result)

            if (!result.length) {
                console.log("user not found")
            } else if (result.length && request.body.username === result[0].user_name) {
                loginAttempt = hashPass(request.body.password.trim(), "salt");

            }
            // console.log("Passwords", loginAttempt.hash, result[0].user_password)
            if (typeof loginAttempt != "undefined" && loginAttempt.hash === result[0].user_password) {
                let uuid = uuidv1();
                users.updateSession(request.body.username, uuid, function (error, result) {
                    console.log("UUID", uuid)
                    response.header('x-session-token', uuid).json(user);
                });
            }
        })
    },
    logout: function (request, response) {
        users.removeSession(request.headers['x-session-token'], function (error, result) {
            response.json({
                'message': 'user logged out successfully'
            });
        });
    }
}

module.exports = user