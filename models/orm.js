var connection = require("../config/config")

var orm = {
    select: function (queryObj, callback) {
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
    update: function (query, callback) {

    }
}

module.exports = orm