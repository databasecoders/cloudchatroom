$(document).ready(function () {
    $(".signUpButton").on("click", function () {
        event.preventDefault()
        $("#usernameInvalid").hide()
        $("#emailInvalid").hide()
        $("#passwordEnter").hide()
        $("#passwordInvalid").hide()
        $("#checkboxInvalid").hide()

        let name = $("#username").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        let email = $("#email").val();

        if (name == "") {
            $("#usernameInvalid").show()
        } else if (!email.includes('@') || !email.includes('.')) {
            $("#emailInvalid").show()
        } else if (password == "" || confirmPassword == "") {
            $("#passwordEnter").show()
        } else if (password !== confirmPassword) {
            $("#passwordInvalid").show()
        } else if (!$("#checkbox").is(":checked")) {
            $("#checkboxInvalid").show()
        } else {
            let newUserInfo = {
                username: $("#username").val(),
                password: $("#password").val(),
                password_confirm: $("#confirmPassword").val(),
                email: $("#email").val()
            }

            $.ajax({
                type: "POST",
                url: "/api/user",
                data: newUserInfo
            }).done(function (res) {
                console.log("success")
                window.location.href = "/"
            })
        }
    })
})