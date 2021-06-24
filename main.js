$(document).ready(function () {
  
  $('header ul > li > a').parent().has('ul').on('click', function () {
    $(this).toggleClass('showSubMenu')  
  })

  $('header .logo .toggle-mobile').on('click', function () {
    $('header nav').toggleClass('show')
    $('header ul > li').removeClass('showSubMenu')
  })

  $('section.what-we-offer .item').on('click', function () {
    if (!$(this).hasClass('expanded')) {
      $('section.what-we-offer .item').removeClass('expanded')
    }
    $(this).toggleClass('expanded')
  })
   
  $('section.promises .card-item').on('click', function () {

    if (!$(this).hasClass('active')) {
      $('section.promises .card-item').removeClass('active')  
    }
    $(this).toggleClass('active')
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

  $('#slick-leader-mind .slick-app').slick({
    nextArrow: nextArrow,
    prevArrow: prevArrow,
    appendDots: $('#slick-leader-mind'),
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

  $('#slick-partner').slick({
    nextArrow: nextArrow,
    prevArrow: prevArrow,
    appendDots: $('#slick-partner'),
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1213,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
    ]
  });

  $('section.promises .card-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: 'unslick',
      }
    ]
  });

  $('section.our-people .tab-display-group .division').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: 'unslick',
      }
    ]
  });


  // Our People Group
  $('section.our-people .tab-selector-group ul li').each(function () {
    if ($(this).hasClass('active')) {
      var currentActive = $(this).text();
      $('section.our-people .current .text').text(currentActive);
    }
  })
  $('section.our-people .tab-selector-group ul li').on('click', function () {
    $('section.our-people .tab-selector-group ul li').removeClass('active')
    $(this).addClass('active');
    var activeTab = $(this).text();
    var activeVal = $(this).data('active');
    $('section.our-people .tab-display-group .division').removeClass('active');
    $('section.our-people .tab-display-group .' + activeVal).addClass('active');
    $('section.our-people .current  .text').text(activeTab);
  })
  $('section.our-people .current').on('click', function () {
    $('section.our-people .tab-selector-group ul').toggleClass('show')
  })
  $('section.our-people .tab-selector-group ul').on('click', function () {
    $('section.our-people .tab-selector-group ul').removeClass('show')
  })

})
