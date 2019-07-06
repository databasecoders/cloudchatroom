let configObject = require("../config/config");
let Chatref = configObject.database;
let chat = {
    gettingChat: function (request, response) {
        Chatref.once("value", function (snapshot, prevChildKey) {
            var Chatlog = snapshot.val();
            response.json(Chatlog);
        });
    },
    postingText: function (request, response) {
        Chatref.child("textlog").push({
            log: request.body.userInput
        })
    }
}

module.exports = chat;