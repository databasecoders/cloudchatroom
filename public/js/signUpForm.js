$(document).ready(function () {
    $(".signUpButton").on("click", function () {
        console.log("click")
        event.preventDefault()
        var name = $("#username").val()
        var password = $("#password").val()
        var email = $("#email").val()

        var newUserInfo = {
            username: name,
            email: email,
            password: password
        }
        console.log(newUserInfo)
        $.ajax({
            type: "POST",
            url: "/api/users/create",
            data: newUserInfo
        }).done(function (res) {
            console.log("success")
            window.location.href = "/profile"
        });
    })
})