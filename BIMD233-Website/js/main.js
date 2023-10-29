let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
        logoSpan.forEach(function(span, idx){
            setTimeout(function(){
                span.classList.add('active');
            }, (idx + 1) * 800)
            
            
        })
        setTimeout(function(){
            logoSpan.forEach(function(span, idx){
                setTimeout(function(){
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 200)
            })
        }, 3000);

        setTimeout(function(){
            intro.style.top = '-100vh';
        }, 4200)
    })
})

$("#right").hide();

setTimeout(function(){
    const txt1 = `Hi!`;
    const txt2 = ` I am`;
    const txt3 = `Lawrence Kyle Isla`;

    let i = 0;
    let j = 0;
    let k = 0;
    

    $('#greeting').append("<span id='cursor'>|</span>");
    setInterval(function(){
        $('#greeting span.text').append(txt1[i]);
        i++;
    }, 100)
    setTimeout(function(){
        $("#cursor").addClass("blinking");
    }, 500)
    setTimeout(function(){
        $("#cursor").removeClass("blinking");
        setInterval(function(){
            $('#greeting span.text').append(txt2[j]);
            j++;
        }, 50)
    }, 2500)
    setTimeout(function(){
        $("#cursor").remove();
        $("#name").append("<span id='cursor2'>|</span>");
    }, 2750)
    setTimeout(function(){
        setInterval(function(){
            $('#name span.text').append(txt3[k]);
            k++;
        }, 100)
    }, 2900)
    setTimeout(function(){
        $("#cursor2").addClass("blinking2");
    }, 5000)
    
    setTimeout(function(){
        $("#right").fadeIn(2250);
    }, 5300)
}, 6400)
