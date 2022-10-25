$(document).ready(function () {
    $(".testimonials-sliders").slick({
        arrows: false,
        Infinity: true,
        dots: true,
        autoplay: true,
    })

    // menu fixed
    let headerBottom = $(".header-bottom");
    // console.log(headerBottom);
    $(document).scroll(function(){
        // console.log($(this).scrollTop());
        if($(this).scrollTop() > 737){
            headerBottom.addClass("fixed")
        }else{
            headerBottom.removeClass("fixed")
        }
    })

    // scroll down
    $(".header-link").click(function(e){
        e.preventDefault()
        $("html, body").animate(
            {scrollTop: $(".header-bottom-block").offset().top}, 800
        )
    })

    // burger Menu
    $(".burger-menu").click(function(){
    $(".burger-menu span").toggleClass("active")
    $(".nav").toggleClass("active")
    })
});