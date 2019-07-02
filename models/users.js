const orm = require("./orm")
let hashPass = require("hashpass")

let users = {
    getAll: function (cb) {
        console.log("hello");

        orm.select({
            table: 'users'
        }, function (error, data) {
            // console.log(data);

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
    selectByUsername: function (username, callback) {
        let query = {
            table: 'users',
            value: username,
            column: "user_name"
        };
        orm.select(query, callback);
    },
    insertOne: function (request, response) {
        let hashedPassword = hashPass(request.body.password.trim(), "salt")
        console.log(request.body.password)
        var query = {
            table: 'users',
            data: {
                user_name: request.body.username,
                user_password: hashedPassword.hash,
                user_email: request.body.email,
            }
        }
        orm.insert(query, function (error, data) {
            response.json(data)
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
        orm.update({
            table: "users",
            column: "user_name",
            value: request.body,
            row: "user_id",
            id: request.body.id
        }, function (error, data) {
            response.json(data);
        });
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
    removeSession: function (username, callback) {
        let query = {
            table: 'users',
            data: {
                session: null
            },
            where: [{
                user_name: username
            }]
        };
        orm.update(query, callback);
    },
    // getMyself: function (session, callback) {
    //     let query = {
    //         table: 'users',
    //         columns: ['user_id', 'user_name', 'user_password'],
    //         where: [{
    //             session: session
    //         }]
    //     };
    //     orm.select(query, callback);
    // },
}

module.exports = users