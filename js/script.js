//$('.dropdown-hover-item').hover(function() {
//  $('.dropdown-menu').fadeIn(450);
//}, function() {
//  $('.dropdown-menu').fadeOut(450);
//});
//
//
//$(window).scroll(function() {    
//    var scroll = $(window).scrollTop();
//
//    if (scroll >= 310) {
//        $(".about-me-container").addClass("show2");
//        $(".text-box").addClass("animated fadeInLeft");
//        $(".video-box").addClass("animated fadeInRight");
//    }
//});
//
//
//
//$(window).scroll(function() {    
//    var scroll = $(window).scrollTop();
//
//    if (scroll >= 985) {
//        $(".skill-item").addClass("animated rotateIn show");
//    }
//});
//
//
//
//$(window).scroll(function() {    
//    var scroll = $(window).scrollTop();
//
//    if (scroll >= 100) {
//        $(".cover-title").addClass("animated fadeOutUp");
//        $(".cover-desc").addClass("animated fadeOutUp");
//        $(".header-container").addClass("animated fadeOutUp");
//    }
//    
//    else {
//        $(".cover-title").removeClass("fadeOutUp");
//        $(".cover-desc").removeClass("fadeOutUp");
//        $(".header-container").removeClass("fadeOutUp");
//        $(".cover-title").addClass("fadeInDown");
//        $(".cover-desc").addClass("fadeInDown");
//        $(".header-container").addClass("fadeInDown");
//    }
//});
//
//
//
//$(function () {
//  $('[data-toggle="tooltip"]').tooltip()
//})






$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".portfolio").addClass("active-block");
        $(".welcome").removeClass("active-block");
        $(".post-title").addClass("animated fadeInLeft");
    }
    
    else {
        
        $(".welcome").addClass("active-block");
        $(".portfolio").removeClass("active-block");
        $(".post-title").addClass("animated fadeInLeft");
        
        $(".main-text").delay(200).queue(function(){
            $(".main-text").addClass("animated fadeInLeft show-it");
            $(".main-text").dequeue();
        });
        
        $(".graphic-content-box").addClass("animated fadeInLeft");
        $(".active-btn").addClass("animated fadeIn");
    }
});







//
//
//
//$(window).ready(function() {    
//    $(".welcome-post-title").addClass("animated fadeInLeft show-it");
//    
//    $(".welcome-main-text").delay(200).queue(function(){
//        $(".welcome-main-text").addClass("animated fadeInLeft show-it");
//        $(".welcome-main-text").dequeue();
//    });
//    
//    $(".welcome-graphic-content-box").delay(200).queue(function(){
//        $(".welcome-graphic-content-box").addClass("animated fadeInLeft show-it");
//        $(".welcome-graphic-content-box").dequeue();
//    });
//    
//    $(".welcome-btn").delay(670).queue(function(){
//        $(".welcome-btn").addClass("animated fadeIn show-it");
//        $(".welcome-btn").dequeue();
//    });
//    
//    $(".scroll-down").delay(1400).queue(function(){
//        $(".scroll-down").addClass("animated fadeInUp show-it");
//        $(".scroll-down").dequeue();
//    });
//    
//    
//    console.log('test');
//    $(window).scroll(function() {    
//    var scroll = $(window).scrollTop();
//    console.log("scroll");
//    
//    if (scroll >= 20) {
//        $(".welcome-post-title").addClass("fadeOutLeft hide-it");
//        $(".welcome-main-text").addClass("fadeOutLeft hide-it");
//        $(".welcome-graphic-content-box").addClass("fadeOutLeft hide-it");
//        $(".welcome-btn").addClass("fadeOutLeft hide-it");        
//        
//        
//        $(".portfolio-post-title").addClass("animated fadeInLeft show-it");
//        $(".portfolio-main-text").delay(200).queue(function(){
//            $(".portfolio-main-text").addClass("animated fadeInLeft show-it");
//            $(".portfolio-main-text").dequeue();
//        });
//        $(".portfolio-graphic-content-box").delay(200).queue(function(){
//            $(".portfolio-graphic-content-box").addClass("animated fadeInLeft show-it");
//            $(".portfolio-graphic-content-box").dequeue();
//        });
//        $(".portfolio-btn").delay(670).queue(function(){
//            $(".portfolio-btn").addClass("animated fadeIn show-it");
//            $(".portfolio-btn").dequeue();
//        });
//        }
//    
//    else {
//        $(".welcome-post-title").removeClass("fadeOutLeft hide-it");
//        $(".welcome-post-title").addClass("fadeInLeft");
//    }
//});
//    
//    console.log('test2');
//});





//$('.scroll-down').hover(function() {
//  $(".post-title").addClass("fadeOutLeft hide-it");
//});


