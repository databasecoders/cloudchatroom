const user = require("./../models/users")
const loggedin = require("./../models/user-login")

module.exports = function (app) {

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

    app.delete("/api/users/", function (request, response) {
        user.deleteOne(request, response)
    })

    app.put("/api/users/", function (request, response) {
        user.updateOne(request, response)
    })

    //multer (research)
}