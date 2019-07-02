let users = require('../models/user-login');

let authorizer = {
    authenticate: function (request, response, next) {
        users.getMyself(request.headers['x-session-token'], function (error, result) {
            if (error) {
                console.log(error);
                response.status(500).json({
                    'error': 'oops we did something bad'
                });
            } else if (!result.length) {
                response.redirect("/api/users/login");
            } else {
                next();
            }
        });
    },
};

module.exports = authorizer;