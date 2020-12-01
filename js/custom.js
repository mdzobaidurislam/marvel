$(document).ready(function(){
    $('.slide_section').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.counter').counterUp({
        delay: 1,
        time: 500
    });
    new WOW().init();

      // sticky
      $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 1000) {
            $(".menuarea").removeClass("stikyadded");
        } else {
            $(".menuarea").addClass("stikyadded");
        }
    });

    // Work Filter 
    $(window).on("load", function () {
        var e = $(".work-filter"),
            a = $("#menu-filter");
        e.isotope({ filter: "*", layoutMode: "masonry", animationOptions: { duration: 750, easing: "linear" } }),
            a.find("a").on("click", function () {
                var o = $(this).attr("data-filter");
                return a.find("a").removeClass("active"), $(this).addClass("active"), e.isotope({ filter: o, animationOptions: { animationDuration: 750, easing: "linear", queue: !1 } }), !1;
            });
    });

});