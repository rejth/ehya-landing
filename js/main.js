$(document).ready(function () {
  var tabsItem = $(".trends__tabs-item");
  var contentItem = $(".trends__cards-wrapper");

  tabsItem.on("click", function (e) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("trends__tabs-item--active");
    contentItem.removeClass("trends__cards-wrapper--active");
    $(activeContent).addClass("trends__cards-wrapper--active");
    $(this).addClass("trends__tabs-item--active");
  });
});