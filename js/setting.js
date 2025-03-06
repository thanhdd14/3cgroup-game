//menu header
$('.js-mobile').on('click', function(){
	$(this).toggleClass("js-mobile--close");
	$("html").toggleClass("js-locked");
	// $(".nav-menu").slideToggle();
	// e.preventDefault();
	$(".header-nav").fadeToggle();
});
$('.header-language__curent').on('click', function(){
	$(this).next(".header-language__list").slideToggle();
});
$('.header-nav__sub').on('click', function(){
	$(this).toggleClass("active");
	$(this).next(".header-nav__submenu").slideToggle();
});
$('.header-search__open').on('click', function(){
	$(".header-search--custom").addClass("active");
	$(".js-mobile").removeClass("js-mobile--close");
	$(".header-nav").fadeOut();
});
$('.header-search__close').on('click', function(){
	$(".header-search--custom").removeClass("active");
});
$('.footer-ct__ttl').on('click', function(){
	$(this).toggleClass("active");
	$(this).next("ul").slideToggle();
});

$('.top-mv__img').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.top-mv__list',
	infinite: true,
	autoplay: true,
});
$('.top-mv__list').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.top-mv__img',
	dots: false,
	focusOnSelect: true,
	infinite: true,
	autoplay: true,
});



$(function () {
	$(".tab-menu li").click(function () {
		var num = $(".tab-menu li").index(this);
		$(".tab-content .tab-content__item").removeClass('active');
		$(".tab-content .tab-content__item").eq(num).addClass('active');
		$(".tab-menu li").removeClass('active');
		$(this).addClass('active')
	});
});
