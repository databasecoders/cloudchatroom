const user = require("./../models/user-login")
const chat = require("../FirebaseStuff/firebase-chat");
const authorizer = require("../config/authorizer")
let users = require('../models/users.js');
const router = require('express').Router();

module.exports = function (app) {
    app.post('/api/user', function (request, response) {
        user.create(request, response);
    });
    app.post('/api/user/login', function (request, response) {
        user.login(request, response);
    });

    app.get('/api/user/logout', function (request, response) {
        user.logout(request, response);
    });
    app.get('/api/user', function (request, response, next) {

        users.getMyself(request.cookies['x_session_token'], function (error, result) {
            if (error) {
                console.log(error);
                response.status(500).json({
                    error: 'oops we did something bad'
                });
            } else if (!result.length) {
                response.status(401).json({
                    error: 'user must be logged in'
                });
            } else {
                next();
            }
        })
    }, function (request, response) {
        users.getMyself(request.cookies['x_session_token'], function (error, result) {
            response.json(result[0]);
        });

    });

    app.get('/api/user/:id', authorizer.authenticate, function (
        request,
        response
    ) {
        user.getUserByID(request, response);
    });

    app.post('/api/user', function (request, response) {
        users.updatePhotos(request, response)
    })

    app.get("/api/chat", function (request, response) {
        chat.gettingChat(request, response);
    })

    app.post("/api/chat", function (request, response) {
        chat.postingText(request, response);
    });
    app.delete("/api/users/", function (request, response) {
        users.deleteOne(request, response)
    })

    app.put("/api/users/", function (request, response) {
        users.updateOne(request, response)
    })
}