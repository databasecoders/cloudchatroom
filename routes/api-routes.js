const user = require("./../models/users")
const loggedin = require("./../models/user-login")
const chat = require("../FirebaseStuff/firebase-chat");

module.exports = function (app) {

    app.get("/api/chat", function(request, response){
        console.log("This api route was hit");
        console.log("Type: Get")
        chat.gettingChat(request, response);
    })

    app.post("/api/chat", function(request, response){
        console.log("This api route was hit");
        console.log("Type: Post")
        console.log(request.body.test);
        //console.log(`You sent ${id}`);
        //chat.postingText(request, response);
    })

    app.get("/api/users", function (request, response) {
        user.getAll(request, response)
    });

    app.get("/api/users/:id", function (request, response) {
        user.getOne(request, response)
    });

    app.post("/api/users/create", function (request, response) {
        user.insertOne(request, response)
    });

    app.post("/api/users/login", function (request, response) {
        loggedin.login(request, response)
    })

    app.delete("/api/users/logout", function (request, response) {
        loggedin.logout(request, response)
    })

    app.delete("/api/users/", function (request, response) {
        user.deleteOne(request, response)
    })

    app.put("/api/users/", function (request, response) {
        user.updateOne(request, response)
    })

    //multer (research)
}