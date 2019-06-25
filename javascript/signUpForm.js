$(".signUpButton").on("click", function () {
    event.preventDefault()
    var name = $("#username").val()
    var password = $("#password").val()
    var profilePic = $("#profilePic").val()

    var newUserInfo = {
        user_name: name,
        user_password: password,
        user_image: profilePic
    }
    console.log(newUserInfo)
})