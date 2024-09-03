var portal = "us";
var theme = "9-coop";
var template = "surbox";
var brand_country = "United States";
var dayNames = Array(
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "JEUDI",
  "Vendredi",
  "SAMEDI"
);
var monthNames = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
var img_regalo = "./principal-it.png";
var minutos_y = "minute ";
var segundos = "Secondes";
var modalOptions = {
  backdrop: "static",
  keyboard: false,
};
var data = [
  {
    name: "Élodie",
    address: "Marseille",
    desc: "Won a tefal set!",
    img: "./img/box-04.png",
    time: "Il y a 15 secondes",
  },
  {
    name: "Bastien",
    address: "Lyon",
    desc: "Won a tefal set!",
    img: "./img/box-04.png",
    time: "Il y a 18 secondes",
  },
  {
    name: "Capucine",
    address: "Toulouse",
    desc: "Won a tefal set!",
    img: "./img/box-04.png",
    time: "Il y a 10 secondes",
  },
];
$(document).ready(function () {
  function t(t) {
    return t < 10 && (t = "0" + t), t;
  }
  var e = new Date(),
    n = new Date();
  n.setDate(n.getDate() + 2);
  var i = t(e.getHours()) + ":" + t(e.getMinutes());
  if (
    ($(".js-info_dia").text(e.getDate()),
      $(".js-info_mes").text(e.getMonth()),
      $(".js-info_anyo").text(e.getFullYear()),
      $(".js-info_dia-nombre").text(dayNames[e.getDay()]),
      $(".js-info_mes-nombre").text(monthNames[e.getMonth()]),
      $(".js-info_dia-next2").text(n.getDate()),
      $(".js-info_mes-nombre-next2").text(monthNames[n.getMonth()]),
      $(".js-info_hora-fija").text(i),
      $(".js-info_browser").length >= 1)
  ) {
    var o = getBrowser();
    $(".js-info_browser").text(o);
  }
  if (jQuery(".js-info_browser").length >= 1) {
    var s = getPlatform();
    jQuery(".js-info_so").text(s);
  }
  (function t(e, n) {
    var i = $(e),
      o = $(n);
    if (i) {
      var s = new Date().getDate();
      i.text(s), o.text(s + 2);
    }
  })(".js-current-day", ".js-end-prom-day"),
    $(".js-slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !1,
      fade: !0,
      asNavFor: ".js-slider-nav",
    }),
    $(".js-slider-nav").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".js-slider-for",
      dots: !1,
      focusOnSelect: !0,
      prevArrow:
        "<button type='button' class='slick-prev slick-arrow'><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA9ElEQVRIie3WMUpDQRAG4A9BrOwEwcrCA9hYWqVKq43ewXgJ4yGs9Ao5gJJGUPEMgoFUYieCKHkWz8DbJaCoO49Afth2P2bZnR0WmZOs4hbV17qKQJcwaKAV7iPg0wx9xlZpdB+TBvqOTml0Gy/Sao9Ko+sYZeh5aXQZwwy9xkpp+CxDH9UnUDTHGfqKndJoR31rp+gEB6XRTTxJqz0pjcJdhg7UHevP+W6T6j+Q32TWUfej8F28SS/XYRTe08JzmiZvIGNsRMCttUxYw0OGX0TAzP4We1H4nnQQ+EA3Cu9Lqw4ZfWhx2KMeb28a8GUUvMiP8wl+P2e4Vi0+4AAAAABJRU5ErkJggg==\"></button>",
      nextArrow:
        "<button type='button' class='slick-next slick-arrow'><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg==\"></button>",
    }),
    $("#textarea").on("keyup", function () {
      $(this).val().length > 5
        ? $("#commentBtn").removeAttr("disabled")
        : $("#commentBtn").attr("disabled", "disabled");
    }),
    $("#commentBtn").on("click", function () {
      $("#commentsList").append(
        '<li class="comment__item"><div class="comment__container">\n                                <div class="comment__avatar">\n                                </div>\n                                <div class="comment__content">\n                                    <div class="comment__name">User</div>\n                                    <div class="comment__text">\n' +
        $("#textarea").val() +
        '                                    </div>\n                                    <ul class="comment__actions">\n                                        <span>\n                                            <img src="./img/like.png" alt="">\n                                        </span>\n                                        <div>1</div>\n                                    </ul>\n                                </div>\n                                <div class="comment__time">\n                                    <span>1 min</span>\n                                    <span>like</span>\n                                    <span>comment</span>\n                                </div>\n                            </div></li>'
      ),
        $("#textarea").val(""),
        $("#commentBtn").attr("disabled", "disabled");
    }),
    $(".js-answer").on("click", function (t) {
      t.preventDefault();
      var e = $(this).data("next");
      $(this).data("answ"),
        console.log($("#" + e)),
        $("#" + e).length
          ? $("#" + e)
            .prev()
            .fadeOut("slow", function () {
              $("#" + e).fadeIn("slow");
            })
          : ($("#text,#quiz").fadeOut(),
            $([document.documentElement, document.body]).animate(
              { scrollTop: $("body").offset().top },
              1200
            ),
            $("#preloader").fadeIn("slow"),
            setTimeout(function () {
              $("#res1").fadeIn("slow");
            }, 1e3),
            setTimeout(function () {
              $("#res2").fadeIn("slow");
            }, 2200),
            setTimeout(function () {
              $("#res3").fadeIn("slow");
            }, 3400),
            setTimeout(function () {
              $("#preloader").fadeOut(), $("#choose").fadeIn();
            }, 4200),
            setTimeout(function () {
              $("#modal1").fadeIn("slow");
            }, 5e3));
    });
  var r = 1,
    a = 3,
    l = !1;
  $(document).on("click", ".choose__item:not(.abierta)", function () {
    r <= 3 &&
      (console.log(!$(this).hasClass("abierta")),
        $("#boxes").css("pointer-events", "none"),
        $(this).hasClass("abierta") ||
        ((l = !1),
          $(".circle-loader").removeClass("load-complete"),
          $(".checkmark").css("display", "none"),
          $(this).addClass("abierta"),
          3 == r
            ? ($(this).addClass("premiazo"),
              setTimeout(function () {
                $(".div_img_gift, .img_gift").fadeIn("slow", function () {
                  setTimeout(function () {
                    if (
                      ($("#modal2").fadeOut("slow"),
                        $("#modal3").fadeIn("slow"),
                        $(".circle-loader").addClass("load-complete"),
                        $(".checkmark").css("display", "block"),
                        $("#timerr").length >= 1)
                    ) {
                      var t, e, n, i;
                      (n = 119),
                        (i = setInterval(function () {
                          (t = parseInt(n / 60, 10)),
                            (e = 10 > (e = parseInt(n % 60, 10)) ? "0" + e : e),
                            $("#timerr").text(
                              t + " " + minutos_y + e + " " + segundos
                            ),
                            --n < 0 && clearInterval(i);
                        }, 1e3));
                    }
                  }, 1500);
                });
                countDown();
              }, 4e3)
            )
            : (r++,
              a--,
              $("#iteration").html(a),
              setTimeout(function () {
                $("#modal2").fadeIn("slow"),
                  setTimeout(function () {
                    $(".circle-loader").addClass("load-complete"),
                      $(".checkmark").css("display", "block"),
                      $("#boxes").css("pointer-events", "all");
                  }, 1e3);
              }, 2e3))));
  }),
    ($.fancybox.defaults.touch = !1),
    $("#faqBtn").on("click", function () {
      $("#faq").addClass("active"), $("#faqBtn").hide();
    }),
    $("#faqClose").on("click", function () {
      $("#faq").removeClass("active"), $("#faqBtn").show();
    }),
    $(document).mouseup(function (t) {
      var e = $("#faq");
      e.is(t.target) ||
        0 !== e.has(t.target).length ||
        (e.removeClass("active"), $("#faqBtn").show());
    }),
    $(".js-faq-header").on("click", function () {
      $(".js-faq-header").not($(this)).removeClass("active"),
        $(".js-faq-body").not($(this).siblings(".js-faq-body")).slideUp(),
        $(this).toggleClass("active").siblings(".js-faq-body").slideToggle();
    });
  var c = $(".scrollToTopBtn"),
    d = document.documentElement;
  c.on("click", function t() {
    $([document.documentElement, document.body]).animate(
      { scrollTop: $("body").offset().top },
      500
    );
  }),
    document.addEventListener("scroll", function t() {
      var e = d.scrollHeight - d.clientHeight;
      d.scrollTop / e > 0.45 ? c.addClass("showBtn") : c.removeClass("showBtn");
    });
  let u = new (class t {
    constructor(t) {
      (this.lang = { from: " from " }),
        (this.container = document.querySelector(t)),
        (this.items = document.createElement("ul")),
        this.items.classList.add("notifications__items"),
        this.container.appendChild(this.items);
    }
    create({ name: t, address: e, desc: n, img: i, time: o }) {
      let s = `<div class="notifications__item__img"><img src="${i}" alt="" sizes="" srcset=""></div><div class="notifications__item__content"><div class="notifications__item__content__header"><span class="notifications__item-name">${t}</span>${this.lang.from}<span class="notifications__item-address">${e}</span></div><div class="notifications__item__content__desc">${n}</div><div class="notifications__item__content__bottom"><div class="notifications__item__time">${o}</div><div class="notifications__item__icons"><img src="./img/notification-ok.png" alt=""></div></div></div><div class="notifications__item__btn"><img class="notifications__item__btn-close" src="./img/notifications-close.png" height="15px" width="15px" alt=""></div>`,
        r = document.createElement("li");
      return (
        r.classList.add("notifications__item", "showNoty"),
        (r.innerHTML = s),
        r.addEventListener("click", (t) => t.currentTarget.remove()),
        r
      );
    }
    send(t) {
      let e = this.create(t);
      return this.items.prepend(e), e;
    }
    hide(t) {
      setTimeout(() => {
        t.classList.remove("showNoty"),
          t.classList.add("hiddenNoty"),
          setTimeout(() => {
            t.remove();
          }, 1500);
      }, 7500);
    }
  })(".notifications"),
    p = (t) =>
      new Promise((e, n) => {
        setTimeout(() => e(), t);
      }),
    f = (t, e) => Math.round(t + Math.random() * (e - t));
  data.forEach((t, e) => {
    p(e ? f(6e4, 18e4) : 2e4).then(() => {
      let e = u.send(t);
      u.hide(e);
    });
  });
});
$(".promotion__list").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
  prevArrow:
    "<button type='button' class='slick-prev slick-arrow'><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA9ElEQVRIie3WMUpDQRAG4A9BrOwEwcrCA9hYWqVKq43ewXgJ4yGs9Ao5gJJGUPEMgoFUYieCKHkWz8DbJaCoO49Afth2P2bZnR0WmZOs4hbV17qKQJcwaKAV7iPg0wx9xlZpdB+TBvqOTml0Gy/Sao9Ko+sYZeh5aXQZwwy9xkpp+CxDH9UnUDTHGfqKndJoR31rp+gEB6XRTTxJqz0pjcJdhg7UHevP+W6T6j+Q32TWUfej8F28SS/XYRTe08JzmiZvIGNsRMCttUxYw0OGX0TAzP4We1H4nnQQ+EA3Cu9Lqw4ZfWhx2KMeb28a8GUUvMiP8wl+P2e4Vi0+4AAAAABJRU5ErkJggg==\"></button>",
  nextArrow:
    "<button type='button' class='slick-next slick-arrow'><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg==\"></button>",
});
$(".popup button").click(function () {
  $(this).closest(".popup").fadeOut("slow");
});
let seconds = 3 * 60 + 2,
  h,
  m,
  s,
  t;
function countDown() {
  if (seconds > 0) {
    seconds--;
    (h = (seconds / 3600) ^ 0),
      (m = ((seconds - h * 3600) / 60) ^ 0),
      (s = seconds - h * 3600 - m * 60),
      (time = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s));
    $("#countdown").text(time);
  }
  setTimeout(function () {
    countDown();
  }, 1000);
}

$(function () {
});

let listItem = document.querySelectorAll(".faq-list-item");
listItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.querySelector(".hidden-text").classList.toggle("active");
    item.querySelector(".fa-solid").classList.toggle("fa-plus");
    item.querySelector(".fa-solid").classList.toggle("fa-minus");
    item.querySelector(".list-item-content").classList.toggle("item-active");
  });
});
