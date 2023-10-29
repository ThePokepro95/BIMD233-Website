$(window).on("load",function(){
    setTimeout(function(){
        $(".loader-wrapper").fadeOut("slow");
        $("#description").hide();
        $("#featured-projects").hide();
        $("#1").hide();
        $("#2").hide();
        $("#3").hide();
    }, 1500)
    
})

setTimeout(function(){
    $('#description').fadeIn(1000);
}, 2000)

setTimeout(function(){
    $('#featured-projects').fadeIn(1000);
}, 2500)

setTimeout(function(){
    $('#1').fadeIn(1000);
}, 3000)
setTimeout(function(){
    $('#2').fadeIn(1000);
}, 3500)
setTimeout(function(){
    $('#3').fadeIn(1000);
}, 4000)