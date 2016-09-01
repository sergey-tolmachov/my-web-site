$('.dropdown-hover-item').hover(function() {
  $('.dropdown-menu').fadeIn(450);
}, function() {
  $('.dropdown-menu').fadeOut(450);
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 310) {
        $(".text-box").addClass("animated fadeInLeft show");
        $(".video-box").addClass("animated fadeInRight show");
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