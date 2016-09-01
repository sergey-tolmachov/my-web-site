$('.dropdown-hover-item').hover(function() {
  $('.dropdown-menu').fadeIn(450);
}, function() {
  $('.dropdown-menu').fadeOut(450);
});

$('.dropdown-hover-item').hover(function() {
  $(".header-container").toggleClass("header-big");
});

$(document).ready(function() {
  $(".header-container").addClass("animated fadeInDown");
});


$(document).ready(function() {
  $(".preview").addClass("animated zoomIn");
});