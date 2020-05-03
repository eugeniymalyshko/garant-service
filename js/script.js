$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbar-toggler").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#navbarSupportedContent").collapse('hide');
    }
  });
});
$(document).ready(function(){
	$(window).scroll(function(){
	if ($(this).scrollTop() > 250) {
	$('.scrollup').fadeIn();
	} else {
	$('.scrollup').fadeOut();
	}
});
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 800);
return false;
});
 
});
