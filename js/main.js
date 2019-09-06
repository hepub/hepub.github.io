/* --------------------------------------------------------------------- */
/* common
/* --------------------------------------------------------------------- */
var app = {
  pc: '',
  tab: '',
  sp: '',
  deviceWidth: '',
  deviceHeight: ''
}
app.deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
app.deviceHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
app.pc = (app.deviceWidth >= 992) ? true : false;
app.tab = (app.deviceWidth >= 768 && app.deviceWidth < 992) ? true : false;
app.sp = (app.deviceWidth < 768) ? true : false;

/* --------------------------------------------------------------------- */
/* THROTTLE
/* --------------------------------------------------------------------- */
function throttle(func, time) {
  time || (time = 250);
  var wait = false;

  return function() {
    if (!wait) {
      func.call();
      wait = true;

      setTimeout(function() {
        wait = false;
      }, time);
    }
  }
}

/* --------------------------------------------------------------------- */
/* matchHeight
/* --------------------------------------------------------------------- */
function matchHeight($o, e, w) {
  $o.css('height', 'auto')
  var foo_length = $o.length,
    _width = $(window).width();

  if (w == null) {
    w = 0;
  }

  if (_width < w) {
    for (var k = 0; k < foo_length; k++) {
      $o.eq(k).css('height', 'auto');
    }
  } else {
    for (var i = 0; i < Math.ceil(foo_length / e); i++) {
      var maxHeight = 0;
      for (var j = 0; j < e; j++) {
        if ($o.eq(i * e + j).outerHeight() > maxHeight) {
          maxHeight = $o.eq(i * e + j).outerHeight();
        }
      }
      for (var l = 0; l < e; l++) {
        $o.eq(i * e + l).css('height', maxHeight);
      }
    }
  }
}

$(document).ready(function() {
  /* --------------------------------------------------------------------- */
  /* MAIN NAV MENU
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$('.sf-menu').length) return;

    // superfish menu
    $('.sf-menu').superfish({
      cssArrows: false
    });

    // add class: .active
    $('.header .main-nav li.active').parents('li').addClass('active');
  })(jQuery);

  /* --------------------------------------------------------------------- */
  /* mainbody
  /* --------------------------------------------------------------------- */
  (function($) {
    $(window).on('scroll resize', throttle(function() {
      var $e = $('.mainbody').find('.col_item');
      matchHeight($e, 2);
    }, 100));
  })(jQuery);

  /* --------------------------------------------------------------------- */
  /* con_slide_js - homepage
  /* --------------------------------------------------------------------- */
  (function($) {
    $('.homepage .con_slide_js').slick({
      speed: 600,
      autoplaySpeed: 5000,
      autoplay: true,
      infinite: true,
      swipe: true,
      dots: true,
      arrows: false
    });
  })(jQuery);

  /* --------------------------------------------------------------------- */
  /* con_literality_js - homepage
  /* --------------------------------------------------------------------- */
  (function($) {
    $('.homepage .con_literality_js').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 600,
      autoplaySpeed: 5000,
      autoplay: true,
      infinite: true,
      swipe: true,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="ic_arrow fa fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ic_arrow fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  })(jQuery);

  /* --------------------------------------------------------------------- */
  /* box_new_book_sb
  /* --------------------------------------------------------------------- */
  (function($) {
    $('.box_new_book_sb .box_slide').slick({
      speed: 600,
      autoplaySpeed: 5000,
      autoplay: true,
      infinite: true,
      swipe: true,
      dots: true,
      arrows: false
    });
  })(jQuery);

  /* --------------------------------------------------------------------- */
  /* box_random_book_sb
  /* --------------------------------------------------------------------- */
  (function($) {
    $('.box_random_book_sb .box_slide').slick({
      speed: 600,
      autoplaySpeed: 5000,
      autoplay: true,
      infinite: true,
      swipe: true,
      dots: true,
      arrows: false
    });
  })(jQuery);

  /* --------------------------------------------------------------------- */
  /* match_library_category_item
  /* --------------------------------------------------------------------- */
  function match_library_category_item() {
    var $match_library_category_item = $('.library_page .con_category .list').find('.item');
    matchHeight($match_library_category_item, (app.pc) ? 4 : (app.tab) ? 4 : 1);
  }
  match_library_category_item();
  (function($) {
    var timer = true;
    $(window).on('resize', function() {
      if (timer !== false) clearTimeout(timer);
      timer = setTimeout(match_library_category_item, 300);
    });
  })(jQuery);

  /* --------------------------------------------------------------------- */
  /* match_library_page_item
  /* --------------------------------------------------------------------- */
  (function($) {
    function match_library_page_item() {
      var $match_library_page_item = $('.library_page .con_products .list').find('.item');
      matchHeight($match_library_page_item, (app.pc) ? 5 : (app.tab) ? 4 : 2);
    } match_library_page_item();
    var timer = true;
    $(window).on('resize', function() {
      if (timer !== false) clearTimeout(timer);
      timer = setTimeout(match_library_page_item, 300);
    });
  })(jQuery);

});
