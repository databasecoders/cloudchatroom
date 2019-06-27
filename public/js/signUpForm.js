$(document).ready(function () {
    $(".signUpButton").on("click", function () {
        event.preventDefault()
        $("#usernameInvalid").hide()
        $("#emailInvalid").hide()
        $("#passwordInvalid").hide()
        $("#checkboxInvalid").hide()
        verifyUser()
    })
})


function verifyUser() {
    var name = $("#username").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirmPassword").val();
    var email = $("#email").val();

    if (name == "") {
        $("#usernameInvalid").show()
    } else if (!email.includes('@') || !email.includes('.')) {
        $("#emailInvalid").show()
    } else if (password !== confirmPassword) {
        $("#passwordInvalid").show()
    } else if ($("#checkbox".checked = false)) {
        $("#checkboxInvalid").show()
    } else {
        var newUserInfo = {
            username: name,
            email: email,
            password: password
        }
        $.ajax({
            type: "POST",
            url: "/api/users/create",
            data: newUserInfo
        }).done(function (res) {
            console.log("success")
            window.location.href = "/profile"
        });
    }
};