

$(document).ready(function () {

    //slider
    $(".slider").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        margin: 10,
        nav: false,
        dots: true,
        dotsEach: true,
        responsiveClass: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: true,
        smartSpeed: 450,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft'
    });

    //testimonial slider
    $('.testimonials').carousel({
        number: 4
    });

    //portfolio
    $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });

    //nicescroll
    $("html").niceScroll({
        cursorcolor: "#f74d65",
        scrollspeed: "100",
        cursorborder: "1px solid #f74d65",
        horizrailenabled: "false",
        cursorborderradius: "0px"
    });

    //menu active calling scroll spy
    $("body").scrollspy({
        target: ".main_menu",
        offset: 80
    });
});

//smooth page scroll
$(function () {

   $("a[href*=#]:not([href=#])").click(function () {
       if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $("[name" + this.hash.slice(1) +"]");
           if(target.length) {
               $("html, body").animate({
                   scrollTop: target.offset().top
               }, 1000);
               return false;
           }
       }
   });
});

//Preloader
$(window).load(function () { //make sure full site is loades
    $('#status').fadeOut(); //will first fadeout the loading animation
    $('#preloder').delay(350).fadeOut('slow'); //will fadeout white DIV that covers the website
    $('body').delay(350).css({'overflow': 'visible'});
});    
    