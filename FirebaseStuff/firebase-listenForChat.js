let Chatref = require("./firebase-controller");

//database.ref("ChatLog/user_id/textLog");

Chatref.on("child_added", function(snapshot, prevChildKey){  //TO-DO: Test grabbing different user chat-logs with different IDs
    var Chatlog = snapshot.val();
    console.log(Chatlog);
    console.log("Log: " + Chatlog.log);
    console.log("Time: " + Chatlog.time);
    console.log("Previous Post ID: " + prevChildKey) //TO-DO: Find out what this means
});