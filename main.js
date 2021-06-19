$(document).ready(function () {

  $('header ul > li > a').parent().has('ul').on('click', function () {
    $(this).toggleClass('showSubMenu')
  })

  $('header .logo .toggle-mobile').on('click', function () {
    $('header nav').toggleClass('show')
    $('header ul > li').removeClass('showSubMenu')
  })

  $('#slick-hero .slick-app').slick({
    nextArrow: '<button type="button" class="slick-next"><span class="material-icons">chevron_right</span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="material-icons">chevron_left</span></button>',
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

  $('#slick-insight').slick({
    nextArrow: '<button type="button" class="slick-next"><span class="material-icons">chevron_right</span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="material-icons">chevron_left</span></button>',
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    responsive: [
      {
        breakpoint: 1213,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          slidesToScroll: 2,
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
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '10%',
          dots: true,
        }
      },
    ]
  });

  $('#slick-clients .slick-app').slick({
    nextArrow: '<button type="button" class="slick-next"><span class="material-icons">chevron_right</span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="material-icons">chevron_left</span></button>',
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

  $('#slick-we-aap .slick-app').slick({
    nextArrow: '<button type="button" class="slick-next"><span class="material-icons">chevron_right</span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="material-icons">chevron_left</span></button>',
    appendDots: $('#slick-we-aap'),
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

  $('#slick-what-we-offer .slick-app').slick({
    nextArrow: '<button type="button" class="slick-next"><span class="material-icons">chevron_right</span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="material-icons">chevron_left</span></button>',
    appendDots: $('#slick-what-we-offer'),
    dots: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1415,
        settings: {
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1213,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1007,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: "unslick"
      },
    ]
  });

})