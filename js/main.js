$(document).ready(function () {
  // Review slider
  let reviewSlider = new Swiper('.reviews-slider', {
    autoHeight: true,
    loop: true,
    slidesPerView: 1,
    keyboard: {
      enabled: true
    },
    autoplay: {
      delay: 7000
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    mousewheel: {
      invert: true
    }
  });

  // Stories slider
  let storiesSlider = new Swiper('.stories-slider', {
    autoHeight: true,
    loop: true,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      invert: true
    },
    navigation: {
      nextEl: '.stories__button--next',
      prevEl: '.stories__button--prev'
    }
  });

  // Trends section tabs
  let tabsItem = $(".trends__tabs-item");
  let contentItem = $(".trends__cards-wrapper");

  tabsItem.on("click", function (e) {
    let activeContent = $(this).attr("data-target");
    tabsItem.removeClass("trends__tabs-item--active");
    contentItem.removeClass("trends__cards-wrapper--active");
    $(activeContent).addClass("trends__cards-wrapper--active");
    $(this).addClass("trends__tabs-item--active");
  });
});