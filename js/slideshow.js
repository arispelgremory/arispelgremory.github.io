$(document).ready(() => {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $("button.slick-prev.slick-arrow").attr("style", "background:url(img/Interest/leftarrow.png);");
  $("button.slick-next.slick-arrow").attr("style", "background:url(img/Interest/rightarrow.png);");
});
