(function ($) {
  "use strict";
  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });



  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('.mobile-nav-toggle').addClass('mobile-nav-toggle-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
      $('.mobile-nav-toggle').removeClass('mobile-nav-toggle-scrolled');
    }
  });

  // Smooth scroll for the navigation and links with .scrollto classes

  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-scrolled')) {
            top_space = top_space - 20;
          }

        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  /*  var nav_sections = $('section');
    var main_nav = $('.main-nav, .mobile-nav');
    var main_nav_height = $('#header').outerHeight();
  
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
  
      nav_sections.each(function () {
        var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
        if (cur_pos >= top && cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
      });
    });*/

  //gallery
  $('.text-carousel').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    dots: false,
    nav: false,
    margin: 0,
    autoplay: true,
    slideSpeed: 3500,
    autoplayHoverPause: true,
    autoPlayTimeout: 4000,
    autoplaySpeed: 4000,
    // animateOut: 'slideOutDown ',
    // animateIn: 'slideInDown',
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1170: {
        items: 1
      }
    }
  });
  //new
  $('.postimg-carousel').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    dots: false,
    nav: false,
    margin: 0,
    autoplay: true,
    slideSpeed: 2000,
    autoplayHoverPause: true,
    autoPlayTimeout: 4000,
    autoplaySpeed: 2000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1170: {
        items: 1
      }
    }
  });
  //testimonial
  $('.tm-carousel').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    margin: 0,
    autoplay: true,
    autoplayHoverPause: true,
    slideSpeed: 2000,
    autoPlayTimeout: 4000,
    autoplaySpeed: 2000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    // smartSpeed:4000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1170: {
        items: 1
      }
    }
  });
  //partners
  $('.partners-carousel').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    margin: 0,
    //autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1170: {
        items: 3
      }
    }
  });



$(".Voir-more.link").click(function(){
  $(".aporpos-page .landing-section").toggleClass("acord-opens");
  // $(".Voir-more.link").addClass("d-none")
});


})(jQuery);

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    var readMore = this.el.find('.link');
    
    
    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
  }

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }

  var Accordion2 = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    var readMore = this.el.find('.link');
    // Evento
    
    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
  }

  Accordion2.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }

  var accordion = new Accordion($('#accordion'), false);
  var accordion = new Accordion2($('#voirPlus'), false);
});



