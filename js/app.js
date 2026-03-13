$(document).ready(function () {
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
      var sectionTop = $(this).offset().top - 300; // adjust offset
      var sectionBottom = sectionTop + $(this).outerHeight();
      var sectionId = $(this).attr("id");
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        $("nav li a").removeClass("active");
        $('nav li a[href="#' + sectionId + '"]').addClass("active");
      }
    });
  });
});
