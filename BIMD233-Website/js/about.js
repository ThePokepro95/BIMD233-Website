$(window).on("load",function(){
    setTimeout(function(){
        $(".loader-wrapper").fadeOut("slow");
        $('#left').hide();
        $('#right').hide();
    }, 1500)
})

setTimeout(function(){
    $('#left').fadeIn(1000);
}, 2000)

setTimeout(function(){
    $('#right').fadeIn(1000);
}, 3000)