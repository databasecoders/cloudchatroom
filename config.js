// let config = {
//     local: {
//         mysql: {
//             url: process.env.DB_URL
//         },
//         apiKeys: {}
//     },
//     prod: {
//         mysql: {
//             url: process.env.JAWSDB_URL
//         },
//         apiKeys: {}
//     }
// };
// module.exports = config[process.env.APP_ENV || 'local'];

var mysql = require("mysql");

var config = require(__dirname + "/config.json")[process.env.APP_ENV || 'local'];

// Set up our connection information
var connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.username,
    password: config.password,
    database: config.database
});

// Connect to the database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;