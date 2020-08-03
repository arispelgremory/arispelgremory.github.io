var navw = $(".navbar").width();
var width = $(window).width();
var height = $(window).height();

$(window).on("load", () => {
  $(".loading").removeClass("ready");
  $("#loading_character").delay(2000).removeClass("ready");
});

$(document).ready(() => {
  window > 768 ? Nav() : Menu();
  setTimeout(() => {
    $("#loading_character").addClass("remove");
    $(".loading").addClass("remove");
    $(".content-wrapper").fadeIn();
  }, 3000);

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
  //Play Music
  playMusic();
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

function playMusic() {
  let music1 = soundManager.createSound({
    url: "https://b.ppy.sh/preview/924551.mp3",
    volume: 30,
    onplay: () => {
      $(".song1 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song1 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onresume: () => {
      $(".song1 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song1 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onpause: () => {
      $(".song1 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song1 .song-container .song-part-top .top-title .btn .play").css("display", "block");
    },
    onfinish: () => {
      $(".song1 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song1 .song-container .song-part-top .top-title .btn .play").css("display", "block");
      $(".song1 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    },
  });
  let music2 = soundManager.createSound({
    url: "https://b.ppy.sh/preview/1128512.mp3",
    volume: 30,
    onplay: () => {
      $(".song2 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song2 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onresume: () => {
      $(".song2 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song2 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onpause: () => {
      $(".song2 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song2 .song-container .song-part-top .top-title .btn .play").css("display", "block");
    },
    onfinish: () => {
      $(".song2 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song2 .song-container .song-part-top .top-title .btn .play").css("display", "block");
      $(".song2 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    },
  });
  let music3 = soundManager.createSound({
    url: "https://b.ppy.sh/preview/431082.mp3",
    volume: 30,
    onplay: () => {
      $(".song3 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song3 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onresume: () => {
      $(".song3 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song3 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onpause: () => {
      $(".song3 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song3 .song-container .song-part-top .top-title .btn .play").css("display", "block");
    },
    onfinish: () => {
      $(".song3 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song3 .song-container .song-part-top .top-title .btn .play").css("display", "block");
      $(".song3 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    },
  });
  let music4 = soundManager.createSound({
    url: "https://b.ppy.sh/preview/1029984.mp3",
    volume: 30,
    onplay: () => {
      $(".song4 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song4 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onresume: () => {
      $(".song4 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song4 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onpause: () => {
      $(".song4 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song4 .song-container .song-part-top .top-title .btn .play").css("display", "block");
    },
    onfinish: () => {
      $(".song4 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song4 .song-container .song-part-top .top-title .btn .play").css("display", "block");
      $(".song4 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    },
  });
  let music5 = soundManager.createSound({
    url: "https://b.ppy.sh/preview/1147361.mp3",
    volume: 50,
    onplay: () => {
      $(".song5 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song5 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onresume: () => {
      $(".song5 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song5 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onpause: () => {
      $(".song5 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song5 .song-container .song-part-top .top-title .btn .play").css("display", "block");
    },
    onfinish: () => {
      $(".song5 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song5 .song-container .song-part-top .top-title .btn .play").css("display", "block");
      $(".song5 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    },
  });
  let music6 = soundManager.createSound({
    url: "https://b.ppy.sh/preview/897189.mp3",
    volume: 30,
    onplay: () => {
      $(".song6 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song6 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onresume: () => {
      $(".song6 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song6 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onpause: () => {
      $(".song6 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song6 .song-container .song-part-top .top-title .btn .play").css("display", "block");
    },
    onfinish: () => {
      $(".song6 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song6 .song-container .song-part-top .top-title .btn .play").css("display", "block");
      $(".song6 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    },
  });
  let music7 = soundManager.createSound({
    url: "https://b.ppy.sh/preview/1220075.mp3",
    volume: 50,
    onplay: () => {
      $(".song7 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song7 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onresume: () => {
      $(".song7 .song-container .song-part-top .top-title .btn .pause").css("display", "block");
      $(".song7 .song-container .song-part-top .top-title .btn .play").css("display", "none");
    },
    onpause: () => {
      $(".song7 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song7 .song-container .song-part-top .top-title .btn .play").css("display", "block");
    },
    onfinish: () => {
      $(".song7 .song-container .song-part-top .top-title .btn .pause").css("display", "none");
      $(".song7 .song-container .song-part-top .top-title .btn .play").css("display", "block");
      $(".song7 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    },
  });
  $(".song1 .song-container .song-part-top .top-title .btn img").click(() => {
    if ($(".song1 .song-container .song-part-top .top-title .btn").hasClass("Playing")) {
      music1.pause();
      $(".song1 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    } else {
      music1.play();
      $(".song1 .song-container .song-part-top .top-title .btn").addClass("Playing");
    }
  });
  $(".song2 .song-container .song-part-top .top-title .btn img").click(() => {
    if ($(".song2 .song-container .song-part-top .top-title .btn").hasClass("Playing")) {
      music2.pause();
      $(".song2 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    } else {
      music2.play();
      $(".song2 .song-container .song-part-top .top-title .btn").addClass("Playing");
    }
  });
  $(".song3 .song-container .song-part-top .top-title .btn img").click(() => {
    if ($(".song3 .song-container .song-part-top .top-title .btn").hasClass("Playing")) {
      music3.pause();
      $(".song3 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    } else {
      music3.play();
      $(".song3 .song-container .song-part-top .top-title .btn").addClass("Playing");
    }
  });
  $(".song4 .song-container .song-part-top .top-title .btn img").click(() => {
    if ($(".song4 .song-container .song-part-top .top-title .btn").hasClass("Playing")) {
      music4.pause();
      $(".song4 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    } else {
      music4.play();
      $(".song4 .song-container .song-part-top .top-title .btn").addClass("Playing");
    }
  });
  $(".song5 .song-container .song-part-top .top-title .btn img").click(() => {
    if ($(".song5 .song-container .song-part-top .top-title .btn").hasClass("Playing")) {
      music5.pause();
      $(".song5 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    } else {
      music5.play();
      $(".song5 .song-container .song-part-top .top-title .btn").addClass("Playing");
    }
  });
  $(".song6 .song-container .song-part-top .top-title .btn img").click(() => {
    if ($(".song6 .song-container .song-part-top .top-title .btn").hasClass("Playing")) {
      music6.pause();
      $(".song6 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    } else {
      music6.play();
      $(".song6 .song-container .song-part-top .top-title .btn").addClass("Playing");
    }
  });
  $(".song7 .song-container .song-part-top .top-title .btn img").click(() => {
    if ($(".song7 .song-container .song-part-top .top-title .btn").hasClass("Playing")) {
      music7.pause();
      $(".song7 .song-container .song-part-top .top-title .btn").removeClass("Playing");
    } else {
      music7.play();
      $(".song7 .song-container .song-part-top .top-title .btn").addClass("Playing");
    }
  });
}
