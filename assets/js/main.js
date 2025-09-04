$(function () {

  // SPメニュー
  $("#js-hamburger-menu, .navigation__link").click(function () {
    $(".header-sp,.black-bg,.header").toggleClass("active"); //ボタン自身に activeクラスを付与し
  });
  $(".header-sp__btn-img").click(function () {
    $(".header-sp,.black-bg,.header").toggleClass("active");
    $('.hamburger-menu').toggleClass('hamburger-menu--open');
  });

  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(500);
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });


  // TOPへボタン
  $(function () {
    var $topButton = $(".top-to-js");
    var $footer = $("footer"); // フッター要素を取得

    // トップへスクロール
    $topButton.click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $("html, body").animate({
        scrollTop: 0
      }, 500);
    });

    // スクロール時の処理
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var footerTop = $footer.offset().top;

      // フッターに達したかどうか
      if (scrollTop + windowHeight >= footerTop) {
        $topButton.fadeOut();
      } else {
        $topButton.fadeIn();
      }
    });
  });





  // メインビジュアル　スライダー
  $(document).ready(function () {
    const $slides = $('.main-visual-js img');
    let current = 0;
    const slideCount = $slides.length;
    const intervalTime = 5000; // 3秒ごとに切り替え

    // 初期設定：最初の画像以外を非表示
    $slides.hide().eq(current).show();

    // スライド切り替え
    setInterval(function () {
      const next = (current + 1) % slideCount;
      $slides.eq(current).fadeOut(1000);
      $slides.eq(next).fadeIn(1000);
      current = next;
    }, intervalTime);
  });


  // おいしさのひみつ
  $('.top-secret-js').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 6, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 4, // 画面幅750px以下でスライド3枚表示
      }
    }]
  });


  $(".top-recs-js").slick({
    autoplay: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "12%",
    dots: false,
    arrows: true,
    slidesToShow: 3,
    variableWidth: true,
    dots: true,
    dotsClass: 'dots-wrap',

    responsive: [{
        breakpoint: 800,
        settings: {
          centerPadding: "12%",
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: "2%",
          slidesToShow: 1,
          arrows: false, // 矢印非表示

        }
      },
    ],
  });


  // 商品詳細　画像の切り替え
  $(function () {
    $(".js-sub-img img").on("click", function () {
      const imgSrc = $(this).attr("src");

      $(".js-sub-img").removeClass("current");
      $(this).parent().addClass("current");

      const $mainImgContainer = $(".js-main-img");
      const $currentImg = $mainImgContainer.find("img");

      // 新しい画像を作って、メイン画像の上に追加
      const $newImg = $("<img>")
        .attr("src", imgSrc)
        .css({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
          zIndex: 2
        });

      $mainImgContainer.css("position", "relative").append($newImg);

      $newImg.on("load", function () {
        // 新しい画像をフェードイン、古い画像をフェードアウト
        $newImg.animate({
          opacity: 1
        }, 500, function () {
          // 古い画像を削除して、新しい画像だけにする
          $currentImg.remove();
          $newImg.css({
            position: "",
            top: "",
            left: "",
            width: "",
            height: "",
            opacity: "",
            zIndex: ""
          });
        });
      });
    });
  });


  //フェードイン
  $(window).scroll(function () {
    const windowHeight = $(window).height(); //ウィンドウの高さ
    const scroll = $(window).scrollTop(); //スクロール量

    $(".fade-in-js").each(function () {
      const targetPosition = $(this).offset().top; //要素の上からの距離
      if (scroll > targetPosition - windowHeight + 50) {
        $(this).addClass("action");
      }
    });
  });


  $(function () {
    var headerHeight = 40; // ヘッダーの高さ
    $('a[href^="#"]').click(function () {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerHeight;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });
  });

})