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
    }
}

module.exports = orm