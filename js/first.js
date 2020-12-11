//ハンバーガーボタンの表示非表示の切り替えをボタンと連動

$(function () {
  $(".btn1").on("click", function () { //メニューとバーガーにopenクラスを付けはずし
    $(".menu , .btn-line").toggleClass("open");
  })
});

//スライドインのアニメーション下から上に出てくるやつ

$(function () {
  $(window).scroll(function () {
    //windowの高さを取得
    var windowHeight = $(window).height();
    //windowを起点としてscrollの位置を取得する
    var scrollAmount = $(window).scrollTop();
    //popupに対して繰り返し処理
    $(".popup").each(function () {
      //offset().topとすることでY座標のみ、つまり指定要素の縦の位置のみを取得/this=popup
      var targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - windowHeight + 60) {
        //popup以外にfadeInDownを加える必要がある。
        $(this).addClass("fadeInDown");
      }
    });
  });
});

//スライドインのアニメーション・左から右

$(function () {
  $(window).scroll(function () {
    //windowの高さを取得
    var windowHeight = $(window).height();
    //windowを起点としてscrollの位置を取得する
    var scrollAmount = $(window).scrollTop();
    //popupに対して繰り返し処理
    $(".slideinL").each(function () {
      //offset().topとすることでY座標のみ、つまり指定要素の縦の位置のみを取得/this=popup
      var targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - windowHeight + 60) {
        //popup以外にfadeInDownを加える必要がある。
        $(this).addClass("fadeInLeft");
      }
    });
  });
});

//スライドインのアニメーション・右から左
$(function () {
  $(window).scroll(function () {
    //windowの高さを取得
    var windowHeight = $(window).height();
    //windowを起点としてscrollの位置を取得する
    var scrollAmount = $(window).scrollTop();
    //popupに対して繰り返し処理
    $(".slideinR").each(function () {
      //offset().topとすることでY座標のみ、つまり指定要素の縦の位置のみを取得/this=popup
      var targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - windowHeight + 60) {
        //popup以外にfadeInDownを加える必要がある。
        $(this).addClass("fadeInRight");
      }
    });
  });
});