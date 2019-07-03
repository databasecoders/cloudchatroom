const orm = require("./orm")

let users = {
    getAll: function (request, response) {
        orm.select({
            table: 'users'
        }, function (error, data) {
            response.json(data);
        });
    },
    getOne: function (request, cb) {
        var queryObj = {
            table: 'users',
            column: 'user_id',
            value: request.params.id
        };
        orm.select(queryObj, function (error, data) {
            cb.json(data);
            console.log("get one" + data[0].user_id);
        });
    },
    insertNew: function (user, callback) {
        let query = {
            table: 'users',
            data: user
        };
        orm.insert(query, callback);
    },
    selectByUsername: function (username, callback) {
        console.log(username)
        let query = {
            table: 'users',
            where: [{
                user_name: username
            }]
        };
        orm.select(query, callback);
    },
    updateSession: function (username, uuid, callback) {
        let query = {
            table: 'users',
            data: {
                session: uuid
            },
            where: [{
                user_name: username
            }]
        };
        orm.update(query, callback);
    },
    removeSession: function (session, callback) {
        let query = {
            table: 'users',
            data: {
                session: null
            },
            where: [{
                session: session
            }]
        };
        orm.update(query, callback);
    },
    getMyself: function (session, callback) {
        let query = {
            table: 'users',
            columns: ['user_id', 'user_name', 'user_password', 'user_email'],
            where: [{
                session: session
            }]
        };
        orm.select(query, callback);
    },
    getUserByID: function (id, callback) {
        let query = {
            table: 'users',
            columns: ['user_id', 'user_name', 'user_password', 'user_email'],
            where: [{
                user_id: id
            }]
        };
        orm.select(query, callback);
    }
};

module.exports = users;