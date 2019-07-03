require('dotenv').config();
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

console.log(firebaseCred);

admin.initializeApp({
    credential: admin.credential.cert(firebaseCred),
    databaseURL: 'https://cloud-chat-room-a1dbe.firebaseio.com/'
});


var database = admin.database().ref();
// var userRef = database.ref("ChatLog/user_id/textLog"); //TO DO: Tweak to point to appropriate user ID text logs with ${}
// //var textRef = database.ref()

module.exports = database;

