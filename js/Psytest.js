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
  var flow = false;
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
});

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

function test2() {
  var test2Intro = "<p>這個測試, 是關於你對於一些情況時做出的反應而來分析你在面對一些事情的時候的性格...</p><button class='start' id='Q2'></button>";
  $(".test-questions-container").html(test2Intro);
  $(".test-questions").delay(500).fadeIn();

  $("button.start#Q2").click(() => {
    $(".test-questions-container").fadeOut();
    setTimeout(() => {
      loadTest2Q1();
    }, 500);
  });
}

function loadTest2Q1() {
  $(".test-questions-container")
    .html("")
    .load("question/question2_1.txt", () => {
      let x = 1;
      $("button.NQ").click(() => {
        if (x == 5 || x == 6) {
          if ($("#T2Q" + x).val() == "") {
            if ($(".t2q p").hasClass("ans-err")) {
            } else {
              $(".t2q p").append("請輸入").addClass("ans-err");
            }
            console.log($("#T2Q" + x).val());
          } else {
            $(".t2q p").html("").removeClass("ans-err");
            localStorage.setItem("Question" + x, $("#T2Q" + x).val());
            $(".t2question" + x).fadeOut();
            $(".t2question" + (1 + x))
              .delay(500)
              .fadeIn();
            x++;
          }
        } else {
          var radioValue = $('input[name="t2q' + x + '"]:checked').val();
          if (radioValue) {
            $(".t2q p").html("").removeClass("ans-err");
            localStorage.setItem("Question" + x, radioValue);
            $(".t2question" + x).fadeOut();
            $(".t2question" + (x + 1))
              .delay(500)
              .fadeIn();
            x++;
            if (x >= 10) {
              setTimeout(() => {
                result2();
              }, 700);
            }
          } else if (!radioValue) {
            if ($(".t2q p").hasClass("ans-err")) {
            } else {
              $(".t2q p").append("請輸入").addClass("ans-err");
            }
          }
        }
      });
    })
    .fadeIn();
}

function result2() {
  let option = "";
  for (let i = 1; i < 10; i++) {
    option += "<option value='" + i + "'>第" + i + "題</option>";
  }
  $(".t2result-container div div h4:nth-child(1)").append("<br><span>" + localStorage.getItem("name") + "</span>");
  $(".t2result-container div div h4:nth-child(2)").append("<br><span>" + localStorage.getItem("email") + "</span>");
  $("select[name='test2']").html(option);
  $(".test-questions-container .t2result").fadeIn();

  let index = $("select[name='test2']").val();
  $("h2.result-question").append($("#t2q" + index + "q").text());
  let q1ans = localStorage.getItem("Question1");

  let ans = "";
  let explain = "";
  if (q1ans == "yes") {
    ans = "會";
    explain = "证明你这个人做事已经有plan了 or 事情会很早就完成";
  } else {
    ans = "不會";
    explain = "证明你这个人沒有plan or 事情只會慢慢完成";
  }

  $("p.YourQ").append("你的答案:<span>" + ans + "</span>");
  $("p.explain").append("解釋:<span>" + explain + "</span>");

  $("select[name='test2']").change(function () {
    index = $("select[name='test2']").val();
    console.log(index);
    let qans = localStorage.getItem("Question" + index);
    console.log(qans);
    ans = "";
    explain = "";

    if (qans == "yes") {
      if (index == 1) {
        ans = "會";
        explain = "证明你这个人做事已经有plan了 or 事情会很早就完成";
      } else if (index == 2) {
        ans = "會";
        explain = "你是个很有好奇心的人";
      } else if (index == 3) {
        ans = "停下来欣赏花先";
        explain = "你不是个花心的人";
      } else if (index == 4) {
        ans = "會";
        explain = "你可能是个小心的人(同时间 不会特别好客)";
      } else if (index == 8) {
        ans = "會";
        explain = "你很愿意接受挑战";
      } else if (index == 9) {
        ans = "會";
        explain = "你很重视友情";
      }
    } else if (qans == "no") {
      if (index == 1) {
        ans = "不會";
        explain = "证明你这个人沒有plan or 事情只會慢慢完成";
      } else if (index == 2) {
        ans = "不會";
        explain = "你是不个很有好奇心的人";
      } else if (index == 3) {
        ans = "去喝水先";
        explain = "你是个花心的人";
      } else if (index == 4) {
        ans = "不會";
        explain = "你可能是个小心的人(同时间 不会特别好客)";
      } else if (index == 8) {
        ans = "不會";
        explain = "你不太愿意接受挑战";
      } else if (index == 9) {
        ans = "無視掉";
        explain = "你不太重视友情";
      }
    } else {
      if (index == 5) {
        ans = qans;
        explain = "你心想要的伴侣 就是 那个动物的特征";
      } else if (index == 6) {
        ans = qans;
        explain = "你本人的性格 和你选的动物的特征差不多";
      } else if (index == 7) {
        if (qans == "s") {
          ans = "小";
          explain = "证明你想要的伴侣是年纪 阅历 能力...比你小 就是你希望保护你的伴侶";
        } else if (qans == "m") {
          ans = "中";
          explain = "证明你想要的伴侣是年纪 阅历 能力...跟你一樣 就是你希望你可以互相保护你的伴侶";
        } else if (qans == "l") {
          ans = "大";
          explain = "证明你想要的伴侣是年纪 阅历 能力...比你大 就是你希望你被保护";
        }
      }
    }

    $("h2.result-question")
      .html("")
      .append($("#t2q" + index + "q").text());
    $("p.YourQ")
      .html("")
      .append("你的答案:<span>" + ans + "</span>");
    $("p.explain")
      .html("")
      .append("解釋:<span>" + explain + "</span>");
  });
}
