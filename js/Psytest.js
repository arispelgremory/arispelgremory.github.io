var isPaused = true;
$(document).ready(function () {
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
  $("#userSubmit").click((e) => {
    e.preventDefault();
    EmailValidation();
    $(".select-q").delay(500).fadeIn();
  });

  $("#test1").click(() => {
    $(".select-q").fadeOut();
    test1();
  });
  $("#test2").click(() => {
    $(".select-q").fadeOut();
    test2();
  });
});

function EmailValidation() {
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
    return false;
  }
}

function test1() {
  var test1Intro = "<p>你觉得你目前所承受的压力会过大吗？以及你现在承受的压力比多少比例的人要高？如果你想了解自己的压力有多大，那么这份经典的APESK-PSTR心理压力量表能够帮助到你！</p><p>PSTR心理压力量表由瑞士心理学家爱德沃兹于1983年编制，以德国心理学家穆瑞在1968年提出的心理压力因素理论为基础。</p><button class='start' id='Q1'></button>";
  $(".test-questions-container").html(test1Intro);
  $(".test-questions").delay(500).fadeIn();
  $("button.start#Q1").click(() => {
    setTimeout(() => {
      // loadTest1Q();
    }, 500);
    // $(".test-questions-container").fadeOut();
  });
}

function loadTest1Q() {
  $.ajax({
    url: "../question/question1.json",
    dataType: "json",
    error: function (e) {
      alert("Error 404");
    },
    success: function (data) {
      $(".test-questions-container").html("").fadeIn();
      let output = "",
        get = data.questions;
      for (let i = 0; i < get.length; i++) {
        output += `
            <div class="t1question${i + 1} t1q" ${i == 0 ? "" : 'style="display:none;"'}>
            <h2 class="blue">${i + 1}.${get[i].title}</h2>
            <div class="select">
              <div>
                  <input type="radio" name="q${i + 1}" value="0" id = "q${i + 1}a0" />
                    <label for = "q${i + 1}a0">${get[i].option0.text}</label><br />
              </div>
              <div>
                  <input type="radio" name="q${i + 1}" value="1" id = "q${i + 1}a1" />
                    <label for = "q${i + 1}a1">${get[i].option1.text}</label><br />
              </div>
              <div>
                  <input type="radio" name="q${i + 1}" value="2" id = "q${i + 1}a2" />
                    <label for = "q${i + 1}a2">${get[i].option2.text}</label><br />
              </div>
              <div>
                  <input type="radio" name="q${i + 1}" value="3" id = "q${i + 1}a3" />
                    <label for = "q${i + 1}a3">${get[i].option3.text}</label><br />
              </div>
              <div>
                  <input type="radio" name="q${i + 1}" value="4" id = "q${i + 1}a4" />
                    <label for = "q${i + 1}a4">${get[i].option4.text}</label><br />
              </div>
            </div>
            <p class="debug"></p>
              <div class="skipBtn">
                ${i == 0 ? "" : "<button class='LQ' id='T1LQ'></button>"}
                <button class="NQ ${i > 48 ? "stop" : ""}" id="T1NQ"></button>
              </div>
            </div>
            `;
        $(".test-questions-container").html(output);
      }
      let c = 1;
      $("button#T1NQ").click(() => {
        var radioValue = $('input[name="q' + c + '"]:checked').val();
        if (radioValue) {
          localStorage.setItem("Q" + c, radioValue);
          $(".debug").html("").removeClass("ans-err");
          $(".t1question" + c).fadeOut();
          c++;
          $(".t1question" + c)
            .delay(500)
            .fadeIn();

          if (c > 48) {
            stopTime();
            test1Result();
          }
        } else {
          $(".debug").html("").append("請選擇答案").addClass("ans-err");
        }
      });
      $("button#T1LQ").click(() => {
        $(".t1question" + c).fadeOut();
        c--;
        $(".t1question" + c)
          .delay(500)
          .fadeIn();
      });
    },
  });
}

