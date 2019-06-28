const connection = require("../config/config")

let orm = {
    select: function (queryObj, callback) {
        // console.log("hello from here also")
        var queryString = "SELECT * FROM ??";
        var searchCriteria = [queryObj.table];
        if (queryObj.value) {
            queryString += " WHERE ?? = ?";
            searchCriteria.push(queryObj.column);
            searchCriteria.push(queryObj.value);
        }
        connection.query(queryString, searchCriteria, function (error, result) {
            callback(error, result);
        });
    },
    insert: function (query, callback) {
        var queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [query.table, query.data], function (error, result) {
            callback(error, result);
        });
    },
    delete: function (query, callback) {
        var queryString = "DELETE FROM ?? WHERE ?"
        connection.query(queryString, [query.table, query.data], function (error, result) {
            callback(error, result);
        });
    },
    update: function (queryObject, callback) {
        let queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, [queryObject.table, queryObject.column, queryObject.value, queryObject.row, queryObject.id], function (err, result) {
            if (err) throw err;
            callback(result)
        })
    },
}

module.exports = orm