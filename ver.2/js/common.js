function scroll__menu(){
    $(document).ready(function(){
        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            var scroll_menu = $('.scroll-menu');
            if (scrollTop > 1) {
                scroll_menu.css('height', '70px');
            } else {
                scroll_menu.css('height', '0');
            }
        })
    });
};
function has__class(){
    $('.footer > .menu-box-7 > ul > .site-map-btn').click(function(){
        var site_map = $('.page-all-menu');

        var height = site_map.height();
        if (site_map.hasClass('active')){
            site_map.removeClass('active');
        }
        else {
            site_map.addClass('active');
        }
    });
};

function alerted(){
	$('.alerted > .alert-box > .close-btn > .close-text').click(function(){
		$('.alerted').removeClass('active');
	})
}

$(function () {
    scroll__menu();
    has__class();
    alerted();
});