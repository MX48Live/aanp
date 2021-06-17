$(document).ready(function () {

  $('header ul > li > a').parent().has('ul').on('click', function () {
    $(this).toggleClass('showSubMenu')
  })

  $('header .logo .toggle-mobile').on('click', function () {
    $('header nav').toggleClass('show')
    $('header ul > li').removeClass('showSubMenu')
  })


})