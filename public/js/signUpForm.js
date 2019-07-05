$(document).ready(function () {
    $(".signUpButton").on("click", function () {
        event.preventDefault()
        $("#nameInvalid").hide()
        $("#emailInvalid").hide()
        $("#passwordEnter").hide()
        $("#passwordInvalid").hide()
        $("#checkboxInvalid").hide()
        $("#bioInvalid").hide()

        let name = $("#name").val()
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        let email = $("#email").val();
        let bio = $("#userBio").val()

        if (name == "") {
            $("#nameInvalid").show()
        } else if (!email.includes('@') || !email.includes('.')) {
            $("#emailInvalid").show()
        } else if (password == "" || confirmPassword == "") {
            $("#passwordEnter").show()
        } else if (password !== confirmPassword) {
            $("#passwordInvalid").show()
        } else if (bio == "") {
            $("#bioInvalid").show()
        } else if (!$("#checkbox").is(":checked")) {
            $("#checkboxInvalid").show()
        } else {
            let newUserInfo = {
                name: $("#name").val().trim(),
                password: $("#password").val().trim(),
                password_confirm: $("#confirmPassword").val().trim(),
                email: $("#email").val().trim(),
                bio: $("#userBio").val().trim(),
                user_image: localStorage.getItem("user_image"),
                one_image: localStorage.getItem("one_image"),
            }
            console.log('*****', newUserInfo);
            $.ajax({
                type: "POST",
                url: "/api/user",
                data: newUserInfo
            }).done(function (res) {
                console.log("success")
                window.location.replace('/')

            })
        }
    })
})