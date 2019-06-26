var admin = require("firebase-admin");
var firebaseCred = require("../config/firebaseCredentials.json");

admin.initializeApp({
    credential: admin.credential.cert(firebaseCred),
    databaseURL: 'https://cloud-chat-room-a1dbe.firebaseio.com/'
});


var database = admin.database();
var userRef = database.ref("ChatLog/user_id");
//var textRef = database.ref()

module.exports = userRef;

