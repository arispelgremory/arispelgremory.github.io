$(document).ready(() => {
  $("form").submit(() => {
    let error = false;
    if ($('input[name="FName"]').val() == "") {
      $('label[for="FName"]').html("First Name <span>名字:</span>").append("<p>Please don't leave it blank 請輸入您的名字</p>").addClass("error");
      error = true;
    } else {
      $('label[for="FName"]').html("First Name <span>名字:</span>").removeClass("error");
    }
    if ($('input[name="LName"]').val() == "") {
      $('label[for="LName"]').html("Last Name <span>姓:</span>").append("<p>Please don't leave it blank 請輸入您的姓</p>").addClass("error");
      error = true;
    } else {
      $('label[for="LName"]').html("Last Name <span>姓:</span>").removeClass("error");
    }

    if ($('input[name="email"]').val() == "") {
      $('label[for="email"]').html("Email <span>電子郵件</span>").append("<p>Please don't leave it blank 請輸入您的電郵</p>").addClass("error");
      error = true;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('input[name="email"]').val())) {
      $('label[for="email"]').html("Email <span>電子郵件</span>").append("<p>Please insert a valid Email 請輸入對的電郵格式</p>").addClass("error");
      error = true;
    } else {
      $('label[for="email"]').html("Email <span>電子郵件</span>").removeClass("error");
    }

    if (!$('input[name="msg"]').val()) {
      $($('label[for="msg"]')).html("Message <span>信息:</span>").append("<p>Please don't leave it blank 請輸入您的信息</p>").addClass("error");
      error = true;
    } else {
      $($('label[for="msg"]')).html("Message <span>信息:</span>").removeClass("error");
    }

    if (error) {
      return false;
    } else {
      return true;
    }
  });
});
