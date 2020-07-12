var navw = $(".navbar").width();
var width = $(window).width();
var height = $(window).height();

$(window).on("load", () => {
  navliSize();
  // $(".loading").removeClass("ready");
  // $("#loading_character").delay(2000).removeClass("ready");
});

$(document).ready(() => {
  // setTimeout(() => {
  //   $("#loading_character").addClass("remove");
  //   $(".loading").addClass("remove");
  $(".content-wrapper").fadeIn();
  // }, 3000);
  NavOrMenu();
});

$(window).on("resize", () => {
  navw = $(".navbar").width();
  width = $(window).width();
  height = $(window).height();
  navliSize();
  NavOrMenu();
});

function navliSize(width, height, navw) {
  if (width > 768) {
    $(".navbar .navbar-wrapper ul.list li").css("height", (61 / 350) * navw);
    if ((width / height >= 1.3333 && width / height <= 1.4) || width / height == 1.6) {
      $(".navbar .navbar-wrapper ul.social").css("margin-top", "20vh");
    } else if (width / height >= 1.9) {
      $(".navbar .navbar-wrapper ul.social").css("margin-top", "1vh");
    } else {
      $(".navbar .navbar-wrapper ul.social").css("margin-top", "5vh");
    }
  } else {
    $(".navbar .navbar-wrapper ul.list li").removeClass("selected");
  }
}

function NavOrMenu() {
  if (width > 768) {
    $(window).scroll(() => {
      $("#nav-btn img").attr("src", "img/btt-btn.png");
      if ($(window).scrollTop() > height) {
        $("#nav-btn").fadeIn();
      } else {
        $("#nav-btn").fadeOut();
      }
    });
    $("#nav-btn, #nav-btn img").click(() => {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
    });
  } else if (width <= 768) {
    $("#nav-btn img").attr("src", "img/Menu.png");
    $("#nav-btn img").click(() => {
      if ($("#nav-btn").hasClass("menu")) {
        $(".navbar.mobile").css({ animation: "bounceOutRight 0.5s" });
        $("#nav-btn img").attr("src", "img/Menu.png");
        $("#nav-btn").removeClass("menu");
        setTimeout(() => {
          $(".navbar").removeClass("mobile");
          $(".navbar").css("display", "none");
        }, 500);
        $(".right-container").css({
          display: "block",
        });
      } else {
        if (!$(".navbar").attr("style", "")) {
          $(".navbar").css();
        }
        $("#nav-btn").addClass("menu");
        $(".navbar").addClass("mobile");
        $(".navbar.mobile").css("display", "block");
        $("#nav-btn img").attr("src", "img/Close.png");
        $(".right-container").css({ display: "none" });
      }
    });
  }
}

function changeBorder() {
  // if()
}
