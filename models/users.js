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
        orm.insert(query, function (error, data) {
            response.json(data)
        })
    },
    deleteOne: function (request, response) {
        var query = {
            table: 'users',
            // data - user has to enter password to delete profile
            data: { user_password: request.body.password }
        }
        orm.delete(query, function (error, data) {
            response.json()
        })
    }
}

module.exports = users