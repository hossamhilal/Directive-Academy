/*global $ */
(function($) {
    "use strict";

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $('.navMenu').toggleClass('show');
        $('.navOverlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.navOverlay').on('click', function(){
        $(this).removeClass('show');
        $('.navMenu').removeClass('show');  
        $('body').removeClass('stopScroll');  
    });
    
    // Header OWL 
    $('.owlHeader').owlCarousel({
        rtl: true ,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots: true,
        autoplaySpeed : 4000,
        autoplayTimeout : 4000,
        navText: ["<i class='iconRight'></i>", "<i class='iconLeft'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });

    // Courses OWL 
    $('.owlCourses').owlCarousel({
        rtl: true ,
        margin: 10,
        autoplay: false,
        loop: false,
        nav: true,
        dots: true,
        center : false ,
        autoplaySpeed : 4000,
        autoplayTimeout : 4000,
        navText: ["<i class='iconRight'></i>", "<i class='iconLeft'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Testimonial OWL 
    $('.owlTestimonial').owlCarousel({
        rtl: true ,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots: true,
        center : true ,
        autoplaySpeed : 4000,
        autoplayTimeout : 4000,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Videos OWL 
    $('.owlVideos').owlCarousel({
        rtl: true ,
        margin: 10,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        center : true ,
        autoplaySpeed : 1000,
        autoplayTimeout : 1000,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Partners OWL 
    $('.owlPartners').owlCarousel({
        rtl: true ,
        margin: 10,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        autoplaySpeed : 1000,
        autoplayTimeout : 1000,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    // Btn Animation 
    $('.Btn').mouseenter(function(e) {
        let parentOffset = $(this).offset();   
        let relX = e.pageX - parentOffset.left;
        let relY = e.pageY - parentOffset.top;
        $(this).find('.btnHover').css({"left": relX, "top": relY });
        $(this).find('.btnHover').addClass('animateOut');     
    });
     
    $('.Btn').mouseleave(function(e) {    
        let parentOffset = $(this).offset(); 
        let relX = e.pageX - parentOffset.left;
        let relY = e.pageY - parentOffset.top;
        $(this).find('.btnHover').css({"left": relX, "top": relY });
        $(this).find('.btnHover').removeClass('animateOut');     
    });

    // Tabs 
    $('.tabsList a').click(function (e) {
        e.preventDefault();
        $('.tabsList a').removeClass('active');
        $(this).addClass('active');
        let itemId = $(this).attr("href"); 
        $('.tabContent').removeClass('active'); 
        $(itemId).addClass('active');  
    });

    // Home Video
    $('.homeVideoBox .playButton').on('click', function() {
        let $this = $(this).parents('.homeVideoBox');
        $this.html('<iframe src="https://www.youtube.com/embed/' + $this.data("video") + '?autoplay=1"></iframe>');
    });

    // Open PopUp
    $('.showPopup').on('click' , function(){
        $('.popUp').addClass('show');
        $('body').addClass('stopScroll');
    });

    // Close PopUp
    $('.closePopup').on('click' , function(){
        $('.popUp').removeClass('show');
        $('body').removeClass('stopScroll');
    });

    // Video Slider
    $('.playButton.showPopup').on('click' , function(){
        let video = $(this).parents('.videoItem').find('iframe');
        $('.videoPopup .popupContent').html(video);
    });

    // Fileds Animation
    $('.field .form-control').focus(function(){
        $(this).parent('.field').addClass('focused');
    });

    $('.field .form-control').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('focused');   
        }
    });

    $('.field .form-control').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.field').removeClass('focused');
    });


    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

