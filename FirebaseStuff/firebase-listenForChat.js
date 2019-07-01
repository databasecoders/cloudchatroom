let Chatref = require("./firebase-controller");

//database.ref("ChatLog/user_id/textLog");

var gettingChat = function(request, response){
    Chatref.on("value", function(snapshot, prevChildKey){  //TO-DO: Test grabbing different user chat-logs with different IDs
        var Chatlog = snapshot.val();
        response.json(Chatlog);
        // console.log("Log: " + Chatlog.log);
        // console.log("Time: " + Chatlog.time);
        // console.log("Previous Post ID: " + prevChildKey) //TO-DO: Find out what this means
    });
}

//gettingChat();

module.exports = gettingChat;