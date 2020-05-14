$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbar-toggler").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#navbarSupportedContent").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbar-toggler").click(function (event) {
    $(event.target).focus();
  });
});




$(function(){
    $(".navbar-toggler").click(function(){ // задаем функцию при нажатиии на элемент с классом out
      $( ".caption" ).fadeToggle(); // плавно изменяя прозрачность скрываем все элементы <div>
    });
  });


//** ScrollUp Hide/Show **
$(function() {
  //при нажатии на кнопку scrollup
  $('.scrollup').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop: 0
    },1000);
  })
});
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut();
  }
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop:true,
    items: 1,
    margin:130,
    autoplay:true,
      autoplayTimeout:5600,
      autoplayHoverPause:true,
    stagePadding: 130,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    navContainer: '#customNav',
    responsive: {
      // > 0
      0 : {
        dots: false,
        margin:30,
        stagePadding: 30,
      },
      // > 768
      768 : {
        margin:130,
        stagePadding: 130,
        dots: true,
      }
    }
  });
});

$('.more-lists').on('click', function() {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active').text('Більше...');
    $(this).closest('.footer-service').find('ul li.hidden-list').slideUp();
  }
  else {
    $(this).addClass('active').text('Згорнути...');
    $(this).closest('.footer-service').find('ul li.hidden-list').slideDown();
  }
});


// Links to services in mobile view
$(function() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    $('.service-sm').on('click', function() {
      location.href = 'https://ukr.net';
      });
      
    $('.banquet-sm').on('click', function() {
      location.href = '#';
      });
      
    $('.catering-sm').on('click', function() {
      location.href = '#';
      });
      
    $('.categories-sm').on('click', function() {
      location.href = '#';
      });
  }
});








