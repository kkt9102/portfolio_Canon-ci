function main__slide__control() {
    $('.banner-slide > .owl-carousel').trigger('play.owl.autoplay');

    $('.banner-slide').attr('banner-slide-autoplay-status', 'Y');
};
function main__slide() {
    var main = $('.banner-slide > .owl-carousel');
    $('.banner-slide > .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        dotsData: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
    });
    $('.main-play-stop-btn > .play').on('click', function () {
        main.trigger('play.owl.autoplay', [5000]);
        $('.banner-slide').attr('banner-slide-autoplay-status', 'Y');
    })
    
    $('.main-play-stop-btn > .stop').on('click', function () {
        main.trigger('stop.owl.autoplay');
        $('.banner-slide').attr('banner-slide-autoplay-status', 'N');
    })
};
function sub_1__slide__control() {
    $('.sub-1-slider > .owl-carousel').trigger('play.owl.autoplay');

    $('.sub-1-slider').attr('sub-1-slide-autoplay-status', 'Y');
}
function sub_1__slide() {
    var sub1 = $('.sub-1-slider > .owl-carousel');
    $('.sub-1-slider > .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        dotsClass: 'owl-dots',
        dotsData: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
    });
    $('.sub-1-play-stop-btn > .play').on('click', function () {
        sub1.trigger('play.owl.autoplay', [5000]);
        $('.sub-1-slider').attr('sub-1-slide-autoplay-status', 'Y');
    });

    $('.sub-1-play-stop-btn > .stop').on('click', function () {
        sub1.trigger('stop.owl.autoplay');
        $('.sub-1-slider').attr('sub-1-slide-autoplay-status', 'N');
    });

    $('.sub-1-play-stop-btn > .stop').click(); // 페이지 로딩시 강제로 슬라이드 정지
};

function sub_2__slide__control() {
    $('.sub-2-slider > .owl-carousel').trigger('play.owl.autoplay');

    $('.sub-2-slider').attr('sub-2-slide-autoplay-status', 'Y');
}
function sub_2__slide() {
    var sub2 = $('.sub-2-slider > .owl-carousel');
    $('.sub-2-slider > .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        dotsClass: 'owl-dots',
        dotsData: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
    });
    $('.sub-2-play-stop-btn > .play').on('click', function () {
        sub2.trigger('play.owl.autoplay', [5000]);
        $('.sub-2-slider').attr('sub-2-slide-autoplay-status', 'Y');
    })
    $('.sub-2-play-stop-btn >  .stop').on('click', function () {
        sub2.trigger('stop.owl.autoplay');
        $('.sub-2-slider').attr('sub-2-slide-autoplay-status', 'N');
    })
};

function sub_3__slide__control() {
    $('.sub-3-slider > .owl-carousel').trigger('play.owl.autoplay');

    $('.sub-3-slider').attr('sub-3-slide-autoplay-status', 'Y');
}
function sub_3__slide() {
    var sub3 = $('.sub-3-slider > .owl-carousel');
    $('.sub-3-slider > .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        dotsClass: 'owl-dots',
        dotsData: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
    });
    $('.sub-3-play-stop-btn >.play').on('click', function () {
        sub3.trigger('play.owl.autoplay', [5000]);
        $('.sub-3-slider').attr('sub-2-slide-autoplay-status', 'N');
    })
    $('.sub-3-play-stop-btn >.stop').on('click', function () {
        sub3.trigger('stop.owl.autoplay');
        $('.sub-3-slider').attr('sub-3-slide-autoplay-status', 'N');
    })
    $('.sub-3-play-stop-btn > .stop').click(); // 페이지 로딩시 강제로 슬라이드 정지
};

function e_store__slide__control() {
    $('.e-store-slider > .owl-carousel').trigger('play.owl.autoplay');

    $('.e-store-slider').attr('e-store-slide-autoplay-status', 'Y');
}
function e_store__slide() {
    var e_store = $('.e-store-slider > .owl-carousel');
    $('.e-store-slider > .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        dotsClass: 'owl-dots',
        dotsData: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
    });
    $('.e-store-play-stop-btn > .play').on('click', function () {
        e_store.trigger('play.owl.autoplay', [4000]);
        $('.e-store-slider').attr('e-store-slide-autoplay-status', 'N');
    })
    $('.e-store-play-stop-btn > .stop').on('click', function () {
        e_store.trigger('stop.owl.autoplay');
        $('.e-store-slider').attr('e-store-slide-autoplay-status', 'N');
    })
};

