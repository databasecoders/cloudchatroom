let uuidv1 = require('uuid/v1');
let users = require('./users');
let hashPass = require("hashpass")

let user = {
    create: function (request, response) {

        let hashedPassword = hashPass(request.body.password);
        let userRequest = {
            user_name: request.body.username,
            user_email: request.body.email,
            user_password: hashedPassword.hash,
            salt: hashedPassword.salt,
            user_image: request.body.user_image
        };
        users.insertNew(userRequest, function (error, result) {
            if (error) {
                console.log(error);
                if (error.sqlMessage.includes('Duplicate')) {
                    response.status(400).json({
                        'error': 'email already exists in system'
                    });
                } else {
                    response.status(500).json({
                        'error': 'oops we did something bad'
                    });
                }
            } else {
                response.json({
                    user_id: result.insertId,
                    user_name: userRequest.username,
                    user_email: userRequest.email,
                    user_password: userRequest.password
                });
            }
        })
    },
    login: function (request, response) {
        users.selectByEmail(request.body.username, function (error, result) {
            if (error) {
                console.log(error);
                response.status(500).json({
                    'error': 'oops we did something bad'
                });
            } else if (!result.length) {
                response.status(404).json({
                    'error': 'user not found'
                });
            } else {
                user = result[0];
                loginAttempt = hashPass(request.body.password, user.salt);
                if (loginAttempt.hash === user.password) {
                    let uuid = uuidv1();
                    users.updateSession(user.username, uuid, function (error, result) {
                        delete user.password;
                        delete user.salt;
                        delete user.session;
                        response.header('x-session-token', uuid).json(user);
                    });
                } else {
                    response.status(401).json({
                        'error': 'improper login credentials'
                    });
                }
            }
        });
    },
    logout: function (request, response) {
        users.removeSession(request.headers['x-session-token'], function (error, result) {
            response.json({
                'message': 'user logged out successfully'
            });
        });
    },
    getMyself: function (request, response) {
        users.getMyself(request.headers['x-session-token'], function (error, result) {
            response.json(result[0]);
        });
    },
    getUserByID: function (request, response) {
        users.getUserByID(request.params.id, function (error, result) {
            if (result.length) {
                response.json(result[0]);
            } else {
                response.status(404).json({
                    'error': 'user not found'
                });
            }
        });
    }
};

module.exports = user;