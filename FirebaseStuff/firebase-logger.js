let userRef = require("./firebase-controller");

var textPayload = {
    time: "3:40:12 PM",
    text: "I like cereal."
};

var sendText = function (textPayload) {
    userRef.child("textLog").push({
        time: textPayload.time,
        log: textPayload.text
    })
};

sendText(textPayload);