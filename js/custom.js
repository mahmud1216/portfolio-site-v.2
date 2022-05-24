function myValidation() {
  const getNameValue = document.forms["contactForm"]["name"].value;
  const getEmailValue = document.forms["contactForm"]["name"].value;
  const getPhoneValue = document.forms["contactForm"]["name"].value;
  const getMessageValue = document.forms["contactForm"]["name"].value;
  let error = [];
  if (getNameValue == "" || getNameValue.length < 3) {
    error[0] = "Name must contain at least 3 letter";
    document.getElementById("name-error").innerHTML = error[0];
  } else {
    document.getElementById("name-error").innerHTML = "";
  }
  if (getEmailValue == "" || getEmailValue.length < 10) {
    error[1] = "Name must contain at least 10 letter";
    document.getElementById("email-error").innerHTML = error[1];
  } else {
    document.getElementById("email-error").innerHTML = "";
  }
  if (getPhoneValue == "" || getPhoneValue.length < 11) {
    error[2] = "Name must contain at least 11 letter";
    document.getElementById("phone-error").innerHTML = error[2];
  } else {
    document.getElementById("phone-error").innerHTML = "";
  }
  if (getMessageValue == "" || getMessageValue.length < 50) {
    error[3] = "Name must contain at least 50 letter";
    document.getElementById("message-error").innerHTML = error[3];
  } else {
    document.getElementById("message-error").innerHTML = "";
  }
  if (error.length > 0) {
    return fasle;
  }
}

//////////////// JQuery

$(document).ready(function () {
  ///////////// Nav Bar JQuery

  $("#mobile-view").click(function () {
    $("#main-menu ul").slideToggle(1000);
  });
  $(window).resize(function () {
    if ($(window).width() > 576) {
      $("#main-menu ul").show();
    } else {
      $("#main-menu ul").hide();
    }
  });

  $(window).scroll(function () {
    let value = $(window).scrollTop();
    if (value > 1000) {
      $("#upper").fadeIn(1000);
    } else {
      $("#upper").fadeOut(1000);
    }
  });
  $("#upper").click(function () {
    $("html").animate({ scrollTop: 0 }, 600);
  });
});
