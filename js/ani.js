var navw = $(".navbar").width();
var width = $(window).width();
var height = $(window).height();

$(window).on("load", () => {
  $(".loading").removeClass("ready");
  $("#loading_character").delay(2000).removeClass("ready");
});

$(document).ready(() => {
  determineSize();
  Nav();
  setTimeout(() => {
    $("#loading_character").addClass("remove");
    $(".loading").addClass("remove");
    $(".content-wrapper").fadeIn();
  }, 3000);
  changeBorder();
});

$(window).on("resize", () => {
  determineSize();
  if (width < 768) Menu();
});

$(window).scroll(() => {
  if (width > 768) Nav();
});

function determineSize() {
  width = $(window).width();
  height = $(window).height();
  navw = $(".navbar").width();

  if (width > 768) {
    navliPCSize();
  } else {
    $(".navbar .navbar-wrapper ul.list li").removeClass("selected").attr("style", "");
  }
}

function navliPCSize() {
  // $(".navbar .navbar-wrapper ul.list li").removeClass("selected");
  $(".navbar .navbar-wrapper ul.list li").css("height", (61 / 350) * navw);
  if ((width / height >= 1.3333 && width / height <= 1.4) || width / height == 1.6) {
    $(".navbar .navbar-wrapper ul.social").css("margin-top", "20vh");
  } else if (width / height >= 1.9) {
    $(".navbar .navbar-wrapper ul.social").css("margin-top", "1vh");
  } else {
    $(".navbar .navbar-wrapper ul.social").css("margin-top", "5vh");
  }
}

function Nav() {
  if ($(window).scrollTop() > height) {
    $(".btt")
      .fadeIn()
      .unbind()
      .click(() => {
        scrollToTop();
      });
  } else {
    $(".btt").fadeOut();
  }
}

function Menu() {
  $(".btt-btn")
    .unbind()
    .click(() => {
      scrollToTop();
    });
  $("#nav-btn .Menu")
    .unbind()
    .click(() => {
      if ($("#nav-btn img.Menu").hasClass("menu")) {
        $(".navbar.mobile").css({ animation: "bounceOutRight 0.5s" });
        $("#nav-btn img.Menu").attr("src", "img/Menu.png");
        $("#nav-btn img.Menu").removeClass("menu");
        setTimeout(() => {
          $(".navbar").removeClass("mobile");
          $(".navbar").css("display", "none");
          $(".navbar").attr("style", "");
        }, 500);
      } else {
        $("#nav-btn img.Menu").addClass("menu");
        $(".navbar").addClass("mobile");
        $(".navbar.mobile").css("display", "block");
        $("#nav-btn img.Menu").attr("src", "img/Close.png");
      }
    });
}

function changeBorder() {
  width = $(window).width();
  height = $(window).height();
  if (width <= 500) {
    $(".content img").attr("src", "img/frame1m.png");
  } else {
    $(".content img").attr("src", "img/frame1.png");
  }
}

function scrollToTop() {
  $(this).click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      400
    );
  });
}
