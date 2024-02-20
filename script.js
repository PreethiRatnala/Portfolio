$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY >500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide funtion script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // skills section script

    
    // owl carousel script

    $('.owl-carousel').owlCarousel({
        margin:20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHovePause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    
    $('#btn').click(function () {
        // Your existing code to handle the form submission goes here

        // Add a delay before clearing the fields
        setTimeout(function () {
            $('.field input, .field textarea').val('');
        }, 2000);

        // Add the notif function
        notif();
    });
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function notif() {
    let btn = document.getElementById("btn")
    await sleep(2000)
    btn.textContent = "Sent Successfully"
    await sleep(3000)
    btn.textContent = "Send Message"
}



