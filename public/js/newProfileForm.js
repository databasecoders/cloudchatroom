$("#update-button").on("click", function () {
    event.preventDefault()
    var username = $(".userName").val();
    var profilePic = $("#profilePic").val();
    var bkgimage = $("#bkgimage").val();
    var bio = $("#bio").val();

    var updateProfile = {
        user_name: username,
        user_image: profilePic,
        user_bkgimage: bkgimage,
        user_bio: bio
    }
    console.log(updateProfile)
});