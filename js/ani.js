var navw = $(".navbar").width();
var width = $(window).width();
var height = $(window).height();

$(window).on("load", () => {
  $(".loading").removeClass("ready");
  $("#loading_character").delay(5000).removeClass("ready");
});

$(document).ready(() => {
  window > 768 ? Nav() : Menu();

  $(".btt-btn").click(() => {
    scrollToTop();
  });

  $(window).on("resize", () => {
    window > 768 ? Nav() : Menu();
  });

  $(window).scroll(() => {
    if (width > 768) Nav();
  });

  // font-resizing
  $(".page-title .content h2:nth-child(1)").each(function () {
    var $this = $(this);
    if (parseInt($this.css("fontSize")) < 25) {
      $this.css("font-size", "24px");
      $(".page-title img").css("height", "28px");
    }
  });
  $(".page-title .content h2:nth-child(2)").each(function () {
    var $this = $(this);
    if (parseInt($this.css("fontSize")) < 16) {
      $this.css("font-size", "16px");
    }
  });

  //changing font translation
  changeTranslate();

  setTimeout(() => {
    $("#loading_character").addClass("remove");
    $(".loading").addClass("remove");
    $(".content-wrapper").fadeIn();
  }, 3000);
});

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

function scrollToTop() {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    400
  );
}

function changeTranslate() {
  $(".right-container.FavChar .right-container-wrapper .page-content-container .char1 .char-container .right .content-info img").click(() => {
    if ($(".right-container.FavChar .right-container-wrapper .page-content-container .char1 .char-container .right .content-info img").hasClass("en")) {
      $(".char1 .char-container .right .content-info p.cn").fadeOut();
      $(".char1 .char-container .right .content-info p.en").delay(500).fadeIn();
      $(".char1 .char-container .right .content-info img").attr("src", "../img/FavChar/cn-trans.png");
      $(".char1 .char-container .right .content-info img").removeClass("en");
    } else {
      $(".char1 .char-container .right .content-info p.en").fadeOut();
      $(".char1 .char-container .right .content-info p.cn").delay(500).fadeIn();
      $(".char1 .char-container .right .content-info img").attr("src", "../img/FavChar/en-trans.png");
      $(".char1 .char-container .right .content-info img").addClass("en");
    }
  });
  $(".right-container.FavChar .right-container-wrapper .page-content-container .char2 .char-container .right .content-info img").click(() => {
    if ($(".right-container.FavChar .right-container-wrapper .page-content-container .char2 .char-container .right .content-info img").hasClass("en")) {
      $(".char2 .char-container .right .content-info p.cn").fadeOut();
      $(".char2 .char-container .right .content-info p.en").delay(500).fadeIn();
      $(".char2 .char-container .right .content-info img").attr("src", "../img/FavChar/cn-trans.png");
      $(".char2 .char-container .right .content-info img").removeClass("en");
    } else {
      $(".char2 .char-container .right .content-info p.en").fadeOut();
      $(".char2 .char-container .right .content-info p.cn").delay(500).fadeIn();
      $(".char2 .char-container .right .content-info img").attr("src", "../img/FavChar/en-trans.png");
      $(".char2 .char-container .right .content-info img").addClass("en");
    }
  });
  $(".right-container.FavChar .right-container-wrapper .page-content-container .char3 .char-container .right .content-info img").click(() => {
    if ($(".right-container.FavChar .right-container-wrapper .page-content-container .char3 .char-container .right .content-info img").hasClass("en")) {
      $(".char3 .char-container .right .content-info p.cn").fadeOut();
      $(".char3 .char-container .right .content-info p.en").delay(500).fadeIn();
      $(".char3 .char-container .right .content-info img").attr("src", "../img/FavChar/cn-trans.png");
      $(".char3 .char-container .right .content-info img").removeClass("en");
    } else {
      $(".char3 .char-container .right .content-info p.en").fadeOut();
      $(".char3 .char-container .right .content-info p.cn").delay(500).fadeIn();
      $(".char3 .char-container .right .content-info img").attr("src", "../img/FavChar/en-trans.png");
      $(".char3 .char-container .right .content-info img").addClass("en");
    }
  });
}
