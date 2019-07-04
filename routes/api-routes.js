const user = require("./../models/user-login")
const chat = require("../FirebaseStuff/firebase-chat");
const authorizer = require("../config/authorizer")

module.exports = function (app) {

    app.get("/api/chat", function (request, response) {
        console.log("This api route was hit");
        console.log("Type: Get")
        chat.gettingChat(request, response);
    })

    app.post("/api/chat", function (request, response) {
        console.log("This api route was hit");
        console.log("Type: Post")
        console.log(request.body.userInput);
        chat.postingText(request, response);
        //console.log(`You sent ${id}`);
        //chat.postingText(request, response);
    });

    // app.get("/api/users", function (request, response) {
    //     user.getAll(request, response)
    // });

    // app.get("/api/users/:id", function (request, response) {
    //     user.getOne(request, response)
    // });

    // app.post("/api/users/create", function (request, response) {
    //     user.insertOne(request, response)
    // });

    // app.post("/api/users/login", function (request, response) {
    //     log.login(request, response)
    // })

    // app.delete("/api/users/logout", function (request, response) {
    //     log.logout(request, response)
    // })

    app.delete("/api/users/", function (request, response) {
        users.deleteOne(request, response)
    })

    app.put("/api/users/", function (request, response) {
        users.updateOne(request, response)
    })


    app.post("/api/user", function (request, response) {
        users.create(request, response);
    });
    app.post("/api/user/login", function (request, response) {
        users.login(request, response);
    });
    app.delete("/api/user/login", function (request, response) {
        users.logout(request, response);
    });
    app.get("/api/user", authorizer.authenticate, function (request, response) {
        users.getMyself(request, response);
    });
    app.get("/api/user/:id", authorizer.authenticate, function (request, response) {
        users.getUserByID(request, response);
    });
};

//testing testing

//multer (research)