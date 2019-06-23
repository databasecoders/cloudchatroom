var dotenv = require('dotenv');
dotenv.config();

var { DB_USER, DB_PASS, DB_NAME } = process.env;

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

var config = {
    host: 'localhost',
    port: 3306,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
}

var connection;
var host;

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
    host = 'JAWSDB';
} else {
    var connection = mysql.createConnection(config);
    host = 'localhost'
}

// Connect to the database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + host);
});

// Export connection
module.exports = connection;