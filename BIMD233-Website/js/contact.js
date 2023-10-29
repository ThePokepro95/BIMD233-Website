let messages = [];

$(window).on("load",function(){
    setTimeout(function(){
        $(".loader-wrapper").fadeOut("slow");
    }, 1500)
    
})

function receiveInfo(){
    if ($("#email").val().length === 0 || $("#subject").val().length === 0 || $("#msg").val().length === 0){
        alert("Please do not leave any empty fields.");
        return;
    } else {
        let message = {
            email: $("#email").val(),
            subject: $("#subject").val(),
            text: $("#msg").val()
        }

        console.log(message);
        messages.push(message);

        $("#email").val("");
        $("#subject").val("");
        $("#msg").val("");
        $("#submitted").removeClass("invisible");
        setTimeout(function(){
            $("#submitted").fadeTo(2000, 0);
            setTimeout(function(){
                $("#submitted").addClass("invisible");
                $("#submitted").fadeTo(1, 1);
            }, 2001)
        }, 1000)
    }
}
