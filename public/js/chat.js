$("#chatSubmit").on("click", function () {
    console.log("chatSubmit Running");
    var textObject = {
        "userInput": $("#userInput").val()
    }
    sendData(textObject);
});

let sendData = function (textObject) {
    $.ajax({
        method: 'POST',
        url: 'http://localhost:9000/api/chat',
        data: textObject
    }).then(function (data) {})
}