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
    let name = $("#username").val();
    let password = $("#password").val();
    let confirmPassword = $("#confirmPassword").val();
    let email = $("#email").val();

    if (name == "") {
        $("#usernameInvalid").show()
    } else if (!email.includes('@') || !email.includes('.')) {
        $("#emailInvalid").show()
    } else if (password !== confirmPassword) {
        $("#passwordInvalid").show()
    } else if (!$("#checkbox").is(":checked")) {
        $("#checkboxInvalid").show()
    } else {
        let newUserInfo = {
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