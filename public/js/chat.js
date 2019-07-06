$("#chatSubmit").on("click", function(){
    console.log("chatSubmit Running");
    var textObject = {
        "userInput" : $("#userInput").val()
    }
    sendData(textObject);
});

let sendData = function(textObject){
    $.ajax({
    method: 'POST',
    url: 'http://localhost:9000/api/chat',
    data: textObject
}).then(function(data){
    //confirmation I guess
})
}
// $.get('/api/users', function (data) {
//     console.log(data)

//     console.log(data[0].user_name);
//     // var row = $("<div>");
//     // row.addClass("user_name");
//     $('#chat-area').append(` users: ${data[0].user_name} `)
//     // $("#chat-area").prepend(row);



// })

// path public/frontjs/
