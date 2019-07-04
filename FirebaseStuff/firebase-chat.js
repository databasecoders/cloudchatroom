let configObject = require("../config/config");

let Chatref = configObject.database;

//database.ref("ChatLog/user_id/textLog");
let chat = {
    gettingChat : function(request, response){
        Chatref.on("value", function(snapshot, prevChildKey){  //TO-DO: Test grabbing different user chat-logs with different IDs
            var Chatlog = snapshot.val();
            response.json(Chatlog);
            
            // console.log("Log: " + Chatlog.log);
            // console.log("Time: " + Chatlog.time);
            // console.log("Previous Post ID: " + prevChildKey) //TO-DO: Find out what this means
        });
    },
    postingText : function(request, response){
        Chatref.child("textlog").push({
            //time: request.body.time
            log: request.body.userInput
        })
    }
}



//gettingChat();

module.exports = chat;