$(document).ready(function() {
	$(".icon-menu").click(function() {
		$(".header-menu-box2").toggleClass("fade-menu2");
	});
});






$(window).scroll(function() {
    if ($(document).scrollTop() > 250) {
	   	$(".avatar-text").fadeIn();
	   	}
	   	else {
	    $(".avatar-text").fadeOut();
      }
});
