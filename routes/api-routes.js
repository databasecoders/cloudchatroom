var user = require("./../models/users")

module.exports = function (app) {

    // app.route('/').get(function (request, response) {
    //     response.json(config);
    // });

    app.get("/api/users", function (request, response) {
        user.getAll(request, response)
    });

    app.get("/api/users/:id", function (request, response) {
        user.getOne(request, response)
    });

    app.post("/api/users", function (request, response) {
        // console.log(request.body)
        user.insertOne(request, response)
    });

    app.delete("/api/users/", function (request, response) {
        user.deleteOne(request, response)
    })

    app.put("/api/users/", function (request, response) {
        user.updateOne(request, response)
    })

    //multer (research)
}