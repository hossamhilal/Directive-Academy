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
    $('.field input').focus(function(){
        $(this).parent('.field').addClass('focused');
    });
    $('.field textarea').focus(function(){
        $(this).parent('.field').addClass('focused');
    });
    $('.field input').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.field').removeClass('focused');
    });
    $('.field textarea').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.field').removeClass('focused');
    });

    // Show Password 
    $('.showPassword').on('click' , function(){
        let input = $(this).prev('input');
        if (input.attr('type') == "password") {
            input.attr('type' , 'text');
        } else {
            input.attr('type' , 'password');
        }
    });

    // Allow Field Edit 
    $('.editField').on('click' , function(){
        let input = $(this).prev('input');
        input.prop('disabled', function () {
            return ! $(this).prop('disabled');
        });
    });

    // Show DropList
    $('.hasDropdown').on('click' , function(e){
        e.stopPropagation();
        $(this).find('.dropList').toggleClass('show');
    });

    // Hide DropList
    $(document).on('click' , function(){
        $(this).find('.dropList').removeClass('show');
    });

    // Upload Avatar 
    function readURL(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let Preview = $('.avatarUploadPreview');
                let previewImage =  Preview.find('img');
                let src = e.target.result;
                Preview.hide();
                previewImage.attr('src' , src );
                Preview.fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $('#avatarUploadInput').change(function() {
        readURL(this);
    });

    //  datepicker using icon
    $('.calenderIcon').on('click' , function(){
        $('.date').datepicker();
    });

    //  datepicker using Input
    $('.date').datepicker();

    //Accordion
    $('.accordionHead').on('click' , function(){
        if( $(this).parent('.accordion').hasClass('open')) {
            $('.accordion').removeClass('open');
        } else {
            $('.accordion').removeClass('open');
            $(this).parent('.accordion').addClass('open');
        }
    });

    // Upload File 
    $('.uploadBtnBox').on('click' , function(){
        let input = $(this).find('input');
        let FileName = $(this).prev('.fileName');
        input.on('change', function(){
            let file = input[0].files[0].name;
            console.log (file);
            FileName.text(file);
        })
    });

    // Add Course 
    $('.addCourse').on('click' , function(){
        let field = '<div class="field">' +
                        '<input type="text" placeholder="برجاء ادخال اسم الدورة">' +
                        '<span class="deleteField"><i class="icofont-close-line"></i>' +
                    '</div>' ;
        $('.newFields').append(field);
    });

    // Delete Course Field
    $(document).on('click' , '.deleteField' , function(){
        $(this).parent('.field').remove();
    });

    // Upload Resume 
    $('.uploadResume').on('click' , function(){
        let input = $(this).find('input');
        let FileName = $(this).prev('.name');
        input.on('change', function(){
            let file = input[0].files[0].name;
            FileName.text(file);
        })
    });

    // Upload Certifications 
    $('.uploadcertification').on('click' , function(){
        let input = $(this).find('input');
        let list = $(this).prev('.certificationsList').find('ul');

        input.on('change', function() {
            let files = input[0].files;
            let totalFiles = files.length
            if (list.length > 0) {
                list.empty();
            }
            for(let i = 0; i < totalFiles; i++) {
                let li = document.createElement('li');
                li.innerHTML = '<i class="icofont-ui-file"></i>' + input[0].files[i].name;
                list.append(li);
            }
        });
    });

    // Open PopUp
    $('.showCenterPopup').on('click' , function(){
        $('.centerPopup').addClass('show');
        $('body').addClass('stopScroll');
    });

    // Close PopUp
    $('.centerPopup .overlay').on('click' , function(){
        $('.centerPopup').removeClass('show');
        $('body').removeClass('stopScroll');
    });
    
           
    

                                
    

    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

