$(document).ready(function () {

  $('header ul > li > a').parent().has('ul').on('click', function () {
    $(this).toggleClass('showSubMenu')
  })

  $('header .logo .toggle-mobile').on('click', function () {
    $('header nav').toggleClass('show')
    $('header ul > li').removeClass('showSubMenu')
  })

  $('#slick-insight').slick({
    nextArrow: '<button type="button" class="slick-next"><span class="material-icons">chevron_right</span></button>',
    prevArrow: '<button type="button" class="slick-next"><span class="material-icons">chevron_left</span></button>',
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    responsive: [
      {
        breakpoint: 1213,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: '10%',
          dots: false,
        }
      },
      {
        breakpoint: 1007,
        settings: {
          arrows: false,
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '10%',
          dots: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '10%',
          dots: true,
        }
      },
    ]
  });

  $('#slick-clients .slick-app').slick({
    nextArrow: '<button type="button" class="slick-next"><span class="material-icons">chevron_right</span></button>',
    prevArrow: '<button type="button" class="slick-next"><span class="material-icons">chevron_left</span></button>',
    appendDots: $('#slick-clients'),
    dots: true,
    responsive: [
      {
        breakpoint: 1007,
        settings: {
          arrows: false,
        }
      },
    ]
  });
  $('#slick-we-aap').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 1007,
        settings: {
          arrows: false,
        }
      },
    ]
  });
})