var admin = require("firebase-admin");
var firebaseCred = require("./config/firebaseCredentials.json");

admin.initializeApp({
    credential: admin.credential.cert(firebaseCred),
    databaseURL: 'https://cloud-chat-room-a1dbe.firebaseio.com/'
  });

var database = admin.database();
var Chatlogref = database.ref("testLog/chatlog");

var ChatRef = Chatlogref.child("text");

ChatRef.set({
  spongebob: {
    date_of_birth: "June 23, 1912",
    full_name: "Spongebob Squarepants"
  },
  dirtyJoe: {
    date_of_birth: "December 9, 1906",
    full_name: "Joe Dirt"
  }
});

