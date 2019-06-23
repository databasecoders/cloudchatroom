var orm = require("./orm")

var users = {
    getAll: function (request, response) {
        orm.select({ table: 'users' }, function (error, data) {
            response.json(data);
        });
    },
    getOne: function (request, response) {
        var queryObj = {
            table: 'users',
            column: 'user_id',
            value: request.params.id
        };
        orm.select(queryObj, function (error, data) {
            response.json(data);
        });
    },
    insertOne: function (request, response) {
        var query = {
            table: 'users',
            data: { user_name: request.body.username, user_password: request.body.password, user_image: request.body.userimage, friends_id: request.body.friends }
        }
        orm.insertOne(query, function (error, data) {
            response.json(data)
        })
    }
}

module.exports = users