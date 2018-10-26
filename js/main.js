// Nav Toggle

$('.masthead').removeClass('sticky')

$('.tog-nav').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('open');
  $('.header-nav').toggleClass('open');
  $('.masthead').toggleClass('open');
});

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.masthead').addClass('sticky')
      }
      if ($(this).scrollTop() < 50) {
        $('.masthead').removeClass('sticky')
      }
   });
});

$('.testimonials .next').on('click', function (e) {
  e.preventDefault();
  var oneIsActive = $('#quote-1').hasClass('active');
  var twoIsActive = $('#quote-2').hasClass('active');
  var threeIsActive = $('#quote-3').hasClass('active');

  if (oneIsActive) {
    $('#quote-1').fadeOut();
    $('#quote-1').removeClass('active');
    $('#quote-2').addClass('active');
    $('#quote-2').fadeIn();
  }

  if (twoIsActive) {
    $('#quote-2').fadeOut();
    $('#quote-2').removeClass('active');
    $('#quote-3').addClass('active');
    $('#quote-3').fadeIn();
  }

  if (threeIsActive) {
    $('#quote-3').fadeOut();
    $('#quote-3').removeClass('active');
    $('#quote-1').addClass('active');
    $('#quote-1').fadeIn();
  }
});

$('.testimonials .previous').on('click', function (e) {
  e.preventDefault();
  var oneIsActive = $('#quote-1').hasClass('active');
  var twoIsActive = $('#quote-2').hasClass('active');
  var threeIsActive = $('#quote-3').hasClass('active');

  if (oneIsActive) {
    $('#quote-1').fadeOut();
    $('#quote-1').removeClass('active');
    $('#quote-3').addClass('active');
    $('#quote-3').fadeIn();
  }

  if (twoIsActive) {
    $('#quote-2').fadeOut();
    $('#quote-2').removeClass('active');
    $('#quote-1').addClass('active');
    $('#quote-1').fadeIn();
  }

  if (threeIsActive) {
    $('#quote-3').fadeOut();
    $('#quote-3').removeClass('active');
    $('#quote-2').addClass('active');
    $('#quote-2').fadeIn();
  }
});

$('.accordian-label').on('click', function() {
  // $('.accordian-label.open').removeClass('open');
  $(this).toggleClass('open');
});
