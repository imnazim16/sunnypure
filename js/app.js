$(document).ready(function () {
  // Smooth scroll for navigation links with header offset
  $('nav a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    if ($(target).length) {
      var headerHeight = 69; // Header height in px
      var targetOffset = $(target).offset().top - headerHeight;
      window.scrollTo(0, targetOffset);
    }
  });

  // Initialize Hero Slider
  $(".hero-slider").slick({
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  });

  // Initialize Testimonial Slider
  $(".testimonial-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Initialize Fancybox for Portfolio
  Fancybox.bind("[data-fancybox]", {
    // Custom options if needed
  });

  $(".menu-btn").click(function () {
    $(this).toggleClass("active-menu");
    $("nav").toggleClass("active-nav");
  });

  $("nav").click(function () {
    $(this).removeClass("active-nav");
    $(".menu-btn").removeClass("active-menu");
  });
  $(window).scroll(function (e) {
    var scrollPos = $(document).scrollTop();
    $("section").each(function () {
      var sectionTop = $(this).offset().top - 70; // adjust offset
      var sectionBottom = sectionTop + $(this).outerHeight();
      var sectionId = $(this).attr("id");
      //console.log("Scroll Position:", sectionTop, "Section ID:", sectionId);
      //console.log("Section Top:", sectionTop, "Section Bottom:", sectionBottom);
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        $("nav li a").removeClass("active");
        $('nav li a[href="#' + sectionId + '"]').addClass("active");
      }
    });
  });

  // FAQ accordion (jQuery)
  $(".accordion-button").on("click", function () {
    var $button = $(this);
    var $item = $button.closest(".accordion-item");
    var $content = $item.find(".accordion-collapse");

    if ($content.is(":visible")) {
      $content.slideUp(200).removeClass("show");
      $button.addClass("collapsed").attr("aria-expanded", "false");
    } else {
      // Close others
      $(".accordion-collapse").slideUp(200).removeClass("show");
      $(".accordion-button")
        .addClass("collapsed")
        .attr("aria-expanded", "false");

      // Open selected
      $content.slideDown(200).addClass("show");
      $button.removeClass("collapsed").attr("aria-expanded", "true");
    }
  });
});
