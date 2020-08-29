// Custom Scripts for Primal Template //

jQuery(function($) {
    "use strict";


  /* --------- Wow Init ------ */

  new WOW().init();



  /*----- Preloader ----- */

    $(window).load(function() {
  		setTimeout(function() {
        $('#loading').fadeOut('slow', function() {
        });
      }, 150);
    });


  /*----------------------------
  ------- Isotope Init -------
  -----------------------------*/

  (function load_isotope(){
    window.addEventListener('click',function(){
      var $container = $('.portfolio-container');
      $container.isotope({
        filter: '*',
      });

      $('.portfolio-filter a').on('click', function () {
        $('.portfolio-filter .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 500,
                animationEngine: "jquery"
            }
        });
        return false;
      });
    });
  })();

});
