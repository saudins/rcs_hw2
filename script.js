console.log("I am connected!");

jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 576) {
        $('.break-header').addClass('w-100');
      } else if (ww >= 576) {
        $('.break-header').removeClass('w-100');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });

  jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 992) {
        $('.break-hero').addClass('w-100');
      } else if (ww >= 992) {
        $('.break-hero').removeClass('w-100');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });