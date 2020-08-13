$(document).ready(() => {
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
});
