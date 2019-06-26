$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".has-dropdown").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".has-dropdown").toggleClass("is-active");

    });
});