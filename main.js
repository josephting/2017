(function ($, window, document) {
  var resizeElements = function () {
    $('#container').css({
      'max-width': ($(window).height() * 0.95) * 0.67567567,
      height: $(window).height() * 0.95,
      'margin-top': $(window).height() * 0.05 / 2,
    });
  };

  var initialization = function () {
    console.log(Modernizr.testAllProps('writingMode'));
    if (!Modernizr.testAllProps('writingMode')) {
      $('html').addClass('noWritingMode');
    }

    $('#overlay').addClass('dismissed');
    resizeElements();
  };

  var decodeName = function (str) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  };

  initialization();
  $(window).on('resize', function () {
    resizeElements();
  });
})(window.jQuery, window, document);
