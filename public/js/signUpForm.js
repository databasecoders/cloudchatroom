$(document).ready(function () {
    $(".signUpButton").on("click", function () {
        event.preventDefault()
        $("#usernameInvalid").hide()
        $("#emailInvalid").hide()
        $("#passwordEnter").hide()
        $("#passwordInvalid").hide()
        $("#checkboxInvalid").hide()

        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        let email = $("#email").val();

        if (!email.includes('@') || !email.includes('.')) {
            $("#emailInvalid").show()
        } else if (password == "" || confirmPassword == "") {
            $("#passwordEnter").show()
        } else if (password !== confirmPassword) {
            $("#passwordInvalid").show()
        } else if (!$("#checkbox").is(":checked")) {
            $("#checkboxInvalid").show()
        } else {
            let newUserInfo = {
                name: $("#name").val().trim(),
                password: $("#password").val().trim(),
                password_confirm: $("#confirmPassword").val().trim(),
                email: $("#email").val().trim(),
                user_image: localStorage.getItem("user_image")
            }
            console.log('*****', newUserInfo);
            $.ajax({
                type: "POST",
                url: "/api/user",
                data: newUserInfo
            }).done(function (res) {
                console.log("success")
                // console.log(res.user_id);
                // var newUser = res.user_id;
                // window.location.replace('/profile/' + newUser);
                // window.location.href = "/"
                window.location.replace('/')

            })
        }
    })
})