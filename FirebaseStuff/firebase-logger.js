let userRef = require("./firebase-controller");

//textPayload will be getting it's data from a front-end push to an API endpoint.
//For now feel free to replace the data and run this JS to update the Firebase.

var textPayload = {
    time: "3:40:12 PM",
    text: "I like cereal." 
};

var sendText = function(textPayload){
    userRef.child("textLog").push({
        time: textPayload.time,
        log: textPayload.text
    })
};

sendText(textPayload);