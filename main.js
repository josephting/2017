(function ($, window, document) {
  var resizeElements = function () {
    $('#container').css({
      'max-width': ($(window).height() * 0.95) * 0.67567567,
      height: $(window).height() * 0.95,
      'margin-top': $(window).height() * 0.05 / 2,
    });
  };

  var initialization = function () {
    var nameSearch = new RegExp('[\\?&]n=([^&#]*)');
    var name = nameSearch.exec(location.search || window.location.search);
    if (name !== null) {
      var names = decodeName(name[1]);
      if (names !== false && isValidJson(names)) {
        names = JSON.parse(names);
        if (names.name_ja) {
          names.name_ja = decodeURIComponent(names.name_ja);
          $('#recipient').find('.name-ja').text(names.name_ja);
        } else {
          $('#recipient').find('.name-ja').parent().hide();
        }

        $('#recipient').find('.name').text(names.name);
        $('#content').addClass('to');
      }
    }

    if (!Modernizr.testAllProps('writingMode', 'vertical-rl')) {
      $('html').addClass('noWritingMode');
    }

    $('#overlay').addClass('dismissed');
    resizeElements();
  };

  var decodeName = function (str) {
    if (!isValidBase64(str)) {
      return false;
    }

    return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  };

  var isValidJson = function (str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }

    return true;
  };

  var isValidBase64 = function (str) {
    try {
      atob(str);
    } catch (e) {
      return false;
    }

    return true;
  }

  initialization();
  $(window).on('resize', function () {
    resizeElements();
  });
})(window.jQuery, window, document);
