//$('.portfolio-dropdown').hover(function() {
//  $('.dropdown-menu').fadeIn(700);
//}, function() {
//  $('.dropdown-menu').fadeOut(700);
//});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 915) {
        //clearHeader, not clearheader - caps H
        $(".animated").addClass("rotateIn show");
    }
//    
//    else {
//        $(".animated").addClass("hide");
//    }
}); //missing );