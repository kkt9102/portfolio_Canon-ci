console.clear();
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.scroll-menu').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.scroll-menu').removeClass('nav-up').addClass('nav-down');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.scroll-menu').removeClass('nav-down').addClass('nav-up');
        }
    }
    
    lastScrollTop = st;
}


function sliderBtn() {
  $(".main-slider > .dots-box > .dot").click(function () {
    var $active = $(".main-slider > .dots-box").find(".active");
    var $click = $(this);
    var index = $click.index();
    var $next = $active.next();


    $active.removeClass("active");
    $click.addClass("active");

    $(".main-slider > .slider").css("margin-left", -1164 * index);
  });
}
function e_store_sliderBtn() {
  $(".e-store-slider > .dots-box > .dot").click(function () {
    var $active = $(".e-store-slider > .dots-box").find(".active");
    var $click = $(this);
    var index = $click.index();
    var $next = $active.next();


    $active.removeClass("active");
    $click.addClass("active");

    $(".e-store-slider > .slider").css("margin-left", -574 * index);
  });
}

function dslr__review__sliderBtn() {
  $(".dslr-review > .dots-box > .dot").click(function () {
    var $active = $(".dslr-review > .dots-box").find(".active");
    var $click = $(this);
    var index = $click.index();
    var $next = $active.next();


    $active.removeClass("active");
    $click.addClass("active");

    $(".dslr-review > .slider").css("margin-left", -574 * index);
  });
}
function event__sliderBtn() {
  $(".event-slider > .dots-box > .dot").click(function () {
    var $active = $(".event-slider > .dots-box").find(".active");
    var $click = $(this);
    var index = $click.index();
    var $next = $active.next();


    $active.removeClass("active");
    $click.addClass("active");

    $(".event-slider > .slider").css("margin-left", -280 * index);
  });
}
function special__review__sliderBtn() {
  $(".special-review > .dots-box > .dot").click(function () {
    var $active = $(".special-review > .dots-box").find(".active");
    var $click = $(this);
    var index = $click.index();
    var $next = $active.next();


    $active.removeClass("active");
    $click.addClass("active");

    $(".special-review > .slider").css("margin-left", -280 * index);
  });
}

function notice__toggleUp(){
  $('.notice > .notice-toggle-btn > .up').click(function(){

    var $noticeSlider = $('.notice > .notice-viewer > .notice-slider')
    var $current = $noticeSlider.find('.active');
    var $next = $current.next();
    var index = $('.notice > .notice-viewer > .notice-slider > .active').index();
  
    if ( $next.length == 0 ){
      $next = $noticeSlider.find(' > div:first-child');
    }
    else {
      $current.next();
    }
    
    $current.removeClass('active');
    $next.addClass('active');
    $noticeSlider.css('margin-top',-77*index);
    
  })
}

function notice__toggleDown(){
  $('.notice > .notice-toggle-btn > .down').click(function(){

    var $noticeSlider = $('.notice > .notice-viewer > .notice-slider')
    var $current = $noticeSlider.find('.active');
    var $prev = $current.prev();
    var index = $('.notice > .notice-viewer > .notice-slider > .active').index();
  
    if ( $prev.length == 0 ){
      $prev = $noticeSlider.find(' > div:last-child');
    }
    else {
      $current.prev();
    }
    
    $current.removeClass('active');
    $prev.addClass('active');
    $noticeSlider.css('margin-top',-77*index);
    
  })
}

function startStop__toggle(){
  $('.toggle-btn > div').click(function(){

    var $stop = $('.toggle-btn > div:first-child');
    var $start = $('.toggle-btn > div:last-child');
    var $active = $('.toggle-btn').find('.active');
    var $next = $active.next();
    
    if ( $next.length == 0) {
      $next = $stop;
    }
      $active.removeClass('active');
      $next.addClass('active');
      
  });
}



setInterval(function a() {
  var $active = $(".main-slider > .dots-box").find(".active");
  var $click = $(this);
  var index = $click.index();
  var $next = $active.next();

  if ( $next.length == 0 ) {
    $('.main-slider > .dots-box > div:first-child').click();
  }
  else {
    $next.click();
  }
},5000);

setInterval(function a() {
  var $active = $(".event-slider  > .dots-box").find(".active");
  var $click = $(this);
  var index = $click.index();
  var $next = $active.next();

  if ( $next.length == 0 ) {
    $('.event-slider > .dots-box > div:first-child').click();
  }
  else {
    $next.click();
  }
},5000);

function alerted(){
	$('.alerted > .alert-box > .close-btn > .close-text').click(function(){
		$('.alerted').removeClass('active');
	})
}




$(function(){
  sliderBtn();
  e_store_sliderBtn();
  dslr__review__sliderBtn();
  event__sliderBtn();
  special__review__sliderBtn();
  notice__toggleUp();
  notice__toggleDown();
  startStop__toggle();
  alerted();
})