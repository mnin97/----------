$("#langBtn").click(function () {
  url = $("#langList").val();
  window.open(url);
});

const mainSlide = new Swiper(".sc-visual .swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".fraction",
    type: "fraction",
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});

mainSlide.on("slideChange", function () {
  if (this.realIndex >= 5) {
    $(".sc-visual .citizen")
      .addClass("active")
      .siblings()
      .removeClass("active");
  } else {
    $(".sc-visual .news").addClass("active").siblings().removeClass("active");
  }
});

$(".sc-visual .btn-tab").click(function () {
  idx = $(this).data("idx");
  $(this).addClass("active").siblings().removeClass("active");
  mainSlide.slideToLoop(idx);
});

const bannerSlide = new Swiper(".sc-bannerslide .swiper", {
  slidesPerView: 3,
  spaceBetween: 43,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".fraction",
    type: "fraction",
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  speed: 500,
  effect: "slide",
});

const slideArr = [mainSlide, bannerSlide];

$(".btn-autoplay").click(function () {
  idx = $(this).data("slide");

  if ($(this).hasClass("on")) {
    slideArr[idx].autoplay.start();
  } else {
    slideArr[idx].autoplay.stop();
  }
  $(this).toggleClass("on");
});

$(".sc-agency .btn-agency").click(function () {
  $(this).find("span").toggleClass("on");
  if ($(this).hasClass("on")) {
    $(".sc-agency .btn-agency")
      .removeClass("on")
      .siblings(".sub-area")
      .stop()
      .slideUp(200);
  } else {
    $(".sc-agency .btn-agency")
      .removeClass("on")
      .siblings(".sub-area")
      .stop()
      .slideUp(200);
    $(this).addClass("on").siblings(".sub-area").stop().slideDown(200);
  }
});

$(".sc-agency .sub-area li:first-child").keydown(function (e) {
  if (e.keyCode === 9 && e.shiftKey) {
    $(".sc-agency .btn-agency")
      .removeClass("on")
      .siblings(".sub-area")
      .stop()
      .slideUp(200);
  }
});
$(".sc-agency .sub-area li:last-child").keydown(function (e) {
  if (e.keyCode === 9 && !e.shiftKey) {
    $(".sc-agency .btn-agency")
      .removeClass("on")
      .siblings(".sub-area")
      .stop()
      .slideUp(200);
  }
});

$(window).scroll(function () {
  curr = $(this).scrollTop();

  if (curr >= 20) {
    $(".fix-top").addClass("on");
  } else {
    $(".fix-top").removeClass("on");
  }
});

$(".fix-top").click(function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

if ($(".badge-administration")) {
  $(".badge-administration").css("background-color", "#028ab6");
}
if ($(".badge-welfare")) {
  $(".badge-welfare").css("background-color", "#d76000");
}
if ($(".badge-eco")) {
  $(".badge-eco").css("background-color", "#599100");
}
if ($(".badge-traffic")) {
  $(".badge-traffic").css("background-color", "#337ee2");
}

if ($(".행정")) {
  $(".행정").css("color", "#028ab6");
}
if ($(".eco")) {
  $(".eco").css("color", "#599100");
}
if ($(".복지")) {
  $(".복지").css("color", "#d76000");
}
if ($(".culture")) {
  $(".culture").css("color", "#9b64d3");
}
