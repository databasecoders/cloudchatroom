const dotenv = require('dotenv');
dotenv.config();

const {
    DB_USER,
    DB_PASS,
    DB_NAME
} = process.env;

const mysql = require("mysql");

let config = {
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
//Firebase start
var admin = require("firebase-admin");


var firebaseCred = {
type: process.env.type,
project_id: process.env.project_id,
private_key_id: process.env.private_key_id,
private_key: process.env.private_key.replace(/\\n/g, '\n'),
client_email: process.env.client_email,
client_id: process.env.client_id,
auth_uri: process.env.auth_uri,
token_uri: process.env.token_uri,
auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
client_x509_cert_url: process.env.client_x509_cert_url
};

//console.log(firebaseCred);

admin.initializeApp({
    credential: admin.credential.cert(firebaseCred),
    databaseURL: 'https://cloud-chat-room-a1dbe.firebaseio.com/'
});


var database = admin.database().ref();
// var userRef = database.ref("ChatLog/user_id/textLog"); //TO DO: Tweak to point to appropriate user ID text logs with ${}
// //var textRef = database.ref()

//Firebase End

// Export connection
let exportObjects = {
    connection: connection,
    database: database
}
module.exports = exportObjects;