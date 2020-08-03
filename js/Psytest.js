$(document).ready(() => {
  var width = $(document).width();
  if (width > 768) {
    $(".right-container.PsyTest #nav-btn img").removeClass("Menu").addClass("SMenu");
  } else {
    $(".right-container.PsyTest #nav-btn img").removeClass("SMenu").addClass("Menu");
  }

  $(".right-container.PsyTest #nav-btn img.SMenu").click(() => {
    if ($(".navbar").hasClass("open")) {
      $(".navbar").css("animation", "bounceOutLeft 0.5s");
      setTimeout(() => {
        $(".navbar").removeClass("open").removeAttr("style");
      }, 400);
    } else {
      $(".navbar").addClass("open");
    }
  });

  //Start Test
  formValid();
});

function formValid() {
  $("#userSubmit").click(() => {
    let error = false;
    if ($('input[name="Name"]').val() == "") {
      $("label[for='Name']").html("Name <span>名字:</span>").append("<p>Please don't leave it blank 請輸入您的名字</p>");
      $(".name").addClass("errorx");
      error = true;
    } else {
      $('label[for="Name"]').html("First Name <span>名字:</span>");
      $(".name").removeClass("errorx");
    }

    if ($('input[name="Email"]').val() == "") {
      $('label[for="Email"]').html("Email <span>電子郵件:</span>").append("<p>Please don't leave it blank 請輸入您的電郵</p>");
      $(".email").addClass("errorx");
      error = true;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('input[name="Email"]').val())) {
      $('label[for="Email"]').html("Email <span>電子郵件:</span>").append("<p>Please insert a valid Email 請輸入對的電郵格式</p>");
      $(".email").addClass("errorx");
      error = true;
    } else {
      $('label[for="Email"]').html("Email <span>電子郵件:</span>");
      $(".email").removeClass("errorx");
    }

    if (error) {
      return false;
    } else {
      $(".user-info").fadeOut();
      localStorage.setItem("name", $('input[name="Name"]').val());
      localStorage.setItem("email", $('input[name="Email"]').val());
      selectQuestion();
      return false;
    }
  });
}

function selectQuestion() {
  $(".select-q").delay(500).fadeIn();

  $("#test1").click(() => {
    $(".select-q").fadeOut();
  });
  $("#test2").click(() => {
    $(".select-q").fadeOut();
    test2();
  });
}

function test2() {}
