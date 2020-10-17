$(document).ready(function () {
  // Review slider
  let reviewSlider = new Swiper('.reviews-slider', {
    autoHeight: true,
    loop: true,
    slidesPerView: 1,
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

  $('img.img-svg').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

  // Stories section buttons
  let storyButton = $(".stories__button");
  let arrowSvg = $(".img-svg");
  storyButton.on("click", function(e) {
    let activeArrow = $(this).attr("data-target");
    storyButton.removeClass("stories__button--active");
    arrowSvg.removeClass("img-svg--active");
    $(activeArrow).addClass("img-svg--active");
    $(this).addClass("stories__button--active");
  });

  // Modal window
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModalWindow);
  closeModalButton.on("click", closeModalWindow);

  function openModalWindow() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  };

  function closeModalWindow(event) {
    event.preventDefault()
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  };

  // Form Validator
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: "required",
        phone: {
          required: true,
          minlength: 11
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Введите ФИО, пожалуйста"
        },
        phone: {
          required: "Номер телефона нужен, чтобы связаться с Вами!",
          minlength: "Номер телефона должен быть не менее 11 символов"
        },
        email: {
          required: "Электронная почта нужна, чтобы связаться с Вами!",
          email: "Электронная почта должна быть в формате name@domain.com"
        }
      }
    });
  });

});