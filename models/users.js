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
        orm.selectUser(queryObj, function (error, data) {
            cb(data);
            console.log(data);
            console.log("get one" + data[0].user_id);
        });
    },
    insertNew: function (user, callback) {
        user.user_email = user.user_email.toLowerCase();
        let query = {
            table: 'users',
            data: user
        };
        orm.insert(query, callback);
    },
    selectByEmail: function (email, callback) {
        let query = {
            table: 'users',
            where: [{
                user_email: email
            }] //Update
        };
        orm.select(query, callback);
    },
    updateSession: function (email, uuid, callback) {
        let query = {
            table: 'users',
            data: {
                session: uuid
            },
            where: [{
                user_email: email.toLowerCase()
            }] //Update
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
            columns: ['user_email', 'user_id', 'name', 'user_password', 'user_image', 'user_bio'],
            where: [{
                session: session
            }]
        };
        orm.select(query, callback);
    },
    getUserByID: function (id, callback) {
        let query = {
            table: 'users',
            columns: ['user_email', 'user_id', 'name', 'user_password', 'user_image', 'user_bio'],
            where: [{
                user_id: id
            }]
        };
        orm.select(query, callback);
    }
};

module.exports = users;