function notice_board__slide(){
    $('.notice-board-slider > .slick-slider').slick({
        slide: 'div',		//슬라이드 되어야 할 div  
        infinite : true, 	//무한 반복 옵션	 
        slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
        dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,		// 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : true,		// 세로 방향 슬라이드 옵션
        prevArrow : ".prev",		// 이전 화살표 모양 설정
        nextArrow : ".next",		// 다음 화살표 모양 설정
        draggable : true, 	//드래그 가능 여부 
        centerMode: false,  //센터모드 (active된 요소가 화면 가운데로,slidesToShow 갯수가 짝수 일 경우 아이템의 경계선이 가운데로 옴)
    });
    $('.notice-board > .vertical-box > .notice-board-slider > .play-stop-btn > .stop ').on('click', function() {
        $('.notice-board-slider > .slick-slider')
            .slick('slickPause')
    });
    
    $('.notice-board > .vertical-box > .notice-board-slider > .play-stop-btn > .play').on('click', function() {
        $('.notice-board-slider > .slick-slider')
            .slick('slickPlay')
        });
}


function play__stop() {
    $('.main-play-stop-btn > div').click(function () {
        var $main_play = $('.main-play-stop-btn > .play');
        var $main_stop = $('.main-play-stop-btn > .stop');

        if ($main_stop.hasClass('active')) {
            $main_play.addClass('active');
            $main_stop.removeClass('active');
        } else {
            $main_play.removeClass('active');
            $main_stop.addClass('active');
        }
    });
    $('.sub-1-play-stop-btn > div').click(function(){
        var $main_play = $('.sub-1-play-stop-btn > .play');
        var $main_stop = $('.sub-1-play-stop-btn > .stop');

        if ($main_stop.hasClass('active')) {
            $main_play.addClass('active');
            $main_stop.removeClass('active');
        } else {
            $main_play.removeClass('active');
            $main_stop.addClass('active');
        }
    });
    $('.sub-2-play-stop-btn > div').click(function(){
        var $main_play = $('.sub-2-play-stop-btn > .play');
        var $main_stop = $('.sub-2-play-stop-btn > .stop');

        if ($main_stop.hasClass('active')) {
            $main_play.addClass('active');
            $main_stop.removeClass('active');
        } else {
            $main_play.removeClass('active');
            $main_stop.addClass('active');
        }
    });
    $('.sub-3-play-stop-btn > div').click(function(){
        var $main_play = $('.sub-3-play-stop-btn > .play');
        var $main_stop = $('.sub-3-play-stop-btn > .stop');

        if ($main_stop.hasClass('active')) {
            $main_play.addClass('active');
            $main_stop.removeClass('active');
        } else {
            $main_play.removeClass('active');
            $main_stop.addClass('active');
        }
    });
    $('.e-store-play-stop-btn > div').click(function(){
        var $main_play = $('.e-store-play-stop-btn > .play');
        var $main_stop = $('.e-store-play-stop-btn > .stop');

        if ($main_stop.hasClass('active')) {
            $main_play.addClass('active');
            $main_stop.removeClass('active');
        } else {
            $main_play.removeClass('active');
            $main_stop.addClass('active');
        }
    });
    $('.notice-board > .vertical-box > .notice-board-slider > .play-stop-btn > div').click(function(){
        var $play= $('.notice-board > .vertical-box > .notice-board-slider > .play-stop-btn > .play');
        var $stop= $('.notice-board > .vertical-box > .notice-board-slider > .play-stop-btn > .stop');
    
        if ($play.hasClass('active')){
            $stop.addClass('active');
            $play.removeClass('active');
        }    
        else {
            $stop.removeClass('active');
            $play.addClass('active');
        }
    })
};

$(function(){
    main__slide__control();
    main__slide();
    sub_1__slide__control();
    sub_1__slide();
    sub_2__slide__control();
    sub_2__slide();
    sub_3__slide__control();
    sub_3__slide();
    e_store__slide__control();
    e_store__slide();
    notice_board__slide();
    play__stop();
})