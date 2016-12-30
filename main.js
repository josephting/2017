(function ($, window, document) {
  var resizeElements = function () {
    $('#container').css({
      'max-width': ($(window).height() * 0.95) * 0.67567567,
      height: $(window).height() * 0.95,
      'margin-top': $(window).height() * 0.05 / 2,
    });
  };

  var initialization = function () {
    $('#overlay').addClass('dismissed');
    resizeElements();
  };

  initialization();
  $(window).on('resize', function () {
    resizeElements();
  });
})(window.jQuery, window, document);
