const orm = require("./orm")

let users = {
    getAll: function (request, response) {
        orm.select({
            table: 'users'
        }, function (error, data) {
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
        console.log('******INsertONe', request)
        var query = {
            table: 'users',
            data: {
                user_name: request.body.username,
                user_password: request.body.password,
                user_email: request.body.email,
            }
        }
        orm.insert(query, function (error, data) {
            response.json(data)
            console.log(data, error)
        })
    },
    deleteOne: function (request, response) {
        var query = {
            table: 'users',
            // data - user has to enter password to delete profile
            data: {
                user_password: request.body.password
            }
        }
        orm.delete(query, function (error, data) {
            response.json()
        })
    },
    updateOne: function (request, response) {
        console.log(request)
        orm.update({
            table: "users",
            column: "user_name",
            value: request.body,
            row: "user_id",
            id: request.body.id
        }, function (error, data) {
            response.json(data);
        });
    }
}

module.exports = users