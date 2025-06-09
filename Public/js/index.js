
$(function() {
    $('.navbar-toggle').on('touchstart click', function(e) {
      e.preventDefault();
      var target = $(this).attr('data-target');
      $(target).collapse('toggle');
    });
  });