$(document).ready(function () {
  AOS.init();
  
  $('header ul > li > a').parent().has('ul').on('click', function () {
    $(this).toggleClass('showSubMenu')
  })

  $('header .logo .toggle-mobile').on('click', function () {
    $('header nav').toggleClass('show')
    $('header ul > li').removeClass('showSubMenu')
  })

  $('section.what-we-offer .item').on('click', function () {
    $('section.what-we-offer .item').removeClass('expanded')
    $(this).toggleClass('expanded')
  })

  $('#slick-clients .slick-app .item .video').on('click', function () {
    var youtubeID = $(this, '.video').data('youtube-id');
    $(this).html('<iframe src="https://www.youtube.com/embed/'+youtubeID+'?rel=0&autoplay=1" width="320" height="240" frameborder="0" allowfullscreen="true">').css('background', 'none');
  })

  var nextArrow = '<button type="button" class="slick-next"><img src="/images/arrow-right.svg" /></button>';
  var prevArrow = '<button type="button" class="slick-prev"><img src="/images/arrow-left.svg" /></button>';

  $('#slick-hero .slick-app').slick({
    nextArrow: nextArrow,
    prevArrow: prevArrow,
    appendDots: $('#slick-hero'),
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
    nextArrow: nextArrow,
    prevArrow: prevArrow,
    appendDots: $('#slick-insight'),
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1213,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '10%',
          dots: false,
        }
      },
      {
        breakpoint: 1007,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          variableWidth: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          variableWidth: true,
        }
      },
    ]
  });

  $('#slick-clients .slick-app').slick({
    nextArrow: nextArrow,
    prevArrow: prevArrow,
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
    nextArrow: nextArrow,
    prevArrow: prevArrow,
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
    nextArrow: nextArrow,
    prevArrow: prevArrow,
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
