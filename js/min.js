$(function() {
  $('.js-nav a, .js-connect').click(function() {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});




