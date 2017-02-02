$('.dropdown-hover-item').hover(function() {
  $('.dropdown-menu').fadeIn(450);
}, function() {
  $('.dropdown-menu').fadeOut(450);
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 310) {
        $(".about-me-container").addClass("show2");
        $(".text-box").addClass("animated fadeInLeft");
        $(".video-box").addClass("animated fadeInRight");
    }
});



$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 985) {
        $(".skill-item").addClass("animated rotateIn show");
    }
});



$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".cover-title").addClass("animated fadeOutUp");
        $(".cover-desc").addClass("animated fadeOutUp");
        $(".header-container").addClass("animated fadeOutUp");
    }
    
    else {
        $(".cover-title").removeClass("fadeOutUp");
        $(".cover-desc").removeClass("fadeOutUp");
        $(".header-container").removeClass("fadeOutUp");
        $(".cover-title").addClass("fadeInDown");
        $(".cover-desc").addClass("fadeInDown");
        $(".header-container").addClass("fadeInDown");
    }
});



$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})









$(window).ready(function() {    
    $(".post-title").addClass("animated fadeInLeft show-it");
    
    $(".main-text").delay(200).queue(function(){
        $(".main-text").addClass("animated fadeInLeft show-it");
        $(".main-text").dequeue();
    });
    
    $(".graphic-content-box").delay(200).queue(function(){
        $(".graphic-content-box").addClass("animated fadeInLeft show-it");
        $(".graphic-content-box").dequeue();
    });
    
    $(".active-btn").delay(670).queue(function(){
        $(".active-btn").addClass("animated fadeIn show-it");
        $(".active-btn").dequeue();
    });
    
    $(".scroll-down").delay(1400).queue(function(){
        $(".scroll-down").addClass("animated fadeInUp show-it");
        $(".scroll-down").dequeue();
    });
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".post-title").addClass("fadeOutLeft hide-it");
    }
    
    else {
        $(".post-title").removeClass("fadeOutLeft hide-it");
        $(".post-title").addClass("fadeInLeft");
    }
});


$('.scroll-down').hover(function() {
  $(".post-title").addClass("fadeOutLeft hide-it");
});


