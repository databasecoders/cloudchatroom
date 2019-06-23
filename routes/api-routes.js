var user = require("./../models/users")

module.exports = function (app) {

    app.route('/').get(function (request, response) {
        response.json(config);
    });

    app.get("/api/users", function (request, response) {
        user.getAll(request, response)
    });

    app.get("/api/users/:id", function (request, response) {
        user.getOne(request, response)
    });

}