jQuery(document).ready(function() {
    (function($) { //create closure so we can safely use $ as alias for jQuery
        $(document).ready(function() {
            var exampleOptions = {
                    speed: 'fast'
                }
                // initialise plugin

            var example = $('#menu').superfish(exampleOptions);
        });

    })(jQuery);

    $("#language a#hLng ").click(function() {

       if ($('#language ul').hasClass("display")) {
        $('#language ul').removeClass('display');
        } else {
          $('#language ul').addClass('display');
        }
      
       /* $("#language ul").toggle("slow", function() {
            // Animation complete.
        });*/

        return false;
    });

    $("body").click(function (event) {
        if ($(event.target).closest("#language ul").length === 0) {
           $('#language ul').removeClass('display');
        }
    });

    $('.maxheight').matchHeight();

});





   $(document).ready(function() {
       bindGrid();
   });


   function bindGrid() {
       var view = $.totalStorage('display');
       //alert($.totalStorage());
       display(view);

       $(document).on('click', '#grid', function(e) {
           e.preventDefault();
           display('grid');
       });

       $(document).on('click', '#list', function(e) {
           e.preventDefault();
           display('list');
       });
   }


        function listTabsAnimate(element) {
            if (jQuery(element).length) {
                TweenMax.staggerFromTo(element, 0.3, {
                    alpha: 0,
                    rotationY: -90,
                    ease: Power1.easeOut
                }, {
                    alpha: 1,
                    rotationY: 0,
                    ease: Power1.easeOut
                }, 0.1);
            }
        }


function display(view) {
    if (view == 'list') {
        $('ul.products-grid').removeClass('grid').addClass('list row');

        $('.display').find('li#list').addClass('selected');
        $('.display').find('li#grid').removeAttr('class');
        listTabsAnimate('.products-grid li');
        $.totalStorage('display', 'list');
    } else {
        $('ul.products-grid').removeClass('list').addClass('grid row');

        $('.display').find('li#grid').addClass('selected');
        $('.display').find('li#list').removeAttr('class');
        listTabsAnimate('.products-grid li');
        $.totalStorage('display', 'grid');
    }
}




jQuery(function() {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#back-top').fadeIn();
        } else {
            jQuery('#back-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    jQuery('#back-top a').click(function() {
        jQuery('body,html').stop(false, false).animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});



jQuery(function() {
    jQuery('.box-content .sf-mega > .b-left-submenu__link').on('click', function() {
        var type = $(this).attr('data-target');
        jQuery('.box-content li[data-toggle=' + type + ']').toggle(function() {});

        $(this).find("i").toggleClass("fa-minus");

        return false;
    });
    jQuery('#menu .sf-menu').mobileMenu();
});



$(document).ready(function() {
    jQuery('.box .box-category').find('li.parent').prepend('<i class="fa fa-angle-down"></i>');
    jQuery('.box .box-category li.parent i').on("click", function() {
        if (jQuery(this).hasClass('fa-angle-up')) {
            jQuery(this).removeClass('fa-angle-up').parent('li.parent').find('> ul').slideToggle();
        } else {
            jQuery(this).addClass('fa-angle-up').parent('li.parent').find('> ul').slideToggle();
        }
    });
    /************bx-slider***************/

    $('#image-additional').bxSlider({
        pager: false,
        controls: true,
        slideMargin: 14,
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 88,
        infiniteLoop: false,
        nextText: '<i class="fa fa-chevron-down"></i>',
        prevText: '<i class="fa fa-chevron-up"></i>',
        moveSlides: 1,
        adaptiveHeight: false, 
        mode: 'vertical',
    });

    $("#zoom_01").elevateZoom({
        gallery: 'image-additional',
        cursor: 'pointer',
        galleryActiveClass: 'active',
        imageCrossfade: true,
        zoomLens: true
    });
    //pass the images to Fancybox 
    $("#zoom_01").bind("click", function(e) {
        var ez = $('#zoom_01').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
    });
});






  /* Owl Carousel
  ========================================================*/
  ;(function ($) {
      var o = $('.owl-carousel');
      if (o.length > 0) {
          // include('/js/owl.carousel.min.js');
          $(document).ready(function () {
              o.owlCarousel({
                  margin: 30,
                  smartSpeed: 450,
                  loop: false,
                  dots: false,
                  dotsEach: 1,
                  nav: true,
                  navClass: ['owl-prev fa fa-chevron-left', 'owl-next fa fa-chevron-right'],
                  responsive: {
                      0: { items: 1},
                      420: { items: 1},
                      500: { items: 2},
                      768: { items: 2},
                      980: { items: 3}
                  }
              });
          });
      }
  })(jQuery);

 
/* Google Map
 ========================================================*/
$(document).ready(function () {
    var o = $('#google-map');
    if (o.length > 0){
      // alert(2);
        o.googleMap({
            styles: [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#e9e5dc"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54},{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":43},{"lightness":-11},{"color":"#89cada"}]}]
        });
    } 
});


function include(url){
  document.write('<script src="'+url+'"></script>');
  return false ;
}