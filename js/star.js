particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#84ccff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 100,
        "opacity_min": 0.8,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1.744926547616142,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "top-left",
      "random": false,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 1200,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
})

function PageTopCheck() {
  var winScrollTop = $(this).scrollTop();
  var secondTop = $("#area-2").offset().top - 150; //#area-2の上から150pxの位置まで来たら
  if (winScrollTop >= secondTop) {
    $('.js-scroll').removeClass('scroll-view');//.js-scrollからscroll-viewというクラス名を除去
    $('.js-pagetop').addClass('scroll-view');//.js-pagetopにscroll-viewというクラス名を付与
  } else {//元に戻ったら
    $('.js-scroll').addClass('scroll-view');//.js-scrollからscroll-viewというクラス名を付与
    $('.js-pagetop').removeClass('scroll-view');//.js-pagetopからscroll-viewというクラス名を除去
  }

}

//クリックした際の動き
$('.scroll-top a').click(function () {
  var elmHash = $(this).attr('href'); //hrefの内容を取得
  if (elmHash == "#area-2") {//もし、リンク先のhref の後が#area-2の場合
    var pos = $(elmHash).offset().top;
    $('body,html').animate({ scrollTop: pos }, pos); //#area-2にスクロール
  } else {
    $('body,html').animate({ scrollTop: 0 }, 500); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
  }
  return false;//リンク自体の無効化
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
});