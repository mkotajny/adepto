/**
===========================
Template: Zirox - Creative Digital Agency HTML Template
File: Default JS File
Author: ultraDevs
Author URI: https://www.templatemonster.com/authors/ultradevs/
Description: Zirox - Creative Digital Agency HTML Template
Version: 1.0.0
===========================


Table of Contents
01/ Preloader
02/ Sticky Header
03/ Hero Slider
04/ Pricing Slider
05/ Brand Slider
06/ Testimonials Slider
07/ Counter Up
08/ Mobile Menu
09/ Side Popup
10/ Footer Gallery
11/ Youtube Popup
12/ Scroll Up
13/ Search Popup
14/ Filter
15/ Services Detail Tab

====================================
**/

(function ($) {
	("use strict");

	// Save the timestamp when the script starts loading
	const pageLoadStartTime = Date.now();

	// Animation on Scroll.
	function scrollAnimation() {
		const shouldAnimate = $("body").data("scroll-animation");
		if (true === shouldAnimate) {
			new WOW().init();
		}
	}
	scrollAnimation();

	// Preloader - shows for minimum 10 seconds on first load
	$(window).on("load", function () {
		const currentTime = Date.now();
		const elapsedTime = currentTime - pageLoadStartTime;
		const minDisplayTime = 0; // in miliseconds (1000 = 1 second)
		
		if (elapsedTime < minDisplayTime) {
			// Wait for the remaining time to reach 10 seconds
			const remainingTime = minDisplayTime - elapsedTime;
			setTimeout(function() {
				$(".zirox-pre-loader").fadeOut(500);
			}, remainingTime);
		} else {
			// More than 10 seconds have passed, hide immediately
			$(".zirox-pre-loader").fadeOut(500);
		}
	});

	// Sticky Header.
	if ($(".zirox-header-3").length) {
		$(window).scroll(function () {
			if ($(window).scrollTop() >= 150) {
				$(".zirox-header-3")
					.removeClass("sticky-top")
					.addClass("sticky-top");
			} else {
				$(".zirox-header-3").removeClass("sticky-top");
			}
		});
	}

	/**
	 * Hero Slider.
	 */
	$(".zirox-hero__slider").slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: "linear",
		appendDots: ".zirox-hero__slider__dots",
	});

	/**
	 * Home-2 Hero Slider.
	 */
	$(".home-2-hero-slider").slick({
		dots: false,
		arrows: true,
		prevArrow: ".zirox-hero-section__slider-btn__prev",
		nextArrow: ".zirox-hero-section__slider-btn__next",
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: "linear",
	});

	/**
	 * Pricing Slider.
	 */
	$(".zirox-pricing__table-items").slick({
		dots: false,
		arrows: true,
		prevArrow: ".zirox-pricing__text-btns-prev",
		nextArrow: ".zirox-pricing__text-btns-next",
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 2,
		slidesToScroll: 2,
		fade: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	/**
	 * Brand Slider.
	 */
	$(".zirox-brand__items").slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 5,
		fade: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	});

	/**
	 * Home-2 Testimonials Slider.
	 */
	$(".zirox-home-2-testimonials-items").slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		appendDots: ".zirox-testimonials__avatars",
		customPaging: function (slider, i) {
			const thumb = $(slider.$slides[i])
				.find(".zirox-testimonials__item-head-author-img > img")
				.attr("src");
			const authorName = $(slider.$slides[i])
				.find(".zirox-testimonials__item-head-author-info h3")
				.text();
			return `<div class="zirox-testimonials__avatars__img"><i class="flaticon-plus"></i><img src="${thumb}" alt="${authorName}"></div>`;
		},
	});

	/**
	 * Home-3 Testimonials Slider.
	 */
	$(".zirox-testimonials-items").slick({
		dots: false,
		arrows: true,
		prevArrow: ".zirox-testimonials__text-btns-prev",
		nextArrow: ".zirox-testimonials__text-btns-next",
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 3,
		slidesToScroll: 3,
		fade: false,
		// centerMode: true,
		// centerPadding: '15%',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	/**
	 * Counter Up.
	 */
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
	});

	/**
	 * Mobile Menu
	 */
	$("#mobile-menu").metisMenu();
	$("#side-menu").metisMenu();

	/**
	 * Side Popup
	 */
	$(".zirox-hamburger-menu").on("click", function () {
		$(".zirox-hamburger-menu__btn").toggleClass(
			"zirox-hamburger-menu__btn--active"
		);
		$(".overlay").toggleClass("overlay--active");
		$(".zirox-side-popup").toggleClass("zirox-side-popup--open");
	});
	$(".side-popup-close").on("click", function () {
		$(".zirox-hamburger-menu__btn").removeClass(
			"zirox-hamburger-menu__btn--active"
		);
		$(".overlay").removeClass("overlay--active");
		$(".zirox-side-popup").removeClass("zirox-side-popup--open");
	});

	// Click out side of side popup to close it.
	$(document).on("click", ".overlay", function (e) {
		$(".zirox-side-popup").removeClass("zirox-side-popup--open");
		$(".zirox-hamburger-menu__btn").removeClass(
			"zirox-hamburger-menu__btn--active"
		);
		$(".overlay").removeClass("overlay--active");
	});

	/**
	 * Footer Gallery.
	 */
	$(".footer-gallery-item").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
		zoom: {
			enabled: true,
			duration: 300,
			easing: "ease-in-out",
		},
	});

	/**
	 * Youtube Popup.
	 */
	$(".popup-youtube").magnificPopup({
		type: "iframe",
	});

	/**
	 * Scroll Up.
	 */
	$(".scrollUp").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			600
		);
		return false;
	});

	/**
	 * Search Popup.
	 */
	if ($(".zirox-search-popup").length) {
		$(".zirox-header__navbar__btns-search").click(function () {
			$(".zirox-search-popup").toggleClass("zirox-search-popup--open");
		});

		// Click out side of search popup to close it.
		$(document).on("click", function (e) {
			if (
				!$(".zirox-header__navbar__btns-search")[0].contains(
					e.target
				) &&
				!$(".zirox-search-popup")[0].contains(e.target)
			) {
				$(".zirox-search-popup").removeClass(
					"zirox-search-popup--open"
				);
			}
		});
	}

	/**
	 * Home-2 Filter
	 */
	if ($("#zirox-filter").length) {
		$("#zirox-filter").mixItUp({
			selectors: {
				target: ".filter-item",
				filter: ".filter",
				sort: ".sort-btn",
			},
			animation: {
				animateResizeContainer: false,
				effects: "fade scale",
			},
		});
	}

	/**
	 * Services Detail Tab
	 */
	$(".zirox-services-details__left-tab-links-link").on(
		"click",
		function (evt) {
			evt.preventDefault();
			$(".zirox-services-details__left-tab-links-link").removeClass(
				"zirox-services-details__left-tab-links-link--active"
			);
			$(this).addClass(
				"zirox-services-details__left-tab-links-link--active"
			);
			const toggleTarget = this.getAttribute("data-toggle-target");
			$(".zirox-services-details__left-tab-content")
				.removeClass("zirox-services-details__left-tab-content--active")
				.filter(toggleTarget)
				.addClass("zirox-services-details__left-tab-content--active");
		}
	);
})(jQuery);
