//$('.dropdown-hover-item').hover(function() {
//  $('.dropdown-menu').fadeIn(700);
//}, function() {
//  $('.dropdown-menu').fadeOut(700);
//});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 310) {
        $(".text-box").addClass("animated fadeInLeft show");
        $(".video-box").addClass("animated fadeInRight show");
    }
//    
//    else {
//        $(".animated").addClass("hide");
//    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 985) {
        $(".skill-item").addClass("animated rotateIn show");
    }
//    
//    else {
//        $(".animated").addClass("hide");
//    }
});


$(window).ready(function() {
    $(".right-box").addClass("animated rotateIn");
    }
});
