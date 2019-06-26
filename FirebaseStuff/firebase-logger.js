let userRef = require("./firebase-controller");

userRef.child("text").set({
    time: "sometime",
    log: "what was stated"
});