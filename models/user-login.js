let hashPass = require('hashPass');
let uuidv1 = require('uuid/v1');
let users = require('./users');

let user = {
    create: function (request, response) {
        if (
            !request.body.email.includes('@') ||
            !request.body.email.includes('.')
        ) {
            response.status(400).json({
                error: 'email is not valid'
            });
        } else if (request.body.password !== request.body.password_confirm) {
            response.status(400).json({
                error: 'passwords do not match'
            });
        } else {
            let hashedPassword = hashPass(request.body.password);
            let userRequest = {
                name: request.body.name,
                user_email: request.body.email,
                user_password: hashedPassword.hash,
                salt: hashedPassword.salt
            };
            users.insertNew(userRequest, function (error, result) {
                if (error) {
                    console.log(error);
                    if (error.sqlMessage.includes('Duplicate')) {
                        response
                            .status(400)
                            .json({
                                error: 'email already exists in system'
                            });
                    } else {
                        response.status(500).json({
                            error: 'oops we did something bad'
                        });
                    }
                } else {
                    // response.json({
                    //     user_id: result.insertId,
                    //     email: userRequest.email
                    // });
                    response.redirect('/')

                }
            });
        }
    },
    login: function (request, response) {
        users.selectByEmail(request.body.email, function (error, result) {
            if (error) {
                console.log(error);
                response.status(500).json({
                    error: 'oops we did something bad'
                });
            } else if (!result.length) {
                response.status(404).json({
                    error: 'user not found'
                });
            } else {
                user = result[0];
                loginAttempt = hashPass(request.body.password, user.salt);
                if (loginAttempt.hash === user.user_password) {
                    let uuid = uuidv1();
                    users.updateSession(user.user_email, uuid, function (error, result) {
                        delete user.user_password;
                        delete user.salt;
                        delete user.session;

                        response.cookie('x_session_token', uuid);
                        response.redirect('/main');
                    });
                } else {
                    response.status(401).json({
                        error: 'improper login credentials'
                    });
                }
            }
        });
    },
    logout: function (request, response) {
        users.removeSession(request.cookies['x_session_token'], function (
            error,
            result
        ) {
            response.clearCookie('x_session_token');
            response.redirect('/')
        });
    },
    getMyself: function (request, res) {
        users.getMyself(request.cookies['x_session_token'], function (error, result) {
            res.json(result[0]);
        });
    },
    getUserByID: function (request, response) {
        users.getUserByID(request.params.id, function (error, result) {
            if (result.length) {
                response.json(result[0]);
            } else {
                response.status(404).json({
                    error: 'user not found'
                });
            }
        });
    }
};

module.exports = user;