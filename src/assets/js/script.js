// ====================================================================================
// 基本スクリプト
// ====================================================================================
//Googleマップ
window.addEventListener('DOMContentLoaded', () => {
    const map = $('.gjs-no-pointer');
    if (map !== null) {
        map.attr('title', '地図')
    }
});

// ====================================================================================
//ハンバーガーメニュー階層化.ver
$(function() {
    $('.globalMenuSp').hide();
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.globalMenuSp').fadeToggle();
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
            $('.chatbot').addClass('hide');
        } else {
            $('.globalMenuSp').removeClass('active');
            $('.chatbot').removeClass('hide');
        }
    });
});

// ====================================================================================
// ヘッダー（クラス名:.header）の高さ自動調整スクロール
// ページ外からid指定リンクを踏んだ場合と同一ページ内のid指定リンクを踏んだ場合どちらにも対応
$(function() {
    const headerHight = $('.header').outerHeight();
    // ページ内リンクの挙動
    $('a[href*="#"]').click(function() {
        let targetHref = $(this).attr('href');
        if (targetHref != '#') {
            targetHref = targetHref.slice(targetHref.indexOf('#') + 1);
            const targetEle = $('[id="' + targetHref + '"]');
            const position = targetEle.offset().top - headerHight;
            $('html, body').animate({ scrollTop: position }, 550, 'swing');
        } else {
            $('html, body').animate({ scrollTop: 0 }, 550, 'swing');
        }
        return false;
    });
});
// ページ外からのid指定リンクを開いた場合
window.addEventListener('DOMContentLoaded', (event) => {
    const headerHight = $('.header').outerHeight();
    let hash = location.hash;
    if (hash.indexOf('#') != -1) {
        //id指定つきリンクを開いていた場合
        hash = hash.slice(hash.indexOf('#') + 1);
        const targetEle = $('[id="' + hash + '"]');
        const position = targetEle.offset().top - headerHight;
        $('html, body').animate({ scrollTop: position }, 550, 'swing');
        $('.globalMenuSp').removeClass('active');
    }
});

// ====================================================================================
$(function() {
    $('.globalMenuSp .accordionChild').hide();
    // メニュー内のリンクにクリックイベントを設定
    $('.globalMenuSp .hamburgerList .link').on('click', function() {
        // クリックされた要素が.accordionRootを持っている場合
        if ($(this).hasClass('accordionRoot')) {
            // .accordionChildの表示・非表示を切り替える
            $(this).parent().next('.accordionChild').slideToggle();
            // ここで処理を終了し、.globalMenuSpの.activeクラスはそのまま
            return;
        }
        // ハンバーガーメニューボタンのactiveクラスの有無を切り替える
        $('.hamburger').toggleClass('active');

        // メニューの表示・非表示を切り替える
        $('.globalMenuSp').fadeToggle();

        // メニューのactiveクラスの有無を切り替える
        if ($('.hamburger').hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});
// ====================================================================================
// 追加スクリプト
// ====================================================================================

//スクロールをなめらかに
$(function() {
    var pagetop = $('#pageTopBtnLink');
    pagetop.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});


$(function() {
    var height = $(".header").height();
    $("body").css("margin-top", height);
});