function test1Result() {
  var summary = `
  <div class="result1" style="display:none;">
    <h2 class="blue">測試結果</h2>
    <div class="result1-container">
      <p class="standard">評分標準:一般,43-65分,表示压力适中;低于43分,表示压力过小,需要适度增加压力;高于65分,表示压力过大,需要适当降低 </p>
      <p class="marks">你的分數: </p>
      <p class = "explain1"></p>
      <button class="back"></button>
    </div>
  </div>
  `;
  $(".test-questions-container").append(summary);
  let marks = 0,
    comment = "";
  for (let i = 1; i <= 48; i++) {
    marks += parseInt(localStorage.getItem("Q" + i));
  }

  if (marks >= 93) {
    comment = "表示处于高度应激反应中,身心遭受压力伤害，你需要专业心理治疗师给与一些忠告，它可以帮助你削减你对压力的知觉，并帮助你改良生活的品质。";
  } else if (marks >= 82 && marks <= 92) {
    comment = "这个分数表示是你正在经历太大的压力，身心健康正在受到损害，并令你的人际关系发生问题。你的行为会伤害自己，也会影响他人。因此， 对你来说，学会如何减除自己的压力反应是非常必要的。你可能必须花时间做练习，学习控制压力，也可以寻求专业的帮助。";
  } else if (marks >= 71 && marks <= 81) {
    comment = "这个分数显示你的压力程度中等，可能正开始对健康不利，你可以仔细反省自己对压力器如何做出反应，并学习在压力器出现时，控制自己的肌肉紧张，已消除生理激活反应。";
  } else if (marks >= 60 && marks <= 70) {
    comment = "这个分数指出你生活中的兴奋与压力也许是相当适中的。偶尔会有一段时间压力太大，但你也许有能力去享受压力，并且很快回到平衡状态，因此对你的健康不会造成威胁。";
  } else if (marks >= 49 && marks <= 59) {
    comment = "这个分数表示你能够控制你自己的压力反应，你是一个相当放松的人。也许你对于所遇到的各种压力，并没有将他们解释为威胁，所以你很容易与人相处，可以毫无惧怕担任工作，也没有失去信心。";
  } else if (marks >= 38 && marks <= 48) {
    comment = "这个分数表示你对所遭遇的压力很不易为所动，甚至不当一回事，好像并没有发生过一样。这对你的健康不会有什么负面影响，但你的生活缺乏适度的兴奋，因此趣味也就有限。";
  } else if (marks >= 16 && marks <= 26) {
    comment = "如果你的分数值落在这个范围内，也许意味着你在生活中所经历的的压力经验不够，或是你没有正确地分析自己。你最好更主动些，在工作、社交、娱乐等活动上多增加些刺激。";
  } else {
    comment = "你沒有壓力瓜。 NJHL";
  }

  $(".result1").delay(500).fadeIn();
  $(".marks").append(marks);
  $(".explain1").append(comment);
  $("button.back").click(() => {
    localStorage.clear();
    window.location.href = "./PsyTest.html";
  });
}

function test2() {
  var test2Intro = "<p>這個測試, 是關於你對於一些情況時做出的反應而來分析你在面對一些事情的時候的性格...</p><button class='start' id='Q2'></button>";
  $(".test-questions-container").html(test2Intro);
  $(".test-questions").delay(500).fadeIn();
  startTimer();
  timer();
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
                isPaused = true;
                result2();
                timer();
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
      $("button.LQ").click(() => {
        if (x > 1) {
          $(".t2question" + x).fadeOut();
          $(".t2question" + (x - 1))
            .delay(500)
            .fadeIn();
          x--;
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
  $("button.back").click(() => {
    localStorage.clear();
    window.location.href = "./PsyTest.html";
  });
}

function startTimer() {
  $("button.start").on("click", function (e) {
    console.log("shit");
    e.preventDefault();
    $(".test-questions-container").fadeOut();
    setTimeout(() => {
      isPaused = false;
      $(".timer").css({ display: "block" });
      loadTest2Q1();
      console.log(isPaused);
    }, 500);
  });
}

function timer() {
  var secOutput = $("#sec");
  var minOutput = $("#min");
  var sec = 0;
  var min = 0;
  var t = window.setInterval(function () {
    console.log(isPaused);
    if (!isPaused) {
      sec++;
      if (sec >= 60) {
        sec = 0;
        min++;
        if (min < 10) {
          minOutput.text("0" + min);
        } else {
          minOutput.text(min);
        }
      }
      if (sec < 10) {
        secOutput.text("0" + sec);
      } else {
        secOutput.text(sec);
      }
    }
  }, 1000);
}
