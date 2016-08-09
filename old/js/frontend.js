$(document).ready(function() {
	$(".icon-menu").click(function() {
		$(".header-menu-box2").toggleClass("fade-menu2");
		$(".icon-menu").toggleClass("icon-menu-focus");
	});
});


$('.carousel').carousel({
  interval: 20000000